const replaceLastStrFragment = (route, newId, spearator = '/') => {
    const routeParts = route.split('/');
    routeParts[routeParts.length - 1] = newId;

    return routeParts.join('/');
}

const submitFormTo = (route, form) => {
    form.action = route;
    form.submit();
}

const strpos = (haystack, needle) => {
    return (haystack.indexOf(needle) >= 0);
}
