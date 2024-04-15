$(function(){
    
    start()
    let images = 2;
    let current = 0;
    function start() {
        $(".slideList>div").eq(0).siblings().css("left", "-1200px");
        setInterval(function(){slide1();},3000);
    }
    function slide1() {
        current = current==images?0:current+=1;

        $(".slideList>div").eq(current-1).animate({left:"-1200px"},1000);
        $(".slideList>div").eq(current).delay(1000).animate({left:"0px"},1000);
    }
});