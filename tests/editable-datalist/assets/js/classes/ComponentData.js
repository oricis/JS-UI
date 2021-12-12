class ComponentData // class
{

    getOldContent() // string
    {
        const input = componentNodes.getEditableNode();

        return input.hasAttribute('data-old')
            ? input.getAttribute('data-old')
            : '';
    }
    updateOldContent() // void
    {
        const input = componentNodes.getEditableNode();
        input.setAttribute('data-old', input.value);
    }
}

