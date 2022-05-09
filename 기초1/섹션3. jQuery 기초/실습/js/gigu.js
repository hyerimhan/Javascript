$(document).ready(function() {
    // 지구 이미지 웹요소(노드) 칮이사 저장
    var $gigu = $("#gigu");
    
    // 버튼 이벤트 등록(5초만에 left값을 480px으로 설정하는 것이 곧 마치 움직이는 애니메이션 형태가 된다.)
    // 버튼을 클릭하면 콜백함수가 실행된다.
    ("#btnStart").click(function() {
        $gigu.animate({
            left : "470px"
        },5000);
    })
});