/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es
 * MIT Licence
 */

 const getLastSlice = (str, separator) => {
    separator = separator ? separator : '/';
    const strSlices = str.split(separator);

    return strSlices[strSlices.length - 1];
}

const getSlice = (str, position, separator) => {
    separator = separator ? separator : '/';

    const strSlices = str.split(separator);
    if (position < 0) {
        position = strSlices.length + position;
    }

    return (position < strSlices.length)
        ? strSlices[position]
        : '';
}

const getSlicesLength = (str, separator) => {
    separator = separator ? separator : '/';

    return str.split(separator).length;
}

const replaceLastSlice = (str, newSlice, separator) => {
    separator = separator ? separator : '/';
    const strSlices = str.split(separator);
    strSlices[strSlices.length - 1] = newSlice;

    return strSlices.join(separator);
}

const replaceSlice = (str, newSlice, position, separator) => {
    if (!str || !newSlice || position === undefined) {
        console.error('ERR - Something is wrong with the params!');
        return '';
    }

    separator = separator ? separator : '/';

    const strSlices = str.split(separator);
    if (position < 0) {
        position = strSlices.length + position;
    }

    if (position >= strSlices.length) {
        console.error('ERR - Too few parts for position: ' + position);
        return '';
    }
    strSlices[position] = newSlice;

    return strSlices.join(separator);
}

const strhas = (haystack, needle) => {
    return (haystack.indexOf(needle) >= 0);
}

const strpos = (haystack, needle) => {
    return haystack.indexOf(needle);
}
