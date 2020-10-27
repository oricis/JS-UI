/**
 * JS-UI
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es
 * MIT Licence
 */
// check if the key exist in object / array
var existObjectKey = function existObjectKey(obj, key) {
  return obj[key] !== undefined;
};

var submitFormTo = function submitFormTo(route, form) {
  form.action = route;
  form.submit();
};

var getLastSlice = function getLastSlice(str, separator) {
  separator = separator ? separator : '/';
  var strSlices = str.split(separator);
  return strSlices[strSlices.length - 1];
};

var getSlice = function getSlice(str, position, separator) {
  separator = separator ? separator : '/';
  var strSlices = str.split(separator);
  return position < strSlices.length ? strSlices[position] : '';
};

var replaceLastSlice = function replaceLastSlice(str, newSlice, separator) {
  separator = separator ? separator : '/';
  var strSlices = str.split(separator);
  strSlices[strSlices.length - 1] = newSlice;
  return strSlices.join(separator);
};

var replaceSlice = function replaceSlice(str, newSlice, position, separator) {
  if (!str || !newSlice) return str;
  separator = separator ? separator : '/';
  var strSlices = str.split(separator);

  if (position >= strSlices.length) {
    console.error('ERR - too few parts for position: ' + position);
    return '';
  }

  strSlices[strSlices.length - 1] = newSlice;
  return strSlices.join(separator);
};

var strpos = function strpos(haystack, needle) {
  return haystack.indexOf(needle) >= 0;
};

var $ = function $(selector) {
  if (selector.indexOf("#") >= 0) return document.querySelector(selector);
  return document.querySelectorAll(selector);
};

var removeAttrFrom = function removeAttrFrom(element, attrName) {
  element.removeAttribute(attrName);
};

var getAttrValue = function getAttrValue(selector, attr) {
  return $(selector).attr;
};

var getDataValue = function getDataValue(selector, dataName) {
  var target = $(selector);

  if (Array.isArray(target) && target) {
    target = target[0];
  }

  return target.dataset.dataName;
};

var addCssClass = function addCssClass(selector, className, position) {
  position = position ? position : 0;
  var target = $(selector);

  if (target && target.length > 1) {
    if (position === 'all') {
      target.forEach(function (element) {
        addCssClassTo(element, className);
      });
    } else {
      addCssClassTo(target[position], className);
    }

    return;
  } // $('#foo')  returns an element
  // $('div p') returns an node collection


  if (target[position] != undefined) addCssClassTo(target[position], className);else addCssClassTo(target, className);
};

var addCssClassTo = function addCssClassTo(element, className) {
  element.classList.add(className);
};

var getCssClass = function getCssClass(selector, position) {
  position = position ? position : 0;
  var target = $(selector);

  if (target && target.length > 1) {
    if (position === 'all') {
      var classNames = [];
      target.forEach(function (element) {
        classNames.push(element.className);
      });
      return classNames; // array
    }

    return getCssClassFrom(target[position]); // string
  }

  return getCssClassFrom(target[position]); // string
};

var getCssClassFrom = function getCssClassFrom(element) {
  return element.className; // string
};

var hasCssClass = function hasCssClass(element, className) {
  return element.classList.contains(className);
};

var removeCssClass = function removeCssClass(selector, className, position) {
  position = position ? position : 0;
  var target = $(selector);

  if (target && target.length > 1) {
    if (position === 'all') {
      target.forEach(function (element) {
        removeCssClassFrom(element, className);
      });
    } else {
      removeCssClassFrom(target[position], className);
    }

    return;
  } // $('#foo')  returns an element
  // $('div p') returns an node collection


  if (target[position] != undefined) removeCssClassFrom(target[position], className);else removeCssClassFrom(target, className);
};

var removeCssClassFrom = function removeCssClassFrom(element, className) {
  element.classList.remove(className);
};

var addTextById = function addTextById(id, content) {
  var actual_content = $(id).innerText;
  $('#' + id).innerText = actual_content + content;
};

var removeText = function removeText(selector, position) {
  position = position ? position : 0;
  var target = $(selector);

  if (target && target.length > 1) {
    if (position === 'all') {
      target.forEach(function (element) {
        element.innerText = '';
      });
    } else {
      target[position].innerText = '';
    }

    return;
  }

  target.innerText = '';
};

var removeTextById = function removeTextById(id) {
  $('#' + id).innerText = '';
};

var setTextById = function setTextById(id, content) {
  $('#' + id).innerText = content;
};
