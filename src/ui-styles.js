/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es
 * MIT Licence
 */

const addCssClass = (selector, className, position) => {
    position = position ? position : 0;
    let target = $(selector);

    if (target && target.length > 1) {
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

const getCssClass = (selector, position) => {
    position = position ? position : 0;
    let target = $(selector);

    if (target && target.length > 1) {
        if (position === 'all') {
            const classNames = [];
            target.forEach(element => {
                classNames.push(element.className);
            });

            return classNames; // array
        }

        return target[position].className; // string
    }

    return target[position].className; // string
}

const removeCssClass = (selector, className, position) => {
    position = position ? position : 0;
    let target = $(selector);

    if (target && target.length > 1) {
        if (position === 'all') {
            target.forEach(element => {
                removeCssClassFrom(element, className);
            });

        } else {
            removeCssClassFrom(target[position], className);
        }

        return;
    }

    removeCssClassFrom(target, className);
}
const removeCssClassFrom = (element, className) => {
    element.classList.remove(className);
}
