<p align="center">
  <img src="https://s3.amazonaws.com/assets.turntable.fm/images/index/logo.png"/>
  <br>
  <br><b>t</b>urn<b>t</b>able <b>tools</b>
  <br>a collection of tools
  <br> and enhancements for tt.fm</br>
</p>

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/fluteds/tttools/graphs/commit-activity) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

## **contents**

- [**contents**](#contents)
- [**dark mode**](#dark-mode)
    - [install dark mode](#install-dark-mode)
- [**auto dark mode**](#auto-dark-mode)
    - [install auto dark mode](#install-auto-dark-mode)
- [**work mode**](#work-mode)
    - [install work mode](#install-work-mode)
- [**plug.dj mentions for turntable.fm**](#plugdj-mentions-for-turntablefm)
    - [install plug.dj mentions for turntable.fm](#install-plugdj-mentions-for-turntablefm)
- [**tt.fm boost mode**](#ttfm-boost-mode)
    - [install tt.fm boost mode](#install-ttfm-boost-mode)
- [**installing multiple modes**](#installing-multiple-modes)
    - [installing both work and dark mode](#installing-both-work-and-dark-mode)
- [**issues and contributing**](#issues-and-contributing)
- [**note**](#note)

## **dark mode**

enables a darkmode for turntable.fm

#### install dark mode

- copy the following line (without the bullet point) into your css changer of choice.
- [go here to install the bookmarklet to your bookmark bar](http://fluted.xyz/tttools/)

`@import url("https://raw.githack.com/fluteds/tttools/main/darkmode/darkmode.css");`

![Screenshot](https://user-images.githubusercontent.com/34608301/111393018-b6d8ea80-86af-11eb-87b3-b366abec39b2.png)
_preview of dark mode._

## **auto dark mode**

dark mode but it automatically changes based on if your os is set to dark or light mode.

#### install auto dark mode

- [go here to install the bookmarklet to your bookmark bar](http://fluted.xyz/tttools/)
- click the bookmark to start the script (resets on refresh) or copy the following code block into your css changer.

`@import url("https://raw.githack.com/fluteds/tttools/main/darkmode/importautodarkmode.css");`

- if you're a windows user, install [windows auto night mode.](https://github.com/Armin2208/Windows-Auto-Night-Mode/releases/tag/3.0) (note: windows currently doesn't support automatic light to dark) if your os supports automatic light to dark modes, ignore this.

## **work mode**

removes all distracting assets from turntable such as avatars, vote buttons, staging, join dj buttons and video so you can get back to work and stop worrying about pressing join or watching avatars dance. the work mode addition pairs well with autowoot/autobop.

#### install work mode

- [go here to install the bookmarklet to your bookmark bar](http://fluted.xyz/tttools/)
- click the bookmark to start the script (resets on refresh) or copy the following code block into your css changer.

`@import url("https://raw.githack.com/fluteds/tttools/main/workmode/workmode.css");`

![image](https://cdn.discordapp.com/attachments/821424398342553670/823305995009785946/unknown.png)
<br> _note that the background and look is subject to change as i work on this._

## **plug.dj mentions for turntable.fm**

a userscript that replaces turntable's mention sound with the mention sound from plug.dj incase you wanted that extra bit of nostalgia.

#### install plug.dj mentions for turntable.fm

- use [tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) and copy the [raw file contents](https://raw.githubusercontent.com/fluteds/tttools/main/mentions/plugmention.js) into a new script.
- or [go here to install the bookmarklet to your bookmark bar](http://fluted.xyz/tttools/) (for manual enabling.)
- click the bookmark to start the script (resets on refresh) or copy the following code block into your css changer.

`javascript:(function(){$.getScript('https://raw.githack.com/fluteds/tttools/main/mentions/plugmention.js');})();`

## **tt.fm boost mode**

a bookmarklet that improves the performance of tt.fm for slower browsers or those who like a cleaner approach to tt.

removes:

- video
- avatars
- extra animation

#### install tt.fm boost mode

- [go here to install the bookmarklet to your bookmark bar.](http://fluted.xyz/tttools/)
- click the bookmark to start the script (resets on refresh.)
- optional (for chrome users) install [h264ify](https://chrome.google.com/webstore/detail/h264ify/aleakchihdccplidncghkekgioiakgal) - boosts youtube's performance by a tonne.
- boost! 🚀

`javascript:(function(){$.getScript('https://raw.githack.com/fluteds/tttools/main/boost/boost.js\');})();`

## **installing multiple modes**

#### installing both work and dark mode

- copy and paste **both** of the following into a css changer.

`@import url("https://raw.githack.com/fluteds/tttools/main/darkmode/darkmode.css");`
<br>
`@import url("https://raw.githack.com/fluteds/tttools/main/workmode/workmode.css");`

## **issues and contributing**

if you have any problems, catch me on [**turntable.fm**](https://ttstats.pinnacleofdestruction.net/user/6048fa3647b5e3001a8f7869), [**open an issue**](https://github.com/fluteds/tttools/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) or [**pull request**](http://makeapullrequest.com) (if you're techy like that!)

## **note**

- all my todo's are mentioned within the files themselves rather than spam them all here.
- please keep in mind that most of these tools and additions are subject to change as i'm working on them.
- my javascript is completely scuffed.
- i work on this in my spare time.
