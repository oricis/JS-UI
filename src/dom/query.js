/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es / https://github.com/oricis/js-ui
 * MIT Licence
 */

function $(selector) // js node/s
{
    if (selector.indexOf("#") === 0 && selector.indexOf(' ') < 0) {
        return document.querySelector(selector);
    }

    return document.querySelectorAll(selector);
}

function getIdFromSelector(selector) // string
{
    let cutPosition = selector.indexOf('#');
    let temp = selector.substr(cutPosition + 1);

    if (temp.includes('.')) {
        cutPosition = temp.indexOf('.');
        temp = temp.substr(0, cutPosition);
    }
    if (temp.includes('[')) {
        cutPosition = temp.indexOf('[');
        temp = temp.substr(0, cutPosition);
    }

    return temp.trim();
}
function getIdSelector(idOrSelector) // string
{
    const temp = getIdFromSelector(idOrSelector);

    return (temp) ? '#' + temp : '';
}

function getTargetDomNode(selector) // js node
{
    let target = $(selector);
    if (Array.isArray(target) || target) {
        target = target[0];
    }

    return target;
}

function isIdSelector(selector) // bool
{
    let response = true;
    if (selector.includes('.') || selector.includes('[')) {
        response = false;
    }

    return response;
}

function qi(selector) // js node
{
    return document.getElementById(selector);
}

function qs(selector) // js node
{
    return document.querySelector(selector);
}

function qsa(selector) // js node/s
{
    return document.querySelectorAll(selector);
}
