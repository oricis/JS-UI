console.log('Loaded ./coc/ToggleableNodes.js'); // HACK:

class ToggleableNodes
{

    toggledNone(
        selectorsOrNodes,
        callback,
        callbackParams,
        confirmMessage
    ) // void
    {
        toggleClassNameOfPairedNodes(
            getNodes(selectorsOrNodes),
            Settings.HIDE_CLASS_NAME
        );

        if (confirmMessage && !confirm(confirmMessage)) {
            return;
        }
        if (callback) {
            callback(callbackParams);
        }
    }
    toggledDisable(
        selectorsOrNodes,
        callback,
        callbackParams,
        confirmMessage
    ) // void
    {
        const nodes = getNodes(selectorsOrNodes);
        toggleClassNameOfPairedNodes(nodes, Settings.DISABLE_CLASS_NAME);
        if (nodes[0].hidden) {
            nodes[0].hidden = false;
            nodes[1].hidden = true;
        } else {
            nodes[0].hidden = true;
            nodes[1].hidden = false;
        }

        if (confirmMessage && !confirm(confirmMessage)) {
            return;
        }
        if (callback) {
            callback(callbackParams);
        }
    }
}
