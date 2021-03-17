<p align="center">
  <img src="https://s3.amazonaws.com/assets.turntable.fm/images/index/logo.png"/>
  <br>
  <br><b>t</b>urn<b>t</b>able <b>tools</b>
  <br>a collection of tools
  <br> and enhancements for tt.fm</br>
</p>

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/fluteds/tttools/graphs/commit-activity) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

### **dark mode**

enables a darkmode for turntable.fm

**install dark mode**

- copy the [raw file](https://raw.githubusercontent.com/fluteds/tttools/main/darkmode/darkmode.css) into your css changer of choice.

![Screenshot](https://user-images.githubusercontent.com/34608301/111393018-b6d8ea80-86af-11eb-87b3-b366abec39b2.png)

### **plug.dj mention**

a userscript that replaces turntable's mention sound with the mention sound from plug.dj incase you wanted that extra bit of nostalgia.

**install plug.dj mention**

- for automatic enabling use [tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) and copy the [raw file contents](https://raw.githubusercontent.com/fluteds/tttools/main/mentions/plugmention.js) into a new script.

- for manual enabling create a new bookmark with the following code block below. this method allows you to click the bookmark to when you want to enable it rather than automatically enabling it on the webpage loading. 

`javascript:(function(){$.getScript('https://raw.githubusercontent.com/fluteds/tttools/main/mentions/plugmention.js');})();`

<hr>

### **issues and contributing**

if you have any problems, catch me on [**turntable.fm**](https://ttstats.pinnacleofdestruction.net/user/6048fa3647b5e3001a8f7869), [open an issue](https://github.com/fluteds/tttools/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) or pull request (if you're techy like that!)
