$(document).ready(function() {
    initialize_board();

  
});

function initialize_board() {
    for (var n = 0; n < 16; n++) {
        $('.container').append("<div class=square></div>");
    }
    $(".square").height("200px");
    $(".square").width("200px");
}
