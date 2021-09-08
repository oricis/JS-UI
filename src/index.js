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
    getIdFromSelector,
    getIdSelector,
    getTargetDomNode,
    isIdSelector,
    qi,
    qs,
    qsa
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
    disable,
    enable,
    getNode,
    getNodes,
    togglePairedDisplay,
} from './dom/nodes';

import {
    addClass,
    addClassTo,
    addClassToAll,
    addClassToNodes,
    getClass,
    getClassFrom,
    hasClass,
    removeClass,
    removeClassFrom,
    removeClassFromAll,
    removeClassFromNodes,
    toggleClassOf,
} from './dom/style-attributes.js';

import {
    addTextById,
    removeText,
    removeTextById,
    setTextById,
} from './dom/texts.js';
