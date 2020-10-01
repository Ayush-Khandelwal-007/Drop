
$(document).ready(function () {
    $('body').click(function (e) {
        $("#wave")
            .css({
                position: 'absolute',
                left: e.pageX-($("#wave").width()/2),
                top: e.pageY-($("#wave").height()/2),
                display: 'block'
            }).delay(1850).fadeOut(); 	// Explode effect using jQuery.
    });
});
console.log("yes");