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

const removeAttr = (selector, attrName) => {
    let target = getTargetDomNode(selector);

    target.removeAttribute(attrName);
}

const removeAttrFrom = (element, attrName) => {
    element.removeAttribute(attrName);
}

const getAttrValue = (selector, attrName) => {
    let target = getTargetDomNode(selector);

    return target.getAttribute(attrName);
}

const getAttrValueFrom = (element, attrName) => {
    return element.getAttribute(attrName);
}

const getDataValue = (selector, dataName) => {
    let target = getTargetDomNode(selector);

    return target.dataset[dataName];
}

const getDataValueFrom = (element, dataName) => {
    return element.dataset[dataName];
}

function getTargetDomNode(selector)
{
    let target = $(selector);

    if (Array.isArray(target) && target) {
        target = target[0];
    }

    return target;
}
