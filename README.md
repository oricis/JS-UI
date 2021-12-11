# JS UI - v.1.7.0

Collection of JS functions to DOM manipulation.


***

## How to use

Import the bundle file with all the functions. For example:

    <script src="../dist/src/index.js" defer></script>

Some specific use functions aren't in the bundle file,
then they can be used separately, loading their files, f.e.:

    <script src="./src/utils/traces.js" defer></script>

*This file content wrapper function to use `console` methods, possible results:*

![traces1](https://user-images.githubusercontent.com/7187599/132551227-1e5ba469-2273-4a1e-aa2e-7da64a826816.png)

![traces2](https://user-images.githubusercontent.com/7187599/132551232-395c60fd-5103-4311-b2aa-2fdd6bc2a334.png)

Since v.2.0.0 some COC *(Component Oriented Classes)* were included.
These classes use different functions from the bundle file,
but they aren't included themselves.

## Available functions

### **coc /**

 > CheckboxesSelector.js

 * @getCheckboxes()                                             --tested
 * @getCheckboxesValues( checkboxNodes = null )                 --tested
 * @getCheckedCheckboxes( checkboxNodes = null )                --tested
 * @handleCheckboxesActivation( callback, callbackParams, confirmMessage = '' ) --tested

 > ComponentButtons.js
 * @getAcceptButtonNode()                                       --tested
 * @getCancelButtonNode()                                       --tested
 * @handleAcceptButtonActivation( callback, callbackParams, confirmMessage = '' ) --tested
 * @handleCancelButtonActivation( callback, callbackParams, confirmMessage = '' ) --tested
 * @handleRelatedButtonsGroup( groupSelector, callback, callbackParams )

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

 * addClasses( node, arrClassNames )
 * removeClasses( node, arrClassNames )
 * disable( nodeOrSelector )
 * enable( nodeOrSelector )
 * getNode( nodeOrSelector )
 * getNodes( nodesOrSelector )
 * togglePairedDisplay( nodeOrSelectorToShow, nodeOrSelectorToHide )

### **dom / forms/**

> checkboxes-and-radios.js

 * checkAll
 * uncheckAll

 > common.js

 * getValuesFromNodes( nodes )                                  --tested
 * getTextContentsFromNodes( nodes )                            --tested

 > select.js

 * getOptions( select, onlySelected = false )                   --tested
 * getOptionsContents( selectOrOptions )                        --tested
 * getOptionsValues( selectOrOptions )                          --tested
 * getSelectedOptions( select )                                 --tested

### **dom / classes/**

 > ClassName.js

 * @add( nodeOrSelector, className )                            --tested
 * @addToGroup( nodesOrSelectors, className, position )         --tested
 * @remove( nodeOrSelector, className )                         --tested
 * @removeFromGroup( nodesOrSelectors, className, position )    --tested
 * @toggle( nodeOrSelector, className )                         --tested
 * @toggleOnGroup( nodesOrSelectors, className, position )      --tested

 > SetStatus.js

 * @activate(nodeOrSelector, className = 'active' )             --tested
 * @deactivate( nodeOrSelector, className = 'active' )          --tested
 * @disable( nodeOrSelector )                                   --tested
 * @enable( nodeOrSelector )                                    --tested
 * @hide( nodeOrSelector )                                      --tested
 * @show( nodeOrSelector )                                      --tested

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

> traces.js

 * api()                                                       -- tested
 * async()                                                     -- tested
 * colorize( data, color, bold = false )                       -- tested
 * echo()                                                      -- tested
 * err()                                                       -- tested
 * error()                                                     -- tested
 * event( message, event = 'click' )                           -- tested
 * hack()                                                      -- tested
 * log()                                                       -- tested
 * logger()                                                    -- tested
 * note( message )                                             -- tested
 * todo( message )                                             -- tested
 * warn( message )                                             -- tested
 * warning( message )                                          -- tested

> var.js

 * existObjectKey( obj, key ) // bool                          -- tested
 * stop( something = '' )
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
