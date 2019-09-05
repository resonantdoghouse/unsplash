// preload loader gif
$("body").append(
  '<img id="preload" style="display:none;" src="img/loader.gif">'
);

$("#ajax-btn").on("click", function(event) {
  event.preventDefault();
  loadImages();
});

/**
 * Load images
 */
function loadImages() {
  $("#ajax-content").empty();

  var numImages = $("#num-images").val();
  numImages = parseInt(numImages);
  var imgIndex = $("#img-index").val();
  imgIndex = parseInt(imgIndex);
  var imgOffset = numImages + imgIndex;

  var imgWidth = $("#img-width").val();
  var imgHeight = $("#img-height").val();

  $("#ajax-content").append('<img class="preloader" src="img/loader.gif">');

  var url = "https://picsum.photos/" + imgWidth + "/" + imgHeight + "?image=";

  // loop and append images
  while (imgIndex < imgOffset) {
    var img = "";
    img +=
      '<a class="post-link" href="' + url + imgIndex + '" target="_blank">';
    img += '<img class="post-img" src="' + url + imgIndex + '"/>';
    img += "</a>";

    $("#ajax-content").append(img);
    imgIndex++;
  }

  // if img src is not found, sorry console errors :(
  $("img").on("error", function() {
    $(this).css("display", "none");
  });

  // remove loader gif
  $(".preloader").remove();
}
