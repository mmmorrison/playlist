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
        var randy = Math.floor(Math.random() * 3);
        var randImage = payload["results"][randy]["cover_art"];
        // **********************ADDS IMAGES ON THE SPLASH PAGE*************************
        $(".frontImg0").append("<img src='images/" + randImage + "'/>");
        $(".frontImg1").append("<img src='images/" + randImage + "'/>");
        $(".frontImg2").append("<img src='images/" + randImage + "'/>");
        //***********************ADDS IMAGES TO PLAYLIST PAGE****************************
        $(".scroller").append('<div id=' + newId + ' class="addName"' + '>' + addImage + '</div>');
        // *********************ADD ALBUM TITLE TO PLAYLIST DIV*****************************
        $("#" + newId).on("click", function() {
          $("#storeNames").append(albumTitle + "<br>");
})


})
  })
})







//
// $("#submitBtn").click(function() {
//
//   $("#clearBtn").click(function() {
//     $('.scroller').empty();
//   })
//
