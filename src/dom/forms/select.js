/**
 * JS-UI
 *
 * Moisés Alcocer, 2021
 * https://www.ironwoods.es / https://github.com/oricis/js-ui
 * MIT Licence
 */

function getOptions(selectNode, onlySelected = false) // array
{
    if (selectNode && selectNode.options) {
        const options = (onlySelected)
            ? getSelectedOptions(selectNode)
            : selectNode.options

        return options;
    }

    return [];
}

function getOptionsContents(selectOrOptionNodes) // array
{
    if (!selectOrOptionNodes) {
        return [];
    }

    const options = (selectOrOptionNodes.nodeType == 1)
        ? selectOrOptionNodes.options
        : selectOrOptionNodes;

    return getTextContentsFromNodes(options);
}

function getOptionsValues(selectOrOptionNodes) // array
{
    if (!selectOrOptionNodes) {
        return [];
    }

    return (selectOrOptionNodes.nodeType == 1)
        ? getValuesFromNodes(selectOrOptionNodes.options)
        : getValuesFromNodes(selectOrOptionNodes);
}

function getSelectedOptions(selectNode) // array (js nodes)
{
    const results = [];
    if (selectNode && selectNode.options) {
        const totalOptions = selectNode.options.length;
        for (let index = 0; index < totalOptions; index++) {
            const option = selectNode.options[index];
            if (option.selected) {
                results.push(option);
            }
        }
    }

    return results;
}
