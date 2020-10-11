/* Using jQuery */
(function ($) {
    // Init ScrollMagic
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onLeave",
        },
    });

    // Create scene
    $("section").each(function () {
        new ScrollMagic.Scene({
            triggerElement: this,
        })
            .setPin(this)
            .addTo(ctrl);
    });
})(jQuery);

window.addEventListener("scroll", function () {
    const headerFix = document.getElementsByClassName("header-2")[0];
    if (window.pageYOffset >= window.innerHeight) {
        headerFix.style.position = "fixed";
        headerFix.style.top = "50px";
    } else {
        headerFix.style.position = "";
        headerFix.style.top = "";
    }
});
