AOS.init({
  duration: 3000
});

// 지도
var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.482336613011505, 127.03546346273512), //지도의 중심좌표.
  level: 4 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 마커가 표시될 위치입니다
var markerPosition = new kakao.maps.LatLng(
  37.482336613011505,
  127.03546346273512
);
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
  console.log("navi");
  Kakao.Navi.start({
    name: "양재엘타워",
    x: 127.03546346273512,
    y: 37.482336613011505,
    coordType: "wgs84"
  });
}
