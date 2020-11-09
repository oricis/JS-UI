/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es
 * MIT Licence
 */

const addClass = (selector, className, position) => {
    position = position ? position : 0;
    let target = $(selector);

    if (target && target.length > 1) {
        if (position === 'all') {
            target.forEach(element => {
                addClassTo(element, className);
            });

        } else {
            addClassTo(target[position], className);
        }

        return;
    }

    // $('#foo')  returns an element
    // $('div p') returns an node collection
    if (target[position] != undefined)
        addClassTo(target[position], className);
    else
        addClassTo(target, className);
}

const addClassTo = (element, className) => {
    element.classList.add(className);
}

const addClassToAll = (elements, className) => {
    if (!elements || typeof (elements) !== 'object') {
        console.error('addClassToAll() - Err args');
        return;
    }

    elements.forEach(element => {
        addClassTo(element, className);
    })
}

const getClass = (selector, position) => {
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

        return getClassFrom(target[position]); // string
    }

    return getClassFrom(target[position]); // string
}

const getClassFrom = (element) => {
    return element.className; // string
}

const hasClass = (element, className) => {
    return element.classList.contains(className);
}

const removeClass = (selector, className, position) => {
    position = position ? position : 0;
    let target = $(selector);

    if (target && target.length > 1) {
        if (position === 'all') {
            target.forEach(element => {
                removeClassFrom(element, className);
            });

        } else {
            removeClassFrom(target[position], className);
        }

        return;
    }

    // $('#foo')  returns an element
    // $('div p') returns an node collection
    if (target[position] != undefined)
        removeClassFrom(target[position], className);
    else
        removeClassFrom(target, className);
}

const removeClassFrom = (element, className) => {
    element.classList.remove(className);
}

const removeClassFromAll = (elements, className) => {
    if (!elements || typeof (elements) !== 'object') {
        console.error('removeClassFromAll() - Err args');
        return;
    }

    elements.forEach(element => {
        removeClassFrom(element, className);
    })
}

const toggleClassOf = (node, className) => {
    node.classList.toggle(className);
}
