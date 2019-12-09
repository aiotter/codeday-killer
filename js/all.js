function toast(oldUrl, newUrl) {
  const options = {
    type: 'basic',
    iconUrl: document.querySelector('link[rel*=icon]').getAttribute('href'),
    title: chrome.runtime.getManifest().name + " running!",
    message: new URL(oldUrl).host + " -> " + new URL(newUrl).host,
    silent: true,
  };
  chrome.runtime.sendMessage(null, options);
};

