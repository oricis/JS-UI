log('component handler is loaded!');

handleResetTableColumnsButton();

const visibleColsSelector = componentNodes.getVisibleColsSelector();
const hideColsSelector = componentNodes.getHideColsSelector();

// Handle option movement between selects

colsSelectorsUiActions.handleOptionSelection(
    visibleColsSelector,
    hideColsSelector
);
colsSelectorsUiActions.handleOptionSelection(
    hideColsSelector,
    visibleColsSelector
);

function handleResetTableColumnsButton() // void
{
    componentNodes.getResetColumnsButton().onclick = () => {
        colsSelectorsUiActions.moveAllOptions(
            hideColsSelector,
            visibleColsSelector,
            colsSelectorsUiActions.hideHideColsSelectorContainer
        );
    }
}
