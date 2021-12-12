class ComponentUi // class
{

    onEdit(activeJsNode) // void
    {
        this.removeErrorClassNames(activeJsNode);
        activeJsNode.classList.add(componentSettings.ON_EDITION_CLASS_NAME);
    }
    removeErrorClassNames(activeJsNode) // void
    {
        removeClasses(
            activeJsNode,
            ['border-bottom', 'red-border']
        );
    }

    obfuscateInputContent(contentJsNode) // void
    {
        if (contentJsNode.classList.contains('line-through')) {
            contentJsNode.classList.remove('line-through');

            changeCharsWith(contentJsNode, '*');
        }
    }
}
const componentUi = new ComponentUi();
