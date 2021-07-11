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

function getId(id) // string
{
    return (id.indexOf('#') === 0) ? id : '#' + id;
}

function getTargetDomNode(selector) // js node
{
    let target = $(selector);
    if (Array.isArray(target) || target) {
        target = target[0];
    }

    return target;
}
