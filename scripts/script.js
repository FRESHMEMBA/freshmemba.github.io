// Welcome message
alert("Portfolio Loaded");

$(".project-card").hover(
    function () {
        $(this).css("background-color", "#fff5f5");
    },
    function () {
        $(this).css("background-color", "white");
    }
);

$("form").submit(function (event) {

    event.preventDefault();

    $("#message").text(
        "Thank you! Your message has been received."
    );
});

$(".project-card").click(function () {

    $(this)
        .fadeOut(200)
        .fadeIn(200);
});

$(".project-card").click(function() {

    let link = $(this).data("link");

    window.open(link, "_blank");

});