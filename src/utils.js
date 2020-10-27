/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es
 * MIT Licence
 */

const existObjectKey = (obj, key) => {
    return (obj[key] !== undefined);
}

const submitFormTo = (route, form) => {
    form.action = route;
    form.submit();
}


export default {
    existObjectKey,
    submitFormTo,
};
