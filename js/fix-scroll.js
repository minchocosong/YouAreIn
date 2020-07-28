window.onload = function() {
  var divs = document.querySelectorAll(".frame");

  for (var i = 0; i < divs.length; ++i) {
    var div = divs[i];
    var divAspect = div.offsetHeight / div.offsetWidth;
    div.style.overflow = "hidden";

    var img = div.querySelector("img");
    var imgAspect = img.height / img.width;

    if (imgAspect <= divAspect) {
      // 이미지가 div보다 납작한 경우 세로를 div에 맞추고 가로는 잘라낸다
      var imgWidthActual = div.offsetHeight / imgAspect;
      var imgWidthToBe = div.offsetHeight / divAspect;
      var marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 2);
      img.style.cssText =
        "width: auto; height: 100%; margin-left: " + marginLeft + "px;";
    } else {
      // 이미지가 div보다 길쭉한 경우 가로를 div에 맞추고 세로를 잘라낸다
      img.style.cssText = "width: 100%; height: auto; margin-left: 0;";
    }
  }

  var events = [
    {
      Date: new Date(2020, 7, 15),
      Title: "양재 엘타워 7층 그랜드홀",
      Link: "http://naver.me/GpaFrFcd"
    }
  ];

  var settings = {};
  var element = document.getElementById("calendar");
  calendar(element, events, settings);

  // Detect request animation frame
  var scroll =
    window.requestAnimationFrame ||
    // IE Fallback
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  var elementsToShow = document.querySelectorAll(".show-on-scroll");

  function loop() {
    Array.prototype.forEach.call(elementsToShow, function(element) {
      if (isElementInViewport(element)) {
        element.classList.add("is-visible");
      } else {
        element.classList.remove("is-visible");
      }
    });

    scroll(loop);
  }

  // Call the loop for the first time
  loop();

  function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)) ||
      (rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight))
    );
  }
};

window.addEventListener("scroll", function(e) {
  const firstImageCheckpoint = 200;
  const secondImageCheckpoint = 400;
  const thirdImageCheckpoint = 1800;

  const currentScroll = window.pageYOffset;
  console.log(currentScroll);
  if (currentScroll % 5 == 0) {
    if (currentScroll <= firstImageCheckpoint) {
      darkPercent = 0.3;
    } else if (currentScroll <= secondImageCheckpoint) {
      darkPercent = 0.7;
    } else if (currentScroll > thirdImageCheckpoint) {
      darkPercent = 0.3;
    } else {
      darkPercent = 0.7;
    }

    document.querySelector(".fade-image").style.filter =
      "brightness(" + darkPercent + ")";
  }
});
