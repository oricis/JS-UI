/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es / https://github.com/oricis/js-ui
 * MIT Licence
 */

const getAttrValue = (selector, attrName) => {
    return getAttrValueFrom(getTargetDomNode(selector), attrName);
}

const getAttrValueFrom = (element, attrName) => {
    const node = getNode(element);

    return (node.hasAttribute(attrName))
        ? node.getAttribute(attrName)
        : '';
}

const getDataValue = (selector, dataName) => {
    return getDataValueFrom(selector, dataName);
}

const getDataValueFrom = (element, dataName) => {
    const node = getNode(element);
    const result = node.dataset[dataName];

    return (result) ? result : '';
}

const removeAttr = (selector, attrName) => {
    let target = getTargetDomNode(selector);

    target.removeAttribute(attrName);
}

const removeAttrFrom = (element, attrName) => {
    element.removeAttribute(attrName);
}
