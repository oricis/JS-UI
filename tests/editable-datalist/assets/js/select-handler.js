log('loaded "handler.js"');


const componentSelector = '.component.async-editable-select';
const listType = 'select';

const componentNodes = new ComponentNodes(componentSelector, listType);
const componentData  = new ComponentData();
const componentActions = new ComponentActions();
const componentHandlers = new ComponentHandlers();
componentHandlers.handleClick();
componentHandlers.handleFocusout();
