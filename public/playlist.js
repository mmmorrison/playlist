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
    // *********************POST REQUEST****************************
    // comet = $.ajax({
    //   url: "https://lit-fortress-6467.herokuapp.com/post",
    //   method: "POST",
    //   data: {
    //     foo: "bar"
    //   }
    // })
    // comet.done(function(payload) {
    //     console.log(payload + " post");
    //   })
    // ***********************DOM MANIPULATIONS********************************
    $(document).ready(function() {
      payload["results"].forEach(function(e, i) {
        var coverArt = payload["results"][i]["cover_art"];
        var newId = "song" + i;

        $(".scroller").append('<img src="images/' + coverArt + '"/>');
      })
    })

    var max = 2;
    var min = 0;
    var randy = Math.floor(Math.random() * (max - min + 1)) + min;
    var randImage = payload["results"][randy]["cover_art"];

    $(".frontImg0").append("<img src='images/" + randImage + "'/>");
    $(".frontImg1").append("<img src='images/" + randImage + "'/>");
    $(".frontImg2").append("<img src='images/" + randImage + "'/>");





    $("#submitBtn").click(function() {

      $("#clearBtn").click(function() {
        $('.scroller').empty();

      })
    })
  })
});
