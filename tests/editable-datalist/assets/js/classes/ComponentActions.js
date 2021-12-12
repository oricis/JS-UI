class ComponentActions // class
{
    CONTENT_BEFORE_EDITION = '';


    constructor() // constructor
    {
        this.CONTENT_BEFORE_EDITION = componentData.getOldContent();
    }

    restoreOldContent(input) // void
    {
        log('@restoreOldContent ---')

        if (this.CONTENT_BEFORE_EDITION !== '') {
            input.value = this.CONTENT_BEFORE_EDITION;
        }
    }

    startInlineEdition(activeJsNode, contentJsNode) // void
    {
        log('@startInlineEdition')
        componentUi.onEdit(activeJsNode);
        contentJsNode.focus();
        activeSearch(contentJsNode, 3);

        function activeSearch(input, minChars = 5) // void
        {
            log('@activeSearch', 777);

            input.addEventListener('keyup', function (ev) // event handler
            {
                handleInputChanges(input, minChars);
            });

            function handleInputChanges(input, minChars) // void
            {
                todo('@handleInputChanges'); // TODO:
            }
        }
    }
    stopInlineEdition(activeJsNode, contentJsNode) // void
    {
        componentData.updateOldContent();

        activeJsNode.classList.remove(componentSettings.getOnEditionClassName());
        componentUi.obfuscateInputContent(contentJsNode);
    }
}
