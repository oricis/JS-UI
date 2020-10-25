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

const removeAttrTo = (element, attrName) => {
    element.removeAttribute(attrName);
}

const getAttrValue = (selector, attr) => {
    return $(selector).attr;
}

const getDataValue = (selector, dataName) => {
    let target = $(selector);

    if (Array.isArray(target) && target) {
        target = target[0];
    }

    return target.dataset.dataName;
}


/**
 * Node content
 *
 */

const addTextById = (id, content) => {
    let actual_content = $(id).innerText;
    $('#' + id).innerText = actual_content + content;
}

const removeText = (selector, position = 0) => {
    let target = $(selector);

    if (target && target.length > 1) {
        if (position === 'all') {
            target.forEach(element => {
                element.innerText = '';
            });

        } else {
            target[position].innerText = '';
        }

        return;
    }

    target.innerText = '';
}

const removeTextById = (id) => {
    $('#' + id).innerText = '';
}

const setTextById = (id, content) => {
    $('#' + id).innerText = content;
}
