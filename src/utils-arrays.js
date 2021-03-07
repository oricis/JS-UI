/**
 * JS-UI
 *
 * Moisés Alcocer, 2021
 * https://www.ironwoods.es
 * MIT Licence
 */

function getPositionFromArray(arr, element) // int
{
    return arr.indexOf(element);
}

/**
 * Removes the first match from the array
 *
 */
function removeFromArray(arr, element) // array
{
    const position = getPositionFromArray(arr, element);
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
        return removeFromArray(arr, element);
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
