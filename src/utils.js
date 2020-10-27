/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es
 * MIT Licence
 */

// check if the key exist in object / array
const existObjectKey = (obj, key) => {
    return (obj[key] !== undefined);
}

const submitFormTo = (route, form) => {
    form.action = route;
    form.submit();
}
