chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if(request.cmd === 'background') {
      console.log("获取缓存的WS实例：%o", request);
  }
});

chrome.runtime.onInstalled.addListener(() => {
  console.log('chrome.runtime.installed event : %o',new Date());
});

chrome.runtime.onStartup.addListener(() => {
  console.log('chrome.runtime.startup event : %o',new Date());
});

chrome.runtime.onConnect.addListener(() => {
  console.log('chrome.runtime.connect event : %o',new Date());
});

chrome.runtime.onSuspend.addListener(() => {
  console.log('chrome.runtime.suspend event : %o',new Date());
});

chrome.runtime.onUpdateAvailable.addListener(() => {
  console.log('chrome.runtime.update event : %o',new Date());
});

chrome.runtime.onBrowserUpdateAvailable.addListener(() => {
  console.log('chrome.runtime.browser.update event : %o',new Date());
});
