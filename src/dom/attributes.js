/**
 * JS-UI
 *
 * Moisés Alcocer, 2020-21
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

const getDataValue = (nodeOrSelector, dataName) => {
    dataName = (dataName.includes('data-'))
        ? dataName
        : 'data-' + dataName;

    const target = getNode(nodeOrSelector);

    return (target.hasAttribute(dataName))
        ? target.getAttribute(dataName)
        : '';
}

const getDataValueFrom = (element, dataName) => {
    return getDataValue(element, dataName);
}

const removeAttr = (selector, attrName) => {
    let target = getTargetDomNode(selector);

    target.removeAttribute(attrName);
}

const removeAttrFrom = (element, attrName) => {
    element.removeAttribute(attrName);
}
