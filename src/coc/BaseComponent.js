console.log('Loaded ./coc/BaseComponent.js'); // HACK:

class BaseComponent
{
    COMPONENT_SELECTOR = '';
    CONTAINER_PARENT_SELECTOR = 'body';


    setComponentSelector(selector = '') // void
    {
        if (selector) {
            this.COMPONENT_SELECTOR = selector;
        }
    }

    setParentContainerComponentSelector(selector = '') // void
    {
        if (selector) {
            this.CONTAINER_PARENT_SELECTOR = selector;
        }
    }
}
