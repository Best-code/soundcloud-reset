// ==UserScript==
// @name         sc_unrepost
// @namespace    https://github.com/Best-code
// @author       Teun M.
// @version      1.1
// @match        https://soundcloud.com/*/reposts
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

/* Number of deletions. N = -1 will delete everything. */
var N = -1;
/* Time interval in milliseconds between each delete. */
var interval = 50;

var $ = window.jQuery;
$(window).on("load", function() {
    console.log("Running userscript.");
    performAction();
});

function performAction() {
    var button = $("button[title='Unpost / Edit Repost']").first();

    if(null != button) {
        if(N-- != 0) {
            button.click();
            var delButton = $("button[class='sc-button sc-button-nostyle sc-button-medium repostOverlay__formButton repostOverlay__formButtonDelete']").first();
            if(null != delButton) {
                delButton.click();
            }

        } else {
            return;
        }
    }

    setTimeout(performAction, interval);
};
