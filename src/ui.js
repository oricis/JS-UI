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

const getAttrValue = (selector, attr) => {
    return $(selector).attr;
}

const getDataValue = (selector, dataName) => {
    return $(selector).dataset.dataName;
}

const addCssClass = (element_id, class_name) => {
    $(element_id).classList.add(class_name);
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
