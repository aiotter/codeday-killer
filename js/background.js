chrome.runtime.onMessage.addListener(function(notificationOptions, sender, sendResponse){
  chrome.notifications.create(null, notificationOptions, function(id){
    setTimeout(function(){chrome.notifications.clear(id)}, 5000);
  });
  return true
});

