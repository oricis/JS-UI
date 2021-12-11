/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es / https://github.com/oricis/js-ui
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

const stop = (something = '') => {
    throw new Error(((something) ? '' + something : 'STOP SCRIPT'));
}
