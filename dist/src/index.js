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

function getArrayPosition(arr, element) // int
{
  return arr.indexOf(element);
}

function removeArrayMatch(arr, element) // array
{
  var position = getArrayPosition(arr, element);

  if (position >= 0) {
    arr.splice(position, 1);
  }

  return arr;
}

function removeArrayMatches(arr, element, onlyFirst) // array
{
  if (onlyFirst !== undefined && onlyFirst) {
    return removeArrayMatch(arr, element);
  }

  var position = 0;

  while (position < arr.length) {
    if (arr[position] === element) {
      arr.splice(position, 1);
    } else {
      position++;
    }
  }

  return arr;
}

function removeDuplicateValues(arr) // array
{
  return _toConsumableArray(new Set(arr));
}

function removeEmptyValues(arr) // array
{
  return arr.filter(function (n) {
    return n && n.length > 0;
  });
}

var getLastSlice = function getLastSlice(str, separator) {
  separator = separator ? separator : '/';
  var strSlices = str.split(separator);
  return strSlices[strSlices.length - 1];
};

var getSlice = function getSlice(str, position, separator) {
  separator = separator ? separator : '/';
  var strSlices = str.split(separator);

  if (position < 0) {
    position = strSlices.length + position;
  }

  return position < strSlices.length ? strSlices[position] : '';
};

var getSlicesLength = function getSlicesLength(str, separator) {
  separator = separator ? separator : '/';
  return str.split(separator).length;
};

var replaceLastSlice = function replaceLastSlice(str, newSlice, separator) {
  separator = separator ? separator : '/';
  var strSlices = str.split(separator);
  strSlices[strSlices.length - 1] = newSlice;
  return strSlices.join(separator);
};

var replaceSlice = function replaceSlice(str, newSlice, position, separator) {
  if (!str || !newSlice || typeof position == 'undefined') {
    console.error('ERR - Something is wrong with the params!');
    return '';
  }

  separator = separator ? separator : '/';
  var strSlices = str.split(separator);

  if (position < 0) {
    position = strSlices.length + position;
  }

  if (position >= strSlices.length) {
    console.error('ERR - Too few parts for position: ' + position);
    return '';
  }

  strSlices[position] = newSlice;
  return strSlices.join(separator);
};

var strhas = function strhas(haystack, needle) {
  return haystack.indexOf(needle) >= 0;
};

var strpos = function strpos(haystack, needle) {
  return haystack.indexOf(needle);
};

function reduceWhiteSpaces(str) // string
{
  str = new String(str);

  while (str.includes('  ')) {
    str = str.replace('  ', ' ');
  }

  return '' + str;
}

function removeWhiteSpaces(str) // string
{
  str = new String(str);

  while (str.includes(' ')) {
    str = str.replace(' ', '');
  }

  return '' + str;
}

function $(selector) // js node/s
{
  if (selector.indexOf("#") === 0 && selector.indexOf(' ') < 0) {
    return document.querySelector(selector);
  }

  return document.querySelectorAll(selector);
}

function getId(id) // string
{
  return id.indexOf('#') === 0 ? id : '#' + id;
}

function getTargetDomNode(selector) // js node
{
  var target = $(selector);

  if (Array.isArray(target) || target) {
    target = target[0];
  }

  return target;
}

function qi(selector) // js node
{
  return document.getElementById(selector);
}

function qs(selector) // js node
{
  return document.querySelector(selector);
}

function qsa(selector) // js node/s
{
  return document.querySelectorAll(selector);
}

var getAttrValue = function getAttrValue(selector, attrName) {
  var target = getTargetDomNode(selector);
  var result = target.getAttribute(attrName);
  return result ? result : '';
};

var getAttrValueFrom = function getAttrValueFrom(element, attrName) {
  var result = element.getAttribute(attrName);
  return result ? result : '';
};

var getDataValue = function getDataValue(selector, dataName) {
  var target = getTargetDomNode(selector);
  var result = target.dataset[dataName];
  return result ? result : '';
};

var getDataValueFrom = function getDataValueFrom(element, dataName) {
  var result = element.dataset[dataName];
  return result ? result : '';
};

var removeAttr = function removeAttr(selector, attrName) {
  var target = getTargetDomNode(selector);
  target.removeAttribute(attrName);
};

var removeAttrFrom = function removeAttrFrom(element, attrName) {
  element.removeAttribute(attrName);
};

var addClass = function addClass(selector, className, position) {
  position = position ? position : 0;
  var target = $(selector);

  if (target && target.length > 1) {
    if (position === 'all') {
      target.forEach(function (element) {
        addClassTo(element, className);
      });
    } else {
      addClassTo(target[position], className);
    }

    return;
  } // $('#foo')  returns an element
  // $('div p') returns an node collection


  if (target[position] != undefined)
    addClassTo(target[position], className);
  else
    addClassTo(target, className);
};

var addClassTo = function addClassTo(element, className) {
  element.classList.add(className);
};

var addClassToAll = function addClassToAll(elements, className) {
  if (!elements || _typeof(elements) !== 'object') {
    console.error('addClassToAll() - Err args');
    return;
  }

  elements.forEach(function (element) {
    addClassTo(element, className);
  });
};

var getClass = function getClass(selector, position) {
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

    return getClassFrom(target[position]); // string
  }

  return getClassFrom(target[position]); // string
};

var getClassFrom = function getClassFrom(element) {
  return element.className; // string
};

var hasClass = function hasClass(element, className) {
  return element.classList.contains(className);
};

var removeClass = function removeClass(selector, className, position) {
  position = position ? position : 0;
  var target = $(selector);

  if (target && target.length > 1) {
    if (position === 'all') {
      target.forEach(function (element) {
        removeClassFrom(element, className);
      });
    } else {
      removeClassFrom(target[position], className);
    }

    return;
  } // $('#foo')  returns an element
  // $('div p') returns an node collection


  if (target[position] != undefined) removeClassFrom(target[position], className); else removeClassFrom(target, className);
};

var removeClassFrom = function removeClassFrom(element, className) {
  element.classList.remove(className);
};

var removeClassFromAll = function removeClassFromAll(elements, className) {
  if (!elements || _typeof(elements) !== 'object') {
    console.error('removeClassFromAll() - Err args');
    return;
  }

  elements.forEach(function (element) {
    removeClassFrom(element, className);
  });
};

var toggleClassOf = function toggleClassOf(node, className) {
  node.classList.toggle(className);
};

var addTextById = function addTextById(id, content) {
  id = getId(id);
  var textContent = getText($(id));
  setText($(id), textContent + content);
};

function getText(element) {
  return element.innerText;
}

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

  setText(target, '');
};

var removeTextById = function removeTextById(id) {
  id = getId(id);
  setText($(id), '');
};

function setText(element, content) {
  element.innerText = content;
}

var setTextById = function setTextById(id, content) {
  id = getId(id);
  setText($(id), content);
};
