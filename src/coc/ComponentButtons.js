console.log('Loaded ./coc/ComponentButtons.js'); // HACK:

class ComponentButtons
{
    ACCEPT_BUTTON_SELECTOR = 'button[data-action="accept"]';
    CANCEL_BUTTON_SELECTOR = 'button[data-action="cancel"]';
    COMPONENT_SELECTOR = '';


    constructor(componentSelector, acceptButtonSelector, cancelButtonSelector) // void
    {
        this.COMPONENT_SELECTOR = componentSelector;

        if (acceptButtonSelector) {
            this.ACCEPT_BUTTON_SELECTOR = acceptButtonSelector;
        }
        if (cancelButtonSelector) {
            this.CANCEL_BUTTON_SELECTOR = cancelButtonSelector;
        }
    }

    getAcceptButtonNode() // js node
    {
        return qs(this.COMPONENT_SELECTOR + ' ' + this.ACCEPT_BUTTON_SELECTOR);
    }

    getCancelButtonNode() // js node
    {
        return qs(this.COMPONENT_SELECTOR + ' ' + this.CANCEL_BUTTON_SELECTOR);
    }

    handleAcceptButtonActivation(callback, callbackParams, confirmMessage = '') // void
    {
        const buttonNode = this.getAcceptButtonNode();
        if (!buttonNode) {
            return;
        }

        buttonNode.addEventListener('click', function (ev) // void
        {
            ev.preventDefault();
            if (confirmMessage && !confirm(confirmMessage)) {
                return;
            }

            enable(buttonNode);
            if (callback) {
                callback(callbackParams);
            }
        });
    }

    handleCancelButtonActivation(callback, callbackParams, confirmMessage = '') // void
    {
        const buttonNode = this.getCancelButtonNode();
        if (!buttonNode) {
            return;
        }

        buttonNode.addEventListener('click', function (ev) // void
        {
            ev.preventDefault();
            if (confirmMessage && !confirm(confirmMessage)) {
                return;
            }

            disable(buttonNode);
            if (callback) {
                callback(callbackParams);
            }
        });
    }

    handleRelatedButtonsGroup(groupSelector, callback, callbackParams) // void
    {
        const buttonNodes = qsa(groupSelector);
        if (groupSelector.length) {
            groupSelector.forEach(buttonNode => // void
            {
                buttonNode.addEventListener('click', function (ev) // void
                {
                    ev.preventDefault();

                    if (callback) {
                        callback(callbackParams);
                    }
                });
            });
        }
    }
}
