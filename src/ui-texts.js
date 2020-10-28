/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es
 * MIT Licence
 */

const addTextById = (id, content) => {
    id = getId(id);

    let textContent = $(id).innerText;
    $(id).innerText = textContent + content;
}

function getId(id)
{
    return (id.indexOf('#') === 0) ? id : '#' + id;
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
    id = getId(id);

    $(id).innerText = '';
}

const setTextById = (id, content) => {
    id = getId(id);

    $(id).innerText = content;
}
