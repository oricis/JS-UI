console.log('Loaded ./coc/CheckboxesSelector.js'); // HACK:

class CheckboxesSelector extends ComponentButtons
{

    constructor(componentSelector, acceptButtonSelector, cancelButtonSelector) // void
    {
        super(
            componentSelector,
            acceptButtonSelector,
            cancelButtonSelector
        );
    }

    getCheckboxes() // js nodes
    {
        return qsa(this.COMPONENT_SELECTOR + ' input[type="checkbox"]');
    }

    getCheckedCheckboxes(checkboxNodes = null) // js nodes
    {
        checkboxNodes = (checkboxNodes)
            ? checkboxNodes
            : this.getCheckboxes();

        const checkedCheckboxNodes = [];
        checkboxNodes.forEach(node => // void
        {
            if (node.checked) {
                checkedCheckboxNodes.push(node);
            }
        });

        return checkedCheckboxNodes;
    }

    getCheckboxesValues(checkboxNodes = null) // js nodes
    {
        checkboxNodes = (checkboxNodes)
            ? checkboxNodes
            : this.getCheckboxes();

        const checkboxesValues = [];
        checkboxNodes.forEach(node => // void
        {
            checkboxesValues.push(node.value);
        });

        return checkboxesValues;
    }

    handleCheckboxesActivation(callback, callbackParams, confirmMessage = '') // void
    {
        const checkboxes = this.getCheckboxes();
        if (!checkboxes.length) {
            return;
        }

        const thisClass = this;
        checkboxes.forEach(checkbox => // void
        {
            checkbox.onclick = () => // void
            {
                if (confirmMessage && !confirm(confirmMessage)) {
                    return;
                }

                if (thisClass.getCheckedCheckboxes(checkboxes).length) {
                    enable(thisClass.getCancelButtonNode());
                    enable(thisClass.getAcceptButtonNode());
                }
                if (callback) {
                    callback(callbackParams);
                }
            }
        });
    }
}
