/**
 * JS-UI
 *
 * Moisés Alcocer, 2021
 * https://www.ironwoods.es / https://github.com/oricis/js-ui
 * MIT Licence
 */

function getValuesFromNodes(nodes) // array (strings)
{
    if (!nodes) {
        return [];
    }

    const result = [];
    for (let index = 0; index < nodes.length; index++) {
        result.push(nodes[index].value);
    }

    return result;
}

function getTextContentsFromNodes(nodes) // array (strings)
{
    if (!nodes) {
        return [];
    }

    const result = [];
    for (let index = 0; index < nodes.length; index++) {
        result.push(nodes[index].textContent);
    }

    return result;
}
