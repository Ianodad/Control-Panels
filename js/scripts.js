// Business logic
// js animation business logic
// animation for Hover
var animationHover = function (element, animation) {
    element = $(element);
    element.hover(
        function () {
            element.addClass('animated ' + animation);
        },
        function () {
            //wait for animation to finish before removing classes
            window.setTimeout(function () {
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}
// animaton for on click
function animationClick(element, animation) {
    element = $(element);
    element.click(
        function () {
            element.addClass('animated ' + animation);
            //wait for animation to finish before removing classes
            window.setTimeout(function () {
                element.removeClass('animated ' + animation);
            }, 2000);

        });
}

// user Logic
$(document).ready(function () {
    $("#lights-header").on("click", function () {
        $(".lights-control").toggle();
    });
    $("#locks-header").on("click", function () {
        $(".locks-control").toggle();

    });

    //Animation for hover page
    animationHover(".heading", "tada");
    //Animation for on click
    animationClick(".btn-primary", "hinge");
});