chrome.tabs.onUpdated.addListener(function tabUpdateListener(tabId, changeInfo) {
    if (changeInfo.url != undefined && changeInfo.status == "loading") {
        if (changeInfo.url.indexOf('oauth.vk.com/blank.html') > -1) {
            alert("dfsd");
        }
    }
});
