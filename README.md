jquery.compositemouseevent
==========================

A jQuery plugin. Perform mouse event distinguished between "click" event and "double click" event.  
This plugin is useful in the case that you want to set another feature to "click" and "double click".  

Usage
--------------------------

This will be monitored by using the "mouse" function for jQuery object, like following:  

Example:  

    $('#elm').mouse(function (event) {
        // This function is called when the "click" event has been performed.
        // This function is not called when the "double click" event has been performed.
        window.alert('#elm has been clicked.');
    }, function (event) {
        // This function is called when the "double click" event has been performed.
        window.alert('#elm has been double clicked.');
    });

API documentation
--------------------------

The feature of the method named "mouse" is following:  

    .mouse(clickCallback, dblclickCallback)

**clickCallback**  
Type : function  
A function that is called when the DOM element has been clicked.  

**dblclickCallback**  
Type : function  
A function that is called when the DOM element has been double clicked.  




--------------------------
Released under the MIT license.