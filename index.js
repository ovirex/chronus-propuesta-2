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

    const sectionElement = document.getElementById("section-1");

    /* The "sectionElement.offsetHeight" is plus 500 because that is the marginBottom of the "section" tag. */
    const sectionHeight = sectionElement.offsetHeight + 500;

    if (window.pageYOffset >= sectionHeight) {
        headerFix.classList.add("header-fixed-position");
    } else {
        headerFix.classList.remove("header-fixed-position");
    }
});
