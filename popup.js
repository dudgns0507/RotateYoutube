
$(function() {
    chrome.tabs.executeScript(null, { file: "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" }, function() {
        $('#rotate-btn').click(function() {
            chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT, active: true}, function(tabs) {
                chrome.tabs.executeScript(tabs[0].id,{code:`document.querySelectorAll('.html5-video-player')[0].style.transform = "rotate(90deg)";`});
                chrome.tabs.executeScript(tabs[0].id,{code:`document.querySelectorAll('.html5-video-player')[0].style.margin = "0 auto";`});
                chrome.tabs.executeScript(tabs[0].id,{code:`document.querySelectorAll('.html5-video-player')[0].style.width = "100vh";`});

                chrome.tabs.executeScript(tabs[0].id,{code:`document.querySelectorAll('.ytp-fullscreen-button')[0].click();`});

                chrome.tabs.executeScript(tabs[0].id,{code:`setTimeout(function() {
                    document.querySelectorAll('.html5-main-video')[0].style.width = "100vh";
                }, 300)`});
            });
        });
    });    
});