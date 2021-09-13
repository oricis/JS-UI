console.log('Loaded script to test "checkboxesSelector.js"...');

const MONTHS_SELECTION_COMPONENT_SELECTOR = '.component.months-selector';

const checkboxesSelector = new CheckboxesSelector(MONTHS_SELECTION_COMPONENT_SELECTOR);
checkboxesSelector.handleAcceptButtonActivation(clickedAccept);
checkboxesSelector.handleCancelButtonActivation(clickedCancel);
handleCheckboxes();
handleSelect();


function clickedAccept() // void
{
    const selectedMonths = checkboxesSelector.getCheckboxesValues(
        checkboxesSelector.getCheckedCheckboxes()
    );
    saveData(selectedMonths);

    function saveData(selectedMonths) // void
    {
        log('HACK: Selected months: ', selectedMonths)
    }
}
function clickedCancel() // cancel
{
    const checkboxes = checkboxesSelector.getCheckboxes();
    uncheckAll(checkboxes);
}
function handleCheckboxes() // void
{
    checkboxesSelector.handleCheckboxesActivation();
}

function handleSelect() // void
{
    const select = qs('select');
    if (select) {
        select.onchange = () => // void
        {
            const selectedOptions = getSelectedOptions(select);
            if (selectedOptions.length) {
                const selectedOptionValue = selectedOptions[0].value;

                const monthSelectors = qsa('ul.component.multi-check-selector');
                monthSelectors.forEach((node, index) => // void
                {
                    toggleMonthSelectors(selectedOptionValue, node, index);
                });
            }
        }
    }

    function toggleMonthSelectors(selectedOptionValue, node, index) // void
    {
        node.classList.add(Settings.HIDE_CLASS_NAME);
        if ((index + 1) == selectedOptionValue) {
            node.classList.remove(Settings.HIDE_CLASS_NAME);
        }
    }
}
