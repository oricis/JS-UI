/**
 * JS-UI
 *
 * Moisés Alcocer, 2020-21
 * https://www.ironwoods.es / https://github.com/oricis/js-ui
 * MIT Licence
 */

// check if the key exist in object / array
const existObjectKey = (obj, key) => {
    return (obj[key] !== undefined);
}

const stop = (something = '') => {
    throw new Error(((something) ? '' + something : 'STOP SCRIPT'));
}

const submitFormTo = (route, form) => {
    form.action = route;
    form.submit();
}
