function crawl() {
  const tags = document.querySelectorAll('a')
  let sponsored = []

  for (let tag of tags) {
    if (tag.innerText === 'Sponsored') {
      sponsored.push(tag)
    }
  }

  if (sponsored.length === 0) {
    alert('No ads found on the page.')
    return
  }

  for (let sponsoredAnchor of sponsored) {
    const ads = sponsoredAnchor.closest('div[role="article"]')
    const image = ads.querySelector('img')
    const divs = ads.querySelectorAll('span[dir="auto"]')

    let array = []
    for (let div of divs) {
      array.push(div.innerText)
    }
    alert(array)
  }
}

chrome.extension.onMessage.addListener(function (message, sender, callback) {
  if (message.functiontoInvoke == "crawl") {
    crawl();
  }
});
