# JS UI - v.1.6.0

Collection of JS functions to DOM manipulation.


***

## How to use

Import the bundle file with all the functions. For example:

    <script src="../dist/src/index.js" defer></script>


## Available functions

### **dom /**

 > attributes.js

 * getAttrValue( selector, attrName )                           --tested
 * getAttrValueFrom( node, attrName )                           --tested
 * getDataValue( selector, dataName )                           --tested
 * getDataValueFrom( node, dataName )                           --tested
 * removeAttr( selector, attrName )                             --tested
 * removeAttrFrom( node, attrName )                             --tested

 > query.js

 * $( selector )                                                --tested
 * getIdFromSelector( selector )                                --tested
 * getIdSelector( idOrSelector )                                --tested
 * getTargetDomNode( selector )
 * isIdSelector( selector )
 * qi( selector )  // wrap for document.getElementById( id )
 * qs( selector )  // wrap for document.querySelector( selector )
 * qsa( selector ) // wrap for document.querySelectorAll( selector )

 > style-attributes.js

 * addClass( selector, className, position = 0 )                --tested
 * addClassTo( node, className )                                --tested
 * addClassToAll( nodes, className )
 * addClassToNodes( className, arrNodesOrSelector )
 * getClass( selector, position = 0 )                           --tested
 * getClassFrom( node )                                         --tested
 * hasClass( node, className )                                  --tested
 * removeClass( selector, className, position = 0 )             --tested
 * removeClassFrom( node, className )                           --tested
 * removeClassFromAll( nodes, className )
 * removeClassFromNodes( className, arrNodesOrSelector )
 * toggleClassOf( node, className )                             --tested

 > texts.js

 * addTextById( id, content )                                   --tested
 * getText( node )                                              --tested
 * removeText( selector, position = 0 )                         --tested
 * removeTextById( id )                                         --tested
 * setText( node, content )                                     --tested
 * setTextById( id, content )                                   --tested

 > nodes.js

 * disable( nodeOrSelector )
 * enable( nodeOrSelector )
 * getNode( nodeOrSelector )
 * getNodes( nodesOrSelector )
 * togglePairedDisplay( nodeOrSelectorToShow, nodeOrSelectorToHide )

### **utils /**

 > arrays.js

 * getArrayPosition( arr, needle ) // int                       --tested
 * removeArrayMatch( arr, needle ) // array                     --tested
 * removeArrayMatches( arr, needle, onlyFirst = false) // array --tested
 * removeDuplicateValues( arr ) // array                        --tested
 * removeEmptyValues( arr ) // array                            --tested


 > NodeBuilder.js (class)
 * addAttributes( node, objAttributes)                          --tested
 * addChildren( node, arrChildNodes)                            --tested
 * addHtmlContent( node, htmlString)                            --tested
 * addTextContent( node, text)                                  --tested
 * build( strElement, objAttributes, arrChildNodes, text)       --tested


 > strings.js

 * getLastSlice( str, separator ) // string                     --tested
 * getSlice( str, position, separator ) // string               --tested
 * getSlicesLength( str, separator ) // int                     --tested
 * reduceWhiteSpaces() // string                                --tested
 * removeWhiteSpaces() // string                                --tested
 * replaceLastSlice( str, newSlice, separator ) // string       --tested
 * replaceSlice( str, newSlice, position, separator ) // string --tested
 * strhas( haystack, needle ) // bool                           --tested
 * strpos( haystack, needle ) // int                            --tested

> var.js

 * existObjectKey( obj, key ) // bool                          -- tested
 * submitFormTo( route, form ) // void                         -- tested

***
## About

This project was started in October of 2020 by ** Moisés Alcocer**
to put in one only place different JavaScript functions
used in different projects along the time.

To known more email me: contacto@ironwoods.es or visit my website:
https://www.ironwoods.es

***
## License notice

**MIT License**

Copyright (c) 2020 Moisés Alcocer.
