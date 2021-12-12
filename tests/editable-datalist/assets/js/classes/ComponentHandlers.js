class ComponentHandlers // class
{
    EDITABLE_NODE = null;


    constructor() // constructor
    {
        this.EDITABLE_NODE = componentNodes.getEditableNode();
    }

    handleClick(editableNode = this.EDITABLE_NODE) // void
    {
        if (!editableNode) {
            error('ComponentHandlers@handleClick - NO editable node');
            return;
        }
        editableNode.addEventListener('click', function () // void
        {
            const contentJsNode = editableNode.querySelector('input');
            componentActions.startInlineEdition(editableNode, contentJsNode);

            contentJsNode.addEventListener('keydown', function (ev) // void
            {
                keydownActions(contentJsNode, ev.keyCode);
            });
            contentJsNode.addEventListener('blur', function () // void
            {
                componentActions.restoreOldContent(contentJsNode);
                componentActions.stopInlineEdition(editableNode, contentJsNode);
            });

            addClasses(
                contentJsNode,
                componentSettings.getActiveClassNames()
            );

            function keydownActions(contentJsNode, eventKeyCode) // void
            {
                if (contentJsNode.classList.contains('blur-chars')) {
                    contentJsNode.classList.add('line-through');
                }

                // NOTE: pushed the "enter" key to launch the update
                if (eventKeyCode === 13) {
                    asyncHandler.call(editableNode, contentJsNode);
                }
            }
        });
    }

    handleFocusout(editableNode = this.EDITABLE_NODE) // void
    {
        if (!editableNode) {
            error('ComponentHandlers@handleFocusout - NO editable node');
            return;
        }
        editableNode.addEventListener('focusout', function () // void
        {
            const contentJsNode = editableNode.querySelector('input');
            removeClasses(
                contentJsNode,
                componentSettings.getActiveClassNames()
            );
        });
    }
}
