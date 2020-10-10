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
