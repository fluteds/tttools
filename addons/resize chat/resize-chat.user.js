// ==UserScript==
// @name         Resize Chat (turntable.fm)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change the size of the chat font and window.
// @author       Fluted
// @downloadURL  https://raw.githack.com/fluteds/tttools/main/addons/resize chat/resize-chat.user.js
// @icon         https://s3.amazonaws.com/assets.turntable.fm/images/index/logo.png
// @match        https://turntable.fm/*
// @grant        none
// ==/UserScript==


(function () {
    const chatPanel = document.querySelector(`.chrome .right-panel`);
    const headerBar = document.querySelector(`.chrome .header-bar`);
    const roomViewPort = document.querySelector(`.room-viewport`);
    const drag = "insert-drag-handle";
    const buttonHeight = '35px';

    const cssStyle = `
    .${drag} {
      position: absolute;
      left: -5px;
      height: 100%;
      width: 5px;
      background-color: grey;
      cursor: col-resize;
      display: block;
    }
    .${drag}:hover {
      background-color: #F8F8FF;
    }
    .insert-is-grabbing .${drag} {
      background-color: indigo;
    }
  
    .insert-font-button-container {
      position: absolute;
      left: -100px;
      bottom: 0;
      height: ${buttonHeight};
      width: 100px;
      display: flex;
      gap: 10px;
    }
  
    .insert-font-button-container button {
      appearance: none;
      background: none;
      background-color: rgba(0,0,0,0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: white;
      border-radius: 50%;
      height: ${buttonHeight};
      width: ${buttonHeight};
      border: 1px solid rgba(255,255,255,0.5);
      line-height: 1px;
      font-weight: bold;
    }
    .insert-font-button-container button:hover {
      background-color: rgba(255,255,255,0.5);
      color: black;
    }
    .insert-font-button-container button:active {
      background-color: white;
      color: black;
    }
  
    .chat {
      font-size: 12px;
    }
  
    .chat .message {
      font-size: inherit;
      line-height: 1.5;
    }
  
    .chat-image-container .chat-image {
      width: auto;
    }
  `;
    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    const dragStylesID = "inserted-drag-styles";
    style.id = dragStylesID;
    document.getElementById(dragStylesID) ? .remove();
    head.appendChild(style);
    style.appendChild(document.createTextNode(cssStyle));

    /* Handle */
    const handle = document.createElement("li");
    handle.className = drag;
    document.querySelector(`.${drag}`) ? .remove();
    chatPanel.prepend(handle);

    /* Resize */
    let width = chatPanel.getBoundingClientRect().width;
    let m_pos = 0;

    function resizePanel(e) {
        e.preventDefault();
        const dx = m_pos - e.x;

        const newWidth = width + dx;
        chatPanel.style.width = newWidth + "px";

        headerBar.style.right = newWidth + "px";
        roomViewPort.style.right = newWidth + "px";
    }

    handle.addEventListener("mousedown", function (e) {
        e.preventDefault();
        width = chatPanel.getBoundingClientRect().width;
        m_pos = e.x;
        document.body.classList.add("insert-is-grabbing");
        document.addEventListener("mousemove", resizePanel, false);
    });

    document.addEventListener("mouseup", (e) => {
        window.dispatchEvent(new Event("resize"));
        document.body.classList.remove("insert-is-grabbing");
        document.removeEventListener("mousemove", resizePanel, false);
    });

    /* Font Size/Buttons */
    document.querySelector("insert-font-button-container") ? .remove();
    const container = document.createElement("li");
    container.className = "insert-font-button-container";

    const plusBtn = document.createElement("button");
    plusBtn.textContent = "+";
    const minusBtn = document.createElement("button");
    minusBtn.textContent = "-";
    container.appendChild(plusBtn);
    container.appendChild(minusBtn);
    chatPanel.prepend(container);

    const chat = document.querySelector('.chat');
    const input = document.querySelector('.message-input');

    function resizeFont(by) {
        const current = parseInt(chat.style.fontSize || getDefaultComputedStyle(chat).fontSize, 10);
        chat.style.fontSize = `${current + by}px`;
        input.style.fontSize = `${current + by}px`;
    }

    plusBtn.addEventListener("click", function (e) {
        e.preventDefault();
        resizeFont(1)
    }, false);

    minusBtn.addEventListener("click", function (e) {
        e.preventDefault();
        resizeFont(-1)
    }, false);
})();