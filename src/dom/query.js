/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es
 * MIT Licence
 */

function $(selector) // js node/s
{
    if (selector.indexOf("#") === 0 && selector.indexOf(' ') < 0) {
        return document.querySelector(selector);
    }

    return document.querySelectorAll(selector);
}

function getIdSelector(id) // string
{
    return (id[0] === '#') ? id : '#' + id;
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
