// Inject behavior
chrome.tabs.onUpdated.addListener(((tabId, changeInfo, tab) => {
    chrome.tabs.get(tabId, current_tab_info => {
        if (/^https:\/\/www\.google/.test(current_tab_info.url)
            && tab.url !== undefined
            && changeInfo.status === "complete") {
            chrome.tabs.executeScript(null, {file: './foreground.js'})
        }
    })
}));
