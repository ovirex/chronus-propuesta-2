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

    const elementViewHeight = calculateViewHeight("section");

    const calcWindowHeight = (elementViewHeight * window.innerHeight) / 100;

    if (window.pageYOffset >= calcWindowHeight) {
        headerFix.style.position = "fixed";
        headerFix.style.top = "-28px";
    } else {
        headerFix.style.position = "";
        headerFix.style.top = "";
    }
});

/** Calculate section element's view height*/
function calculateViewHeight(cssSelector) {
    const sectionHeight = document.querySelector(cssSelector).offsetHeight;
    const sectionViewHeight =
        sectionHeight * (100 / document.documentElement.clientHeight);
    return sectionViewHeight;
}
