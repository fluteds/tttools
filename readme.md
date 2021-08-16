<p align="center">
    <img src="https://s3.amazonaws.com/assets.turntable.fm/images/index/logo.png" />
    <br>
    <br><b>t</b>urn<b>t</b>able <b>tools</b>
    <br>a collection of tools
    <br> and enhancements for tt.fm</br>
</p>

<p align="center">
    <a alt="Commit activity for ttTools" href="https://GitHub.com/fluteds/tttools/graphs/commit-activity">
        <img src="https://img.shields.io/badge/Maintained%3F-yes-gold.svg?style=flat-square" />
    </a>
    <a alt="How to make a pull request" href="http://makeapullrequest.com">
        <img src="https://img.shields.io/badge/PRs-welcome-gold.svg?style=flat-square" />
    </a>
    <a alt="MIT License" href="https://lbesson.mit-license.org/">
        <img src="https://img.shields.io/badge/License-MIT-gold.svg?style=flat-square" />
    </a>
    <img alt="Stars" src="https://img.shields.io/github/stars/fluteds?color=gold&style=flat-square">
    </a>
</p>

## **contents**

- [**themes**](#themes)
  - [dark mode](#dark-mode)
  - [auto dark mode](#auto-dark-mode)
  - [work mode](#work-mode)
- [**addons**](#addons)
  - [custom mentions](#custom-mentions)
  - [boost mode](#boost-mode)
  - [hide ttstats](#hide-ttstats)
- [**issues and contributing**](#issues-and-contributing)
- [**ttscripts**](#ttscripts)

# **themes**

show off your flair with these themes

## dark mode

enables a darkmode for turntable.fm

**installing**

- install [stylus for firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), [chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne), [opera](https://addons.opera.com/en-gb/extensions/details/stylus/) or [cascadea for safari](https://cascadea.app/)
- open the raw file
- you can also manually enable with a [bookmarklet](https://fluteds.github.io/tttools/)

![Screenshot](https://user-images.githubusercontent.com/34608301/111393018-b6d8ea80-86af-11eb-87b3-b366abec39b2.png)

## auto dark mode

dark mode but it automatically changes based on if your os is set to dark or light mode.

**installing**

- if you're a windows user, install [windows auto night mode.](https://github.com/Armin2208/Windows-Auto-Night-Mode/releases/tag/3.0) (note: windows currently doesn't support automatic light to dark) if your os supports automatic light to dark modes, ignore this.
- install [stylus for firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), [chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne), [opera](https://addons.opera.com/en-gb/extensions/details/stylus/) or [cascadea for safari](https://cascadea.app/)
- open the raw file
- you can also manually enable with a [bookmarklet](https://fluteds.github.io/tttools/)

## work mode

removes all distracting assets from turntable such as avatars, vote buttons, staging, join dj buttons and video so you can get back to work and stop worrying about pressing join or watching avatars dance. the work mode addition pairs well with autowoot/autobop.

**installing**

- install [stylus for firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), [chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne), [opera](https://addons.opera.com/en-gb/extensions/details/stylus/) or [cascadea for safari](https://cascadea.app/)
- open the raw file
- you can also manually enable with a [bookmarklet](https://fluteds.github.io/tttools/)

![image](https://cdn.discordapp.com/attachments/821424398342553670/823305995009785946/unknown.png)

# **addons**

addons for turntable, includes things such as custom mentions and individual additions that doesn't completely change the appearance

## custom mentions

a userscript that replaces turntable's mention sound with the mention sound from plug.dj incase you wanted that extra bit of nostalgia.

**installing**

- for automatic enabling use [tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) and open the raw file to install
- you can also manually enable with a [bookmarklet](https://fluteds.github.io/tttools/)

to use your own mention sounds, you must have a direct link to your mp3 file. paste the link next inbetween the `<''>` in `UI_SOUND_MENTION = ''`

## boost mode

a tampermonkey script & bookmarklet that improves the performance of turntable for slower browsers or those who like a cleaner approach to tt.

**removes:**

- video
- avatars
- extra animation

**installing**

- for automatic enabling use [tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) and open the raw file to install
- you can also manually enable with a [bookmarklet](https://fluteds.github.io/tttools/)
- optional (for chrome users) install [h264ify](https://chrome.google.com/webstore/detail/h264ify/aleakchihdccplidncghkekgioiakgal) - boosts youtube's performance

## hide ttstats

an addon that hides the ttStats header and search feature, useful if you don't want to look at leaderboards and other users

**removes**

- ttstats header
- search bar
- hides features like points, woot, grab and meh

# **issues and contributing**

if you have any problems or want to suggest something:

- [open an issue](https://github.com/fluteds/tttools/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)
- [fork and open a pull request](http://makeapullrequest.com)
- [turntable.fm profile](https://ttstats.pinnacleofdestruction.net/user/6048fa3647b5e3001a8f7869) - ping me! see if i'm online

**pull requests**
<br>create a `patch` branch to commit against as `dev` is no longer kept up to date. i merge my changes against main using a `feature\patch` branch so separate things can be kept isolated.

# **ttscripts**

[check out ttScripts as well](https://fluted.xyz/ttscripts) for more community contributed themes and addons
