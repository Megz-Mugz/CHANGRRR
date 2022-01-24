
$(document).keypress(function(event) {
  if (event.key === "Enter") {
    // change background
    var userBackground = $("#bg-input").val();
    $(".main-section").css("background-color", userBackground);
    $("#bg-input").val('');

    // change Text
    var userText = $("#text-input").val();
    $(".main-text").text(userText)
    $("#text-input").val('');
  }
})

$(document).mousemove(function(event) {
  $(".first-val").text(event.screenX)
});

$(document).mousemove(function(event) {
  $(".second-val").text(event.screenY)
});

$("#bg-button").click(function() {
  var userBackground = $("#bg-input").val();
  $(".main-section").css("background-color", userBackground);
  $("#bg-input").val('');
})

$("#txt-button").click(function() {
  var userText = $("#text-input").val();
  $(".main-text").text(userText)
  $("#text-input").val('');
})
