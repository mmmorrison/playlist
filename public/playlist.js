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
    //***********************ADDS ALBUMS TO PLAYLIST PAGE********************************

    payload["results"].forEach(function(e, i) {
      var album = payload["results"][i]["cover_art"];
      var newId = "song" + i;
      var addImage = '<img src="images/' + album + '"/>';
      var albumTitle = payload["results"][i]["title"];


      $(".scroller").append('<div id=' + newId + ' class="addName"' + '>' + addImage + '</div>');

      $(document).on("click", ".addName", function(e, i) {

        $("#storeNames").append(albumTitle + "<br>");

        // e.preventDefault();


        // ****************************IMAGES ON THE SPLASH PAGE*************************
        var randy = Math.floor(Math.random() * 3);
        var randImage = payload["results"][randy]["cover_art"];

        $(".frontImg0").append("<img src='images/" + randImage + "'/>");
        $(".frontImg1").append("<img src='images/" + randImage + "'/>");
        $(".frontImg2").append("<img src='images/" + randImage + "'/>");

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
