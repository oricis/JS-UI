/**
 * UI consts
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

const addCssClass = (selector, className, position = 0) => {
    let target = $(selector);

    if (Array.isArray(target)) {
        if (position === 'all') {
            target.forEach(element => {
                element.classList.add(className);
            });

        } else {
            target[position].classList.add(className);
        }

        return;
    }

    target.classList.add(className);
}

const getCssClass = (selector, className, position = 0) => {
    let target = $(selector);

    if (Array.isArray(target)) {

        return target[position].className;
    }

    return target.className;
}

const removeCssClass = (selector, className, position = 0) => {
    let target = $(selector);

    if (Array.isArray(target)) {
        if (position === 'all') {
            target.forEach(element => {
                element.classList.remove(className);
            });

        } else {
            target[position].classList.remove(className);
        }

        return;
    }

    target.classList.remove(className);
}


/**
 * Node content
 *
 */

const addText = (id, content) => {
    let actual_content = $(id).innerText;
    $(id).innerText = actual_content + content;
}

const removeText = (id) => {
    $(id).innerText = '';
}

const setText = (id, content) => {
    $(id).innerText = content;
}
