/**
* jQuery pugin : Composite mouse event performer
*
* Copyright (c) 2013 akinari tsugo
*
* This script released under the MIT license.
* Please see MIT-LICENCE.txt for deteils.
*/
(function (window, document, $, undefined) {
    /**
    * Perform mouse event. Distinguish click event and double click event.
    * @param    {function}  onclickHandler      The callback function that called when the element has been clicked.
    * @param    {function}  ondblclickHandler   The callback function that called when the element has been double clicked.
    * @param    {number}    [opt_dblclicktime}  The timeout milliseconds indicating double click.
    */
    $.fn.mouse = function (onclickHandler, ondblclickHandler, opt_dblclicktime) {
        
        // Default double click time(milliseconds).
        var DEFAULT_DBLCLK_TIME = 300;
        
        // The time value indicating double click.
        var dblclicktime = opt_dblclicktime || DEFAULT_DBLCLK_TIME;
        
        // Get current time.
        var currentTime = (new Date()).getTime();
        
        // The value indicating click count.
        var clickCount = 0;
        
        // The value indicating first click date time.
        var clickTime = 0;
        
        // The event object indicating first click.
        var clickEvent = null;
        
        // The timer ID that is created when first click.
        var timerId = 0;
        
        return this.each(function (index) {
            $(this).on('mouseup', function (event) {
                // Countup click event.
                clickCount += 1;
                
                if (clickCount === 1) {
                    // Wait until timer.
                    timerId = window.setTimeout(function () {
                        // Reset flag.
                        onclickHandler(event);
                        
                        // Reset flag.
                        timerId = clickEvent = null;
                        clickCount = clickTime = 0;
                    }, dblclicktime);
                    
                    // Set flag.
                    clickTime = currentTime;
                    clickEvent = event;
                } else {
                    if (clickEvent && clickEvent.which === event.which &&
                        currentTime - clickTime < dblclicktime) {
                        // Execute dobule click event.
                        ondblclickHandler(event);
                    } else {
                        // Execute single click event immediately.
                        onclickHandler(clickEvent);
                        onclickHandler(event);
                    }
                    // Reset flag.
                    timerId && window.clearTimeout(timerId);
                    timerId = clickEvent = null;
                    clickCount = clickTime = 0;
                }
            });
        });
    };
})(window, document, jQuery);
