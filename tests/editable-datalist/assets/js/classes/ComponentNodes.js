class ComponentSelectors // class
{
    COMPONENT_SELECTOR = '';
    LIST_SELECTOR = '';

    // listType: datalist | select
    constructor(componentSelector, listType = 'datalist') // constructor
    {
        this.COMPONENT_SELECTOR = componentSelector
        this.LIST_SELECTOR = componentSelector + ' ' + listType;
    }

    getEditableNodeSelector()// string
    {
        return this.COMPONENT_SELECTOR;
    }
    getListSelector() // string
    {
        return this.LIST_SELECTOR;
    }
}
class ComponentNodes extends ComponentSelectors // class
{
    constructor(componentSelector, listType) // constructor
    {
        super(componentSelector, listType);
    }

    getDatalist() // js node
    {
        return qs(this.getListSelector());

    }
    getEditableNode() // js node
    {
        return qs(this.getEditableNodeSelector());
    }
}
