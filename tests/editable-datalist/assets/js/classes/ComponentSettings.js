class ComponentSettings // class
{
    ACTIVATED_CLASSES = ['cblue', 'underline'];
    ON_EDITION_CLASS_NAME = 'active';


    getActiveClassNames() {
        return this.ACTIVATED_CLASSES;
    }
    getOnEditionClassName() // string
    {
        return this.ON_EDITION_CLASS_NAME;
    }
}
const componentSettings = new ComponentSettings();
