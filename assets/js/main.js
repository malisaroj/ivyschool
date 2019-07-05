jQuery(document).ready(function ($) {
    $(".logo-menu-icon").click(function () {
        if ($(".main-menu").css("display") === "block") {
            $(".main-menu").css("display", "none");
        } else {
            $(".main-menu").css("display", "block");
        }
    });
});