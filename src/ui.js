/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es
 * MIT Licence
 */

const $ = (selector) => {

    if (selector.indexOf("#") === 0 && selector.indexOf(' ') < 0) {
        return document.querySelector(selector);
    }


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
    const target = getTargetDomNode(selector);
    const result = target.getAttribute(attrName);

    return result ? result : '';
}

const getAttrValueFrom = (element, attrName) => {
    const result = element.getAttribute(attrName);

    return result ? result : '';
}

const getDataValue = (selector, dataName) => {
    const target = getTargetDomNode(selector);
    const result = target.dataset[dataName];

    return result ? result : '';
}

const getDataValueFrom = (element, dataName) => {
    const result = element.dataset[dataName];

    return result ? result : '';
}

function getTargetDomNode(selector)
{
    let target = $(selector);

    if (Array.isArray(target) && target) {
        target = target[0];
    }

    return target;
}
