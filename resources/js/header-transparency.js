$(function() {
    if($("#section0").hasClass('active')) {
        $("header").css({
            "background": "rgba(255,255,255,0)"
        });
    }
    if($("body").hasClass('fp-viewing-1') || $("body").hasClass('fp-viewing-2') || $("body").hasClass('fp-viewing-3')) {
        $("header").css({
            "background": ""
        });
    }
});