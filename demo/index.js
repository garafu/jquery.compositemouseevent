var targetElement, resultElement;

var MOUSE_EVENT = {
    LEFT: 1,
    CENTER: 2,
    RIGHT: 3
};

var target_onclick = function (event) {
    var text = '';
    text += (new Date()).toLocaleString();
    text += ' : ';
    switch (event.which) {
        case MOUSE_EVENT.LEFT:
            text += '[left click]';
            break;
        case MOUSE_EVENT.CENTER:
            text += '[center click]';
            break;
        case MOUSE_EVENT.RIGHT:
            text += '[right click]';
            break;
    }
    text += '\r';
    resultElement.insertBefore(document.createTextNode(text), resultElement.firstChild);
};

var target_ondblclick = function (event) {
    var text = '';
    text += (new Date()).toLocaleString();
    text += ' : ';
    switch (event.which) {
        case MOUSE_EVENT.LEFT:
            text += '[left dblclick]';
            break;
        case MOUSE_EVENT.CENTER:
            text += '[center dblclick]';
            break;
        case MOUSE_EVENT.RIGHT:
            text += '[right dblclick]';
            break;
    }
    text += '\r';
    resultElement.insertBefore(document.createTextNode(text), resultElement.firstChild);
};

var window_onload = function (event) {
    targetElement = window.document.getElementById('target');
    resultElement = window.document.getElementById('result');
    
    $(targetElement).on('contextmenu', function () {
        return false;
    }).on('mousedown', function () {
        return false;
    });
    
    $(targetElement).mouse(function (event) {
        target_onclick(event);
    }, function (event) {
        target_ondblclick(event);
    });
    
    $('#clearButton').on('click', function (event) {
        resultElement.innerHTML = '';
    });
};

$(window).ready(function (event) {
    window_onload(event);
});
