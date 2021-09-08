console.log('Loaded script to test "ComponentButtons.js"');

function clickedAccept() // void
{
    const select = qs('select');
    const checkboxes = qsa('input[type="checkbox"]');

    disable(select);
    checkboxes.forEach(node => {
        disable(node);
    });
}
function clickedCancel() // cancel
{
    const select = qs('select');
    const checkboxes = qsa('input[type="checkbox"]');

    enable(select);
    checkboxes.forEach(node => {
        enable(node);
    });
}

const componentButtons = new ComponentButtons('.component.months-selector');
const acceptButton = componentButtons.getAcceptButtonNode();
const cancelButton = componentButtons.getCancelButtonNode();
console.log(acceptButton, cancelButton)
if (acceptButton) {
    acceptButton.onclick = () => {
        console.log('CLICKED "accept" button');
        componentButtons.handleAcceptButtonActivation(clickedAccept);
    }
}
if (cancelButton) {
    cancelButton.onclick = () => {
        console.log('CLICKED "cancel" button');
        componentButtons.handleCancelButtonActivation(clickedCancel);
    }
}
