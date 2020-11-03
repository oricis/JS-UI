# JS UI - v.1.3.0

Collection of JS functions to DOM manipulation.


***

## How to use

Import the bundle file with all the functions. For example:

    <script src="../dist/src/index.js" defer></script>


## Available functions

### ui.js

 * $( selector )                                                --tested
 * removeAttr( selector, attrName )                             --tested
 * removeAttrFrom( element, attrName )                          --tested
 * getAttrValue( selector, attrName )                           --tested
 * getAttrValueFrom( element, attrName )                        --tested
 * getDataValue( selector, dataName )                           --tested
 * getDataValueFrom( element, dataName )                        --tested


### ui-styles.js

 * addCssClass( selector, className, position = 0 )             --tested
 * addCssClassTo( element, className )                          --tested
 * addCssClassToAll( elements, className )                      --tested
 * getCssClass( selector, position = 0 )                        --tested
 * getCssClassFrom( element )                                   --tested
 * hasCssClass( element, className )                            --tested
 * removeCssClass( selector, className, position = 0 )          --tested
 * removeCssClassFrom( element, className )                     --tested
 * removeCssClassFromAll( elements, className )                 --tested


### ui-texts.js

 * addTextById( id, content )                                   --tested
 * getText( element )                                           --tested
 * removeText( selector, position = 0 )                         --tested
 * removeTextById( id )                                         --tested
 * setText( element, content )                                  --tested
 * setTextById( id, content )                                   --tested


### utils.js

 * existObjectKey( obj, key )                                  -- tested
 * submitFormTo( route, form )                                 -- tested


### utils-strings.js

 * getLastSlice( str, separator )                               --tested
 * getSlice( str, position, separator )                         --tested
 * getSlicesLength( str, separator )                            --tested
 * replaceLastSlice( str, newSlice, separator )                 --tested
 * replaceSlice( str, newSlice, position, separator )           --tested
 * strhas( haystack, needle )                                   --tested
 * strpos( haystack, needle )                                   --tested


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
