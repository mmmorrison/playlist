$(document).ready(function() {
  // $("#submitBtn").click(function() {
  comet = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    data: {
      foo: "bar"
    }
  })

  comet.done(function(payload) {
    console.log(payload);

    var max = 2;
    var min = 0;
    var randy = Math.floor(Math.random() * (max - min + 1)) + min;
    var randImage = payload["results"][randy]["cover_art"];

    $(".frontImg0").append("<img src='images/" + randImage + "'/>");
    $(".frontImg1").append("<img src='images/" + randImage + "'/>");
    $(".frontImg2").append("<img src='images/" + randImage + "'/>");
    $('.scroller').append("<img src='images/" + randImage + "'/>");

    $("#clearBtn").click(function() {
      $('.scroller').empty();

    })
  })
})
