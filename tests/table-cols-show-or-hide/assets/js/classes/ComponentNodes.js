class ComponentSelectors // class
{
    tableColsSelector = 'table thead th';

    hidden_cols_selector_name = 'hidden_columns';
    visible_cols_selector_name = 'visible_columns';
}

class ComponentNodes extends ComponentSelectors // class
{

    constructor() // constructor
    {
        super();
    }

    getHideColsSelector() // js node
    {
        return qs('select#hidden_columns');
    }
    getHideColsSelectorContainer() // js node
    {
        return qs('#hide_cols_selector_container');
    }
    getHideColsSelectorOptions() // js nodes
    {
        return qsa('select#hidden_columns option');
    }
    getVisibleColsSelector() // js node
    {
        return qs('select#visible_columns');
    }
    getVisibleColsSelectorOptions() // js nodes
    {
        return qsa('select#visible_columns option');
    }

    getOrderedValues() // array
    {
        const input = qs('input#ordered_cols');

        return input.value.split(',');
    }

    getResetColumnsButton() // js node
    {
        return qs('button[data-action="restore-all-cols"]');
    }

    getTableCols() // js nodes
    {
        return qsa(this.tableColsSelector);
    }
}
const componentNodes = new ComponentNodes();
