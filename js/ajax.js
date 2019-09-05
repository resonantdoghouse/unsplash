(function() {
  // preload loader gif
  $("body").append(
    '<img id="preload" class="preload-img" src="img/loader.gif">'
  );

  // preloader gif
  const $preloadImg = $("#preload");
  const $unsplashImages = $("#unsplash-images");
  const $greyScaleInput = $("#greyscale");
  const $blurInput = $("#blur");

  $("#ajax-btn").on("click", function(event) {
    event.preventDefault();
    loadImages();
  });

  /**
   * Load images
   */
  function loadImages() {
    $unsplashImages.empty();

    $preloadImg.css({
      display: "block"
    });

    let queryString = "";

    let numImages = $("#num-images").val();
    numImages = parseInt(numImages);

    let imgIndex = $("#img-index").val();
    imgIndex = parseInt(imgIndex);

    const imgOffset = numImages + imgIndex;

    const imgWidth = $("#img-width").val();
    const imgHeight = $("#img-height").val();

    // modify query string to load grey images
    if ($greyScaleInput.prop("checked")) {
      queryString += "&grayscale";
    }

    if ($blurInput.val() > 0) {
      queryString += "&blur=" + $blurInput.val();
    }

    let url = "https://picsum.photos/" + imgWidth + "/" + imgHeight + "?image=";

    // loop and append images
    while (imgIndex < imgOffset) {
      let img = "";
      img +=
        '<a class="post-link" href="' +
        url +
        imgIndex +
        queryString +
        '" target="_blank">';
      img +=
        '<img class="post-img" src="' + url + imgIndex + queryString + '"/>';
      img += "</a>";

      $unsplashImages.append(img);
      imgIndex++;
    }

    // if img src is not found, sorry console errors :(
    $("img").on("error", function() {
      console.log("the image does not seem to exist");
      $(this)
        .parent()
        .css("display", "none");
    });

    setTimeout(function() {
      $preloadImg.css({
        display: "none"
      });
    }, 500);
  }
})();
