// ==UserScript==
// @name         Custom Mentions (turntable.fm)
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Replace turntable.fm mentions with custom mention noises.
// @author       Fluted
// @downloadURL  https://raw.githack.com/fluteds/tttools/main/addons/custom mentions/custom-mention.user.js
// @icon         https://s3.amazonaws.com/assets.turntable.fm/images/index/logo.png
// @match        https://turntable.fm/*
// @grant        none
// ==/UserScript==

// UI Sounds
UI_SOUND_URL = 'https://s3.amazonaws.com/assets.turntable.fm/web/sounds/'; // Original sound assets for turntable.fm
UI_SOUND_CHAT = UI_SOUND_URL + 'chat.mp3'; // New chat message
UI_SOUND_MENTION = 'https://www.dropbox.com/s/i9inn3j2p9hm8ns/badoop.mp3?dl=1';
UI_SOUND_PM = UI_SOUND_URL + 'pm.mp3'; // New PM
UI_SOUND_ENDSONG = UI_SOUND_URL + 'endsong.mp3'; // Shuffling DJ