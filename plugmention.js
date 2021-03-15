// ==UserScript==
// @name         plug.dj mentions for tt.fm
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Replace tt.fm mentions with plug.dj mentions.
// @author       Fluted / fluteds
// @icon         https://s3.amazonaws.com/assets.turntable.fm/images/index/logo.png
// @match        https://turntable.fm/*
// @grant        none
// ==/UserScript==

// UI Sounds
UI_SOUND_URL = 'https://s3.amazonaws.com/assets.turntable.fm/web/sounds/';
UI_SOUND_CHAT = UI_SOUND_URL + 'chat.mp3';
UI_SOUND_MENTION = 'https://www.dropbox.com/s/i9inn3j2p9hm8ns/badoop.mp3?dl=1';
UI_SOUND_PM = UI_SOUND_URL + 'pm.mp3';
UI_SOUND_ENDSONG = UI_SOUND_URL + 'endsong.mp3';
