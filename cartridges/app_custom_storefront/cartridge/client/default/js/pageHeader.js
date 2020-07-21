'use strict';

$(document).ready(function() {
    var show = false;
    $(".sidebar-header").click(function() {
        // if ($('#sidebar').hasClass('notShow')) {
        //     $('#sidebar').removeClass("notShow");
        //     $('#sidebar').show(5000);
        // } else {
        //     $('#sidebar').addClass("notShow");
        // $("#sidebar").hide(1000);
        // }
        if (show) {
            $('#sidebar').show(500);
        } else {
            $('#sidebar').hide(500);
        }
        show = !show;
    });
})