function addStyleString(str) {
    var node = document.createElement('style');
    node.textContent = str;
    document.body.appendChild(node);
}

// addStyleString('#room-view { display: none !important }');
addStyleString('.screen-content, .speech-bubble, #room-view>canvas:nth-child(4) { display: none !important }');

setTimeout(function () {
    $('#video-only-dj').click(function () {
    });
}, 2000);
