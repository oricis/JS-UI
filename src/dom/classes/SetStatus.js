class SetStatus // class
{

    activate(nodeOrSelector, className = 'active') // void
    {
        const node = getNode(nodeOrSelector);
        if (node) {
            node.classList.add(className);
        }
    }
    deactivate(nodeOrSelector, className = 'active') // void
    {
        const node = getNode(nodeOrSelector);
        if (node) {
            node.classList.remove(className);
        }
    }

    disable(nodeOrSelector) // void
    {
        const node = getNode(nodeOrSelector);
        if (node) {
            node.disabled = true;
        }
    }
    enable(nodeOrSelector) // void
    {
        const node = getNode(nodeOrSelector);
        if (node) {
            node.removeAttribute('disabled');
        }
    }

    hide(nodeOrSelector) // void
    {
        const node = getNode(nodeOrSelector);
        if (node) {
            node.hidden = true;
        }
    }
    show(nodeOrSelector) // void
    {
        const node = getNode(nodeOrSelector);
        if (node) {
            node.removeAttribute('hidden');
        }
    }
}
const setStatus = new SetStatus();
