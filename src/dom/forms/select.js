/**
 * JS-UI
 *
 * Moisés Alcocer, 2021
 * https://www.ironwoods.es / https://github.com/oricis/js-ui
 * MIT Licence
 */

function addOptions(selectNode, arrOptions) // void
{
    selectNode.append(...arrOptions);
}
function getOptions(selectNode, onlySelected = false) // array
{
    if (selectNode && selectNode.options) {
        const options = (onlySelected)
            ? getSelectedOptions(selectNode)
            : selectNode.options

        return Array.from(options);
    }

    return [];
}
function replaceOptions(selectNode, arrOptions) // void
{
    selectNode.innerHTML = null;
    addOptions(selectNode, arrOptions);
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

function selectOptionByPosition(selectNode, position = 0) // void
{
    const optionNodes = selectNode.options;
    for (let index = 0; index < optionNodes.length; index++) {
        optionNodes[index].selected = false;
        if (index === position) {
            optionNodes[index].selected = true;
            break;
        }
    }
}
function selectOptionByValue(selectNode, value) // void
{
    const optionNodes = selectNode.options;
    for (let index = 0; index < optionNodes.length; index++) {
        optionNodes[index].selected = false;
        if (optionNodes[index].value == value) {
            optionNodes[index].selected = true;
            break;
        }
    }
}

function sortOptions(optionNodes, arrSortedValues) // array
{
    const result = [];
    arrSortedValues.forEach(value => {
        optionNodes.forEach(option => {
            log(option.value + '==' + value);
            if (option.value == value) {
                result.push(option);
            }
        });
    });

    return result;
}
