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
