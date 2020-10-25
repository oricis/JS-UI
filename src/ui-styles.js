/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es
 * MIT Licence
 */

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
