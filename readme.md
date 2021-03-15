<p align="center">
  <img src="https://s3.amazonaws.com/assets.turntable.fm/images/index/logo.png"/>
  <br>
  <br><b>t</b>urn<b>t</b>able <b>tools</b>
  <br>a collection of tools
  <br> and enhancements for tt.fm</br>
  
</p>

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/fluteds/tttools/graphs/commit-activity) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

### **🔦 dark mode**

enables a darkmode for the chat bar. 

**install dark mode**

copy the [raw file](https://raw.githubusercontent.com/fluteds/tttools/main/darkmode.css) into your css changer of your choice.

### **🛎️ plug.dj mention**

replaces turntables mention noise with the mention noise from plug.dj.

**install plug.dj mention**

for **manual enabling** create a new bookmark with the following content:

`javascript:(function(){$.getScript('https://raw.githubusercontent.com/fluteds/tttools/main/plugmention.js');})();`

this method allows you to click the bookmark to when you want to enable it rather than automatically enabling it on the webpage loading. for **automatic enabling** use [tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) and copy the [raw file contents](https://raw.githubusercontent.com/fluteds/tttools/main/plugmention.js) into a new script.
