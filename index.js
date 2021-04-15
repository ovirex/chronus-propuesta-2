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

/**
 * Make the header fixed when user sroll to its position
 */
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

/**
 * Make the responsive menu open/close when the "open-closed-menu-btn" is clicked
 */
const menuBtn = document.getElementsByClassName("open-closed-menu-btn")[0];
const hamburguerMenu = document.getElementById("hamburguer-menu");
const principalHeader = document.getElementById("principal-header");
menuBtn.addEventListener("click", function () {
    if (principalHeader.className == "open-menu") {
        principalHeader.classList.remove("open-menu");
        document.body.style.overflowY = "visible";
        hamburguerMenu.classList.remove("open");
    } else {
        principalHeader.classList.add("open-menu");
        document.body.style.overflowY = "hidden";
        hamburguerMenu.classList.add("open");
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth >= 770) {
        principalHeader.classList.remove("open-menu");
        document.body.style.overflowY = "visible";
        hamburguerMenu.classList.remove("open");
    }
});
