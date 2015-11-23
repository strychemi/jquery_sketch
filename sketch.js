$(document).ready(function() {
    initialize_board(16);

    $('.square').hover(function() {
        $(this).css("background-color", "grey");
    });

    document.getElementById("btn-1").onclick = function() {
        reset_resolution()
    };
});

function initialize_board() {
    for (var n = 0; n < 16; n++) {
        $('.container').append("<div class=square></div>");
    }
    $(".square").height("200px");
    $(".square").width("200px");
}

function reset_resolution() {
    var squares = prompt("How many squares per side do you want for the grid?");

    $(".container").empty();

    var square_length = (800/squares);
    for (var n = 0; n < squares * squares; n++) {
        $('.container').append("<div class=square></div>");
    }
    $(".square").height(square_length);
    $(".square").width(square_length);

    $(".square").hover(function() {
        $(this).css("background-color", "grey");
    });
}
