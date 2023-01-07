// ==UserScript==
// @name         Custom Mentions (turntable.fm)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replace turntable.fm mentions with custom mention noises.
// @author       Fluted
// @downloadURL  https://raw.githack.com/fluteds/tttools/main/addons/custom mentions/custom-mention.user.js
// @icon         https://s3.amazonaws.com/assets.turntable.fm/images/index/logo.png
// @match        https://turntable.fm/*
// @grant        GM_registerMenuCommand
// ==/UserScript==

// UI Sounds
UI_SOUND_CHAT = localStorage.getItem("uiSoundChat") || UI_SOUND_URL + 'chat.mp3';
UI_SOUND_MENTION = localStorage.getItem("uiSoundMention") || 'https://www.dropbox.com/s/i9inn3j2p9hm8ns/badoop.mp3?dl=1';
UI_SOUND_PM = localStorage.getItem("uiSoundPM") || UI_SOUND_URL + 'pm.mp3';
UI_SOUND_ENDSONG = localStorage.getItem("uiSoundEndsong") || UI_SOUND_URL + 'endsong.mp3';

// TODO: make the menu prettier on one popup

GM_registerMenuCommand("Change UI Sounds", changeUISounds);

function changeUISounds() {
    alert("This userscript uses local storage to save inputted URLs from the menu. If no values are set it defaults back to the URLs in the userscript. The script will now cycle through all the options.")
    var chatSoundURL = prompt("Enter the URL of the new chat sound:");
    var mentionSoundURL = prompt("Enter the URL of the new mention sound:");
    var pmSoundURL = prompt("Enter the URL of the new PM sound:");
    var endsongSoundURL = prompt("Enter the URL of the new endsong sound:");
    localStorage.setItem("uiSoundChat", chatSoundURL);
    localStorage.setItem("uiSoundMention", mentionSoundURL);
    localStorage.setItem("uiSoundPM", pmSoundURL);
    localStorage.setItem("uiSoundEndsong", endsongSoundURL);
  }
  
GM_registerMenuCommand("View Saved URLs", viewSavedUrls);

  function viewSavedUrls() {
    alert(
    "Here are the following saved URLs:" + "\n" +
    "Chat sound URL: " + localStorage.getItem("uiSoundChat") + "\n" +
    "Mention sound URL: " + localStorage.getItem("uiSoundMention") + "\n" +
    "PM sound URL: " + localStorage.getItem("uiSoundPM") + "\n" +
    "Endsong sound URL: " + localStorage.getItem("uiSoundEndsong"));
  }

GM_registerMenuCommand("Clear Chat Sound URL", clearChatSoundUrl);
GM_registerMenuCommand("Clear Mention Sound URL", clearMentionSoundUrl);
GM_registerMenuCommand("Clear PM Sound URL", clearPmSoundUrl);
GM_registerMenuCommand("Clear Endsong Sound URL", clearEndsongSoundUrl);

  function clearChatSoundUrl() {
    localStorage.removeItem("uiSoundChat");
    alert("Chat sound URL has been cleared.");
  }
  
  function clearMentionSoundUrl() {
    localStorage.removeItem("uiSoundMention");
    alert("Mention sound URL has been cleared.");
  }
  
  function clearPmSoundUrl() {
    localStorage.removeItem("uiSoundPM");
    alert("PM sound URL has been cleared.");
  }
  
  function clearEndsongSoundUrl() {
    localStorage.removeItem("uiSoundEndsong");
    alert("Endsong sound URL has been cleared.");
  }