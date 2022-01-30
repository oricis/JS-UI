class ColsSelectorsUiActions // class
{
    sortedValues = [];


    constructor() // constructor
    {
        this.sortedValues = componentNodes.getOrderedValues();
    }

    handleOptionSelection(selectFrom, selectTo) // void
    {
        selectFrom.onchange = () => {
            const selectedOption = getSelectedOptions(selectFrom)[0];
            if (selectedOption.value == 0) {
                return;
            }

            let arrOptions = getOptions(selectTo);
            const firstOption = arrOptions.shift();
            arrOptions.push(selectedOption);
            arrOptions = sortOptions(arrOptions, this.sortedValues);
            replaceOptions(selectTo, [firstOption].concat(arrOptions));
            selectOptionByPosition(selectTo, 0);

            if (selectTo.name === componentNodes.visible_cols_selector_name
                && selectFrom.options.length === 1) {
                this.hideHideColsSelectorContainer();
            }
            if (selectTo.name === componentNodes.hidden_cols_selector_name) {
                this.showHideColsSelectorContainer();
            }
        };
    }

    hideHideColsSelectorContainer() // void
    {
        componentNodes.getHideColsSelectorContainer().classList.add('none');
    }
    showHideColsSelectorContainer() // void
    {
        componentNodes.getHideColsSelectorContainer().classList.remove('none');
    }

    moveAllOptions(selectFrom, selectTo, callback = null) // void
    {
        const firstOption = getOptions(selectFrom)[0];

        const selectFromOptions = getOptions(selectFrom);
        const selectToOptions = getOptions(selectTo);
        replaceOptions(selectFrom, [firstOption]);
        replaceOptions(selectTo, [firstOption]);

        selectFromOptions.splice(0, 1);
        selectToOptions.splice(0, 1);

        let arrOptions = selectFromOptions.concat(selectToOptions);
        arrOptions = sortOptions(arrOptions, componentNodes.getOrderedValues());
        addOptions(selectTo, arrOptions);

        if (callback) {
            callback(selectTo);
        }
    }
}
const colsSelectorsUiActions = new ColsSelectorsUiActions();
