/**
 * JS-UI
 *
 * Moisés Alcocer, 2021
 * https://www.ironwoods.es
 * MIT Licence
 */

function getArrayPosition(arr, element) // int
{
    return arr.indexOf(element);
}

/**
 * Removes the first match from the array
 *
 */
function removeArrayMatch(arr, element) // array
{
    const position = getArrayPosition(arr, element);
    if (position >= 0) {
        arr.splice(position, 1);
    }

    return arr;
}

/**
 * Removes the first | all the matches from the array
 *
 */
function removeArrayMatches(arr, element, onlyFirst) // array
{
    if (onlyFirst !== undefined && onlyFirst) {
        return removeArrayMatch(arr, element);
    }

    let position = 0;
    while (position < arr.length) {
        if (arr[position] === element) {
            arr.splice(position, 1);

        } else {
            position++;
        }
    }

    return arr;
}
