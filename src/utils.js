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

const getLastSlice = (str, separator = '/') => {
    const strSlices = str.split(separator);

    return strSlices[strSlices.length - 1];
}

const replaceLastSlice = (str, newSlice, separator = '/') => {
    const strSlices = str.split(separator);
    strSlices[strSlices.length - 1] = newSlice;

    return strSlices.join(separator);
}

const submitFormTo = (route, form) => {
    form.action = route;
    form.submit();
}

const strpos = (haystack, needle) => {
    return (haystack.indexOf(needle) >= 0);
}


export default {
    existObjectKey,
    getLastSlice,
    replaceLastSlice,
    submitFormTo,
    strpos,
};
