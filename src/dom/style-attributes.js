/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es / https://github.com/oricis/js-ui
 * MIT Licence
 */

const addClass = (selector, className, position) => {
    position = position ? position : 0;
    let target = $(selector);

    if (target && target.length > 1) {
        if (position === 'all') {
            target.forEach(node => {
                addClassTo(node, className);
            });

        } else {
            addClassTo(target[position], className);
        }

        return;
    }

    // $('#foo')  returns a node
    // $('div p') returns a node collection
    if (target[position] != undefined)
        addClassTo(target[position], className);
    else
        addClassTo(target, className);
}

const addClassTo = (node, className) => {
    node.classList.add(className);
}

const addClassToAll = (nodes, className) => {
    addClassToNodes(className, nodes);
}
function addClassToNodes(className, arrNodesOrSelector) // void
{
    const nodes = getNodes(arrNodesOrSelector);
    nodes.forEach(node => // void
    {
        if (node) {
            node.classList.add(className);
        }
    });
}


const getClass = (selector, position) => {
    position = position ? position : 0;
    let target = $(selector);

    if (target && target.length > 1) {
        if (position === 'all') {
            const classNames = [];
            target.forEach(node => {
                classNames.push(node.className);
            });

            return classNames; // array
        }

        return getClassFrom(target[position]); // string
    }

    return getClassFrom(target[position]); // string
}

const getClassFrom = (node) => {
    return node.className; // string
}

const hasClass = (node, className) => {
    return node.classList.contains(className);
}

const removeClass = (selector, className, position) => {
    position = position ? position : 0;
    let target = $(selector);

    if (target && target.length > 1) {
        if (position === 'all') {
            target.forEach(node => {
                removeClassFrom(node, className);
            });

        } else {
            removeClassFrom(target[position], className);
        }

        return;
    }

    // $('#foo')  returns a node
    // $('div p') returns a node collection
    if (target[position] != undefined)
        removeClassFrom(target[position], className);
    else
        removeClassFrom(target, className);
}

const removeClassFrom = (node, className) => {
    node.classList.remove(className);
}

const removeClassFromAll = (nodes, className) => {
    removeClassFromNodes(className, nodes);
}
function removeClassFromNodes(className, arrNodesOrSelector) // void
{
    const nodes = getNodes(arrNodesOrSelector);
    nodes.forEach(node => // void
    {
        if (node) {
            node.classList.remove(className);
        }
    });
}

const toggleClassOf = (node, className) => {
    node.classList.toggle(className);
}
