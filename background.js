chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {file: 'jquery-3.1.0.min.js'});
    chrome.tabs.executeScript(tab.id, {file: 'app.js'});
});
