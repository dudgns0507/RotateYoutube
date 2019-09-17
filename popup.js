
$(function() {
    chrome.tabs.executeScript(null, { file: "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" }, function() {
        $('#rotate-btn').click(function() {
            chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT, active: true}, function(tabs) {
                chrome.tabs.executeScript(tabs[0].id,{code:`document.querySelectorAll('.html5-video-player')[0].style.transform = "rotate(90deg)";`});
                chrome.tabs.executeScript(tabs[0].id,{code:`document.querySelectorAll('.html5-video-player')[0].style.margin = "0 auto";`});

                chrome.tabs.executeScript(tabs[0].id,{code:`document.querySelectorAll('.ytp-fullscreen-button')[0].click();`});

                chrome.tabs.executeScript(tabs[0].id,{code:`setInterval(function() {
                    if(1 >= window.outerHeight - window.innerHeight) {
                        document.querySelectorAll('.html5-video-player')[0].style.top = "0px";
                        document.querySelectorAll('.html5-main-video')[0].style.left = "21%";
                        document.querySelectorAll('.html5-main-video')[0].style.width = "100vh";
                    } else {
                        document.querySelectorAll('.html5-video-player')[0].style.top = "40%";
                        document.querySelectorAll('.html5-video-player')[0].style.left = "-18%";
                        document.querySelectorAll('.html5-main-video')[0].style.width = "calc(100vh - 4%)";
                    }
                }, 100)`});
            });
        });
    });    
});