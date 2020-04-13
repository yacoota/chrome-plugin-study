@echo off

rem npm install -g javascript-obfuscator

echo Starting obfuscate code!

javascript-obfuscator  script/background.js --output script/dist/background.min.js --compact true --self-defending false && javascript-obfuscator  script/popup.js --output script/dist/popup.min.js --compact true --self-defending false && javascript-obfuscator  script/content-script.js --output script/dist/content-script.min.js --compact true
--self-defending false &&

echo Finish!

