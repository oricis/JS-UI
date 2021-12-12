log('loaded "handler.js"');


const componentSelector = '.component.async-editable-datalist';
const listType = 'datalist';

const componentNodes = new ComponentNodes(componentSelector, listType);
const componentData  = new ComponentData();
const componentActions = new ComponentActions();
const componentHandlers = new ComponentHandlers();
componentHandlers.handleClick();
componentHandlers.handleFocusout();
