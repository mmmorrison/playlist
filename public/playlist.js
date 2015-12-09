$(document).ready(function() {
  comet = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    data: {
      foo: "bar"
    }
  })

  comet.done(function(payload) {
    console.log(payload);

  $("#submitBtn").click(function() {
    var max = 2;
    var min = 0;
    var randy = Math.floor(Math.random() * (max - min + 1)) + min;
    var randImage = payload["results"][randy]["cover_art"];
    $('#storeCovers').append("<img src='" + randImage + "'/>");
    //
    // $("#clearBtn").click(function() {
    //   $('#storeCovers').remove();

    })
  })
})
// });
