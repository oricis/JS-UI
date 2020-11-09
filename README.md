# JS UI - v.1.4.0

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

 * addClass( selector, className, position = 0 )             --tested
 * addClassTo( element, className )                          --tested
 * addClassToAll( elements, className )                      --tested
 * getClass( selector, position = 0 )                        --tested
 * getClassFrom( element )                                   --tested
 * hasClass( element, className )                            --tested
 * removeClass( selector, className, position = 0 )          --tested
 * removeClassFrom( element, className )                     --tested
 * removeClassFromAll( elements, className )                 --tested
 * toggleClassOf( element, className )                       --tested


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
