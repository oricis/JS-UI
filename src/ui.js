/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es
 * MIT Licence
 */

const $ = (selector) => {

    if (selector.indexOf("#") >= 0)
        return document.querySelector(selector);

    return document.querySelectorAll(selector);
}


/**
 * Node attributes
 *
 */

const removeAttrFrom = (element, attrName) => {
    element.removeAttribute(attrName);
}

const getAttrValue = (selector, attrName) => {
    return $(selector).getAttribute(attrName);
}

const getDataValue = (selector, dataName) => {
    let target = $(selector);

    if (Array.isArray(target) && target) {
        target = target[0];
    }

    return target.dataset.dataName;
}
