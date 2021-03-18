function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

addStyleString('#room-view { display: none !important }');
addStyleString('screen-content { display: none !important }');

setTimeout(function () {
    $('#video-only-dj').click(function () {
    });
}, 2000);