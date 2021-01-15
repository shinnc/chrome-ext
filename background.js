function onClick(info, tab) {
  chrome.tabs.query({
    "active": true,
    "currentWindow": true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      "functiontoInvoke": "crawl"
    })
  })
}

chrome.contextMenus.create({
  title: "Crawl ads",
  contexts: ["page"],
  id: "CONTEXT_MENU_ID",
})

chrome.contextMenus.onClicked.addListener(onClick)
