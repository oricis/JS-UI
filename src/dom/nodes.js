/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es / https://github.com/oricis/js-ui
 * MIT Licence
 */

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
