/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es
 * MIT Licence
 */

const addTextById = (id, content) => {
    id = getId(id);

    let textContent = getText($(id));
    setText($(id), textContent + content)
}

function getId(id)
{
    return (id.indexOf('#') === 0) ? id : '#' + id;
}

function getText(element) {
    return element.innerText;
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

    setText(target, '')
}

const removeTextById = (id) => {
    id = getId(id);

    setText($(id), '')
}

function setText(element, content) {
    element.innerText = content;
}

const setTextById = (id, content) => {
    id = getId(id);

    setText($(id), content)
}
