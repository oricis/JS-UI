/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es
 * MIT Licence
 */


const addTextById = (id, content) => {
    let actual_content = $(id).innerText;
    $('#' + id).innerText = actual_content + content;
}

const removeText = (selector, position) => {
    position = position ? position : 0;
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
