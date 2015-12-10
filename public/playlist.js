// *************************AJAX CALL GET REQUEST**************************
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
    //   comet = $.ajax({
    //   url: "https://lit-fortress-6467.herokuapp.com/post",
    //     method: "POST",
    //     data: {
    //       foo: "bar"
    //     }
    // })
    // comet.done(function(payload) {
    //     console.log(payload + " post");
    //   })



    // ***********************LOOPS OVER JSON*******************************
    payload["results"].forEach(function(e, i) {
      // *************************VARIABLES*******************************
      var album = payload["results"][i]["cover_art"];
      var newId = "song" + i;
      var addImage = '<img src="images/' + album + '"/>';
      var albumTitle = payload["results"][i]["title"];
      var artist = payload["results"][i]["artist"];
      var randy = Math.floor(Math.random() * 3);
      var randy1 = Math.floor(Math.random() * 4);
      var randy2 = Math.floor(Math.random() * 5);
      var randImage = payload["results"][randy]["cover_art"];
      var randImage1 = payload["results"][randy1]["cover_art"];
      var randImage2 = payload["results"][randy2]["cover_art"];
      // **********************ADDS IMAGES ON THE SPLASH PAGE*************************
      $(".frontImg0").append("<img src='images/" + randImage + "'/>");
      $(".frontImg1").append("<img src='images/" + randImage1 + "'/>");
      $(".frontImg2").append("<img src='images/" + randImage2 + "'/>");
      $(".frontImg0 img").not('img:first').remove();
      $(".frontImg1 img").not('img:first').remove();
      $(".frontImg2 img").not('img:first').remove();

      //***********************ADDS IMAGES TO PLAYLIST PAGE****************************
      $(".scroller").append('<div id=' + newId + ' class="addName"' + '>' + addImage + '</div>');
      // *********************ADD ALBUM TITLE TO PLAYLIST DIV*****************************
      $("#" + newId).on("click", function() {
        $("#storeNames").append(artist + ": " + albumTitle + "<br>");
      })
    })
  })
});



$("#submitBtn").click(function() {

});
$("#clearBtn").click(function() {
  $('.playBin').empty();
});
