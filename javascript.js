
$(document).ready(function () {
    $('body').click(function (e) {
        $("#wave")
            .css({
                position: 'absolute',
                left: e.pageX-50,
                top: e.pageY-50,
                display: 'block'
            }).delay(1850).fadeOut(); 	// Explode effect using jQuery.
    });
});
console.log("yes");