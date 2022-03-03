(function () {
  const rightPanelUL = document.querySelector(`.chrome .right-panel`);
  const headerBar = document.querySelector(`.chrome .header-bar`);
  const roomViewPort = document.querySelector(`.room-viewport`);
  const dragHandle = "insert-drag-handle";  
  const buttonHeight = '20px';

  const css = `
  .${dragHandle} {
    position: absolute;
    left: -5px;
    height: 100%;
    width: 5px;
    background-color: rgb(25, 25, 25);
    cursor: col-resize;
    display: block;
  }
  .${dragHandle}:hover {
    background-color: rgb(222, 180, 31);
  }
  .insert-is-grabbing .${dragHandle} {
    background-color: grey;
  }

  .insert-font-button-container {
    position: absolute;
    left: -100px;
    bottom: 10px;
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
    border: 2px solid rgba(255,255,255,0.5);
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
    font-size: 13.5px;
  }

  .chat .message {
    font-size: inherit;
    line-height: 1.5;
  }

  .chat-image-container .chat-image {
    width: auto;
  }
`;

  /* Insert CSS into <head> tag */
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  const dragStylesID = "inserted-drag-styles";
  style.id = dragStylesID;
  document.getElementById(dragStylesID)?.remove();
  head.appendChild(style);
  style.appendChild(document.createTextNode(css));

  /* Insert drag */
  const handle = document.createElement("li");
  handle.className = dragHandle;
  document.querySelector(`.${dragHandle}`)?.remove();
  rightPanelUL.prepend(handle);

  /* Resize */
  let width = rightPanelUL.getBoundingClientRect().width;
  let m_pos = 0;

  function resizePanel(e) {
    e.preventDefault();
    const dx = m_pos - e.x;

    const newWidth = width + dx;
    rightPanelUL.style.width = newWidth + "px";

    headerBar.style.right = newWidth + "px";
    roomViewPort.style.right = newWidth + "px";
  }

  handle.addEventListener("mousedown", function (e) {
    e.preventDefault();
    width = rightPanelUL.getBoundingClientRect().width;
    m_pos = e.x;
    document.body.classList.add("insert-is-grabbing");
    document.addEventListener("mousemove", resizePanel, false);
  });

  document.addEventListener("mouseup", (e) => {
    window.dispatchEvent(new Event("resize"));
    document.body.classList.remove("insert-is-grabbing");
    document.removeEventListener("mousemove", resizePanel, false);
  });

  /* Font size */
  document.querySelector("insert-font-button-container")?.remove();
  const container = document.createElement("li");
  container.className = "insert-font-button-container";

  const plusBtn = document.createElement("button");
  plusBtn.textContent = "+";
  const minusBtn = document.createElement("button");
  minusBtn.textContent = "−";
  container.appendChild(plusBtn);
  container.appendChild(minusBtn);
  rightPanelUL.prepend(container);

  const chat = document.querySelector('.chat');
  const input = document.querySelector('.message-input');
  function resizeFont(by) {
    const current = parseInt(chat.style.fontSize || window.getDefaultComputedStyle(chat).fontSize, 10);
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