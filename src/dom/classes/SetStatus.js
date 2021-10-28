class SetStatus // class
{

    activate(nodeOrSelector, className = 'active') // void
    {
        node = getNode(nodeOrSelector);
        if (node) {
            node.classList.add(className);
        }
    }
    deactivate(nodeOrSelector, className = 'active') // void
    {
        node = getNode(nodeOrSelector);
        if (node) {
            node.classList.remove(className);
        }
    }

    disable(nodeOrSelector) // void
    {
        node = getNode(nodeOrSelector);
        if (node) {
            node.disabled = true;
        }
    }
    enable(nodeOrSelector) // void
    {
        node = getNode(nodeOrSelector);
        if (node) {
            node.removeAttribute('disabled');
        }
    }

    hide(nodeOrSelector) // void
    {
        node = getNode(nodeOrSelector);
        if (node) {
            node.hidden = true;
        }
    }
    show(nodeOrSelector) // void
    {
        node = getNode(nodeOrSelector);
        if (node) {
            node.removeAttribute('hidden');
        }
    }
}
const setStatus = new SetStatus();
