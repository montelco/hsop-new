$(document).ready(function(){
    if ($(window).width() < 768) {
        $(".dt-only").remove();
    }

    $(document).scroll(function() {
        if ($("body").hasClass("fp-viewing-Home") === false) {
            $("#pill").addClass('hidden');
        } else if ($("body").hasClass("fp-viewing-Home")) {
            $("#pill").removeClass('hidden');
        }
    });
});