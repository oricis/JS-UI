# JS UI - v.1.0.0

Collection of JS functions to DOM manipulation.


***

## How to use

Import the bundle file with all the functions. For example:

    <script src="../dist/src/index.js" defer></script>


## Available functions

### ui.js

 * $( selector )                                                --tested
 * removeAttrFrom( element, attrName )
 * getAttrValue( selector, attr )
 * getDataValue( selector, dataName )


### ui-styles.js

 * addCssClass( selector, className, position = 0 )             --tested
 * addCssClassTo( element, className )                          --tested
 * getCssClass( selector, position = 0 )                        --tested
 * getCssClassFrom( element )                                   --tested
 * hasCssClass( element, className )                            --tested
 * removeCssClass( selector, className, position = 0 )          --tested
 * removeCssClassFrom( element, className )                     --tested

### ui-texts.js

 * addTextById( id, content )
 * removeText( selector, position = 0 )                         --tested
 * removeTextById( id )                                         --tested
 * setTextById( id, content )


***
## About

This project was started in October of 2020 by ** Moisés Alcocer** to join
different JavaScript functions used in different projects along the time.

To known more email me: contacto@ironwoods.es or visit my website:
https://www.ironwoods.es

***
## License notice

**MIT License**

Copyright (c) 2020 Moisés Alcocer.
