/**
 * JS-UI
 *
 * Moisés Alcocer, 2021
 * https://www.ironwoods.es / https://github.com/oricis/js-ui
 * MIT Licence
 */

'use strict';

// depends of "src/dom/nodes.js": @getNode / @getNodes

class ClassName // class
{
    add(nodeOrSelector, className) // void
    {
        const node = getNode(nodeOrSelector);
        if (node) {
            node.classList.add(className);
        }
    }
    addToGroup(nodesOrSelectors, className, position = -1) // void
    {
        const nodes = getNodes(nodesOrSelectors);
        for (let index = 0; index < nodes.length; index++) {
            const node = nodes[index];
            if (position >= 0 && position === index) {
                node.classList.add(className);
                return;
            }
            node.classList.add(className);
        }
    }

    remove(nodeOrSelector, className) // void
    {
        const node = getNode(nodeOrSelector);
        if (node) {
            node.classList.remove(className);
        }
    }
    removeFromGroup(nodesOrSelectors, className, position = -1) // void
    {
        const nodes = getNodes(nodesOrSelectors);
        for (let index = 0; index < nodes.length; index++) {
            const node = nodes[index];
            if (position >= 0 && position === index) {
                node.classList.remove(className);
                return;
            }
            node.classList.remove(className);
        }
    }

    toggle(nodeOrSelector, className) // void
    {
        const node = getNode(nodeOrSelector);
        if (node) {
            node.classList.toggle(className);
        }
    }
    toggleOnGroup(nodesOrSelectors, className, position = -1) // void
    {
        const nodes = getNodes(nodesOrSelectors);
        for (let index = 0; index < nodes.length; index++) {
            const node = nodes[index];
            if (position >= 0 && position === index) {
                node.classList.toggle(className);
                return;
            }
            node.classList.toggle(className);
        }
    }
}

const className = new ClassName();
