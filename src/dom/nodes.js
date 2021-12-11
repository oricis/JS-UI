/**
 * JS-UI
 *
 * Moisés Alcocer, 2020-21
 * https://www.ironwoods.es / https://github.com/oricis/js-ui
 * MIT Licence
 */

function addClasses(node, arrClassNames) // js node
{
    if (!node) {
        return;
    }
    arrClassNames.forEach(className => {
        node.classList.add(className);
    });

    return node;
}
function removeClasses(node, arrClassNames) // js node
{
    if (!node) {
        return;
    }
    arrClassNames.forEach(className => {
        node.classList.remove(className);
    });

    return node;
}

function disable(nodeOrSelector) // void
{
    const node = getNode(nodeOrSelector);
    if (node) {
        node.classList.add(Settings.DISABLE_CLASS_NAME);
    }
}
function enable(nodeOrSelector) // void
{
    const node = getNode(nodeOrSelector);
    if (node) {
        node.classList.remove(Settings.DISABLE_CLASS_NAME);
    }
}

function getNode(nodeOrSelector) // js node
{
    return (typeof nodeOrSelector === 'string')
        ? qs(nodeOrSelector)
        : nodeOrSelector;
}
function getNodes(nodesOrSelector) // js node
{
    return (typeof nodesOrSelector === 'string')
        ? qsa(nodesOrSelector)
        : nodesOrSelector;
}

function toggleClassNameOfPairedNodes(nodes, className) // void
{
    const nodeOne = nodes[0];
    const nodeTwo = nodes[1];

    if (hasClass(nodeOne, className)) {
        removeClassFrom(nodeOne, className);
        addClassTo(nodeTwo, className);
        return;
    }
    removeClassFrom(nodeTwo, className);
    addClassTo(nodeOne, className);
}

function togglePairedDisplay(nodeOrSelectorToShow, nodeOrSelectorToHide) // void
{
    const nodeToShow = getNode(nodeOrSelectorToShow);
    const nodeToHide = getNode(nodeOrSelectorToHide);

    if (nodeToShow) {
        nodeToShow.classList.remove(Settings.HIDE_CLASS_NAME);
        nodeToShow.hidden = false;
    }
    if (nodeToHide) {
        nodeToHide.classList.add(Settings.HIDE_CLASS_NAME);
        nodeToShow.hidden = true;
    }
}
