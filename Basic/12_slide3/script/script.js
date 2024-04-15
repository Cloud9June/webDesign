$(function(){
    $(".slideList").children("div:gt(0)").hide();
    // children은 바로 밑에 자식들 중에 검색하는 명령
    // gt는 이후를 뜻함. 즉, 여기서는 0번 이후이므로 1번, 2번 자식이 선택됨

    let current = 0;

    setInterval(function(){
        let next = (current+1)%3;

        $(".slideList").find("div").eq(current).fadeOut();
        $(".slideList").find("div").eq(next).fadeIn();

        current=next;
    },3000);
});