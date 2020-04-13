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
