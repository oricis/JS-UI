console.log('loaded js/pages/shop/classes/CustomizationLines.js'); // HACK:

class ComponentButtons
{
    COMPONENT_SELECTOR = '';
    CANCEL_BUTTON_SELECTOR = 'button[data-action="cancel"]';
    ACCEPT_BUTTON_SELECTOR = 'button[data-action="accept"]';


    constructor(componentSelector, acceptButtonSelector, cancelButtonSelector) // void
    {
        this.COMPONENT_SELECTOR = componentSelector;
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

    handleRelatedButtonsGroup(serieSelector, callback, callbackParams) // void
    {
        const buttonNodes = qsa(serieSelector);
        if (serieSelector.length) {
            serieSelector.forEach(buttonNode => // void
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
