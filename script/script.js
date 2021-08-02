$(function(){
    // 검색창 포커스 되면 placeholder 없애고
    // focusout 되면 placeholder 생성
    $("input[name=search").focus(function(){
            $("input[name=search]").removeAttr("placeholder");
    });
    $("input[name=search").focusout(function(){
        $("input[name=search]").attr("placeholder", "타일 그 이상, 타일닷컴");
});
    // 즐겨찾기 깜박거림
    setInterval(blink,1000);
    function blink(){
    $("#favoritesPlus").fadeOut(500);
    $("#favoritesPlus").fadeIn(500);
    }
});
