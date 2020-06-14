$(function() {
    $(".log-button").on("click", function() {
        $(".reg").removeClass("show").addClass("hidden").next().addClass("show").removeClass("hidden");
    });

    $(".reg-button").on("click", function() {
        $(".log").removeClass("show").addClass("hidden").prev().addClass("show").removeClass("hidden");
    })
});