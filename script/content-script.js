document.addEventListener('DOMContentLoaded', (event) => {
  console.log('我是ContentScript，我被运行了的!');
  chrome.runtime.sendMessage({cmd: 'background', initiate: 'websocket is loading!'});
});
