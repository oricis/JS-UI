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
                addCssClassTo(element, className);
            });

        } else {
            addCssClassTo(target[position], className);
        }

        return;
    }

    // $('#foo')  returns an element
    // $('div p') returns an node collection
    if (target[position] != undefined)
        addCssClassTo(target[position], className);
    else
        addCssClassTo(target, className);
}

const addCssClassTo = (element, className) => {
    element.classList.add(className);
}

const addCssClassToAll = (elements, className) => {
    {
        if (!elements || typeof (elements) !== 'object') {
            console.error('addCssClassToAll() - Err args');
            return;
        }
        elements.forEach(element => {
            addCssClassTo(element, className);
        })
    }
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

        return getCssClassFrom(target[position]); // string
    }

    return getCssClassFrom(target[position]); // string
}

const getCssClassFrom = (element) => {
    return element.className; // string
}

const hasCssClass = (element, className) => {
    return element.classList.contains(className);
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

    // $('#foo')  returns an element
    // $('div p') returns an node collection
    if (target[position] != undefined)
        removeCssClassFrom(target[position], className);
    else
        removeCssClassFrom(target, className);
}

const removeCssClassFrom = (element, className) => {
    element.classList.remove(className);
}

const removeCssClassFromAll = (arrElements, className) => {
    arrElements.forEach(element => {
        removeCssClassFrom(element, className);
    })
}
