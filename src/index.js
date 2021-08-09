import {
    existObjectKey,
    submitFormTo,
} from './utils/var.js';

import {
    getArrayPosition,
    removeArrayMatch,
    removeArrayMatches,
} from './utils/arrays.js';

import {
    getLastSlice,
    replaceLastSlice,
    strpos,
} from './utils/strings.js';

import {
    $,
    getIdSelector,
    getTargetDomNode
} from './dom/query';

import {
    getAttrValue,
    getAttrValueFrom,
    getDataValue,
    getDataValueFrom,
    removeAttr,
    removeAttrFrom
} from './dom/attributes';

import {
    addCssClass,
    addCssClassTo,
    getCssClass,
    getCssClassFrom,
    hasCssClass,
    removeCssClass,
    removeCssClassFrom,
} from './dom/style-attributes.js';

import {
    addTextById,
    removeText,
    removeTextById,
    setTextById,
} from './dom/texts.js';
