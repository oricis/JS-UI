/**
 * JS-UI
 *
 * Moisés Alcocer, 2021
 * https://www.ironwoods.es / https://github.com/oricis/js-ui
 * MIT Licence
 */

function checkAll(nodes) // void
{
    for (let index = 0; index < nodes.length; index++) {
        nodes[index].checked = true;
    }
}
function uncheckAll(nodes) // void
{
    for (let index = 0; index < nodes.length; index++) {
        nodes[index].checked = false;
    }
}
