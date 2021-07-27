AOS.init({
  duration: 3000
});

// 지도
var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 마커가 표시될 위치입니다
var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

kakao.maps.event.addListener(marker, "click", function() {
  // 네비게이션으로 이동됩니다
  navi();
});

function navi() {
  Kakao.Navi.start({
    name: "양재엘타워",
    x: 127.11205203011632,
    y: 37.39279717586919,
    coordType: "wgs84"
  });
}

// 사진

var pswpElement = document.querySelectorAll(".pswp")[0];

// build items array
var items = [
  {
    src: "../images/couple.jpeg",
    w: 600,
    h: 400
  },
  {
    src: "../images/wedding.jpeg",
    w: 1200,
    h: 900
  }
];

// define options (if needed)
var options = {
  // optionName: 'option value'
  // for example:
  index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();