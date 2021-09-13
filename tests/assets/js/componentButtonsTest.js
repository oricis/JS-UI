console.log('Loaded script to test "ComponentButtons.js"...');

const MONTHS_SELECTION_COMPONENT_SELECTOR = '.component.months-selector';

const componentButtons = new ComponentButtons(MONTHS_SELECTION_COMPONENT_SELECTOR);
componentButtons.handleAcceptButtonActivation(clickedAccept);
componentButtons.handleCancelButtonActivation(clickedCancel);
handleCheckboxes();
handleSelect();


function clickedAccept() // void
{
    const checkboxes = qsa('input[type="checkbox"]');
    const selectedMonths = [];
    checkboxes.forEach(checkbox => // void
    {
        if (checkbox.checked) {
            selectedMonths.push(checkbox.value);
        }
    });

    saveData(selectedMonths);

    function saveData(selectedMonths) // void
    {
        log('HACK: Selected months: ', selectedMonths)
    }
}
function clickedCancel() // cancel
{
    const checkboxes = qsa('input[type="checkbox"]');
    checkboxes.forEach(checkbox => // void
    {
        checkbox.checked = false;
    });
}
function handleCheckboxes() // void
{
    const acceptButton = componentButtons.getAcceptButtonNode();
    const cancelButton = componentButtons.getCancelButtonNode();

    const monthlyCheckboxes
        = qsa(MONTHS_SELECTION_COMPONENT_SELECTOR + ' [type="checkbox"]');
    monthlyCheckboxes.forEach(checkbox => // void
    {
        checkbox.onclick = () => // void
        {
            handleCheckboxActivation(checkbox);
        }
    });

    function handleCheckboxActivation(checkbox) // void
    {
        if (checkbox.checked) {
            enable(acceptButton);
            enable(cancelButton);
        }
    }
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
        node.classList.add('none');
        if ((index + 1) == selectedOptionValue) {
            node.classList.remove('none');
        }
    }
}
