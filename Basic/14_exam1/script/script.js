$(function(){
    // menu
    $(".nav>ul>li").mouseover(function(){
        $(".submenu").stop().slideDown(200);
    });
    $(".nav>ul>li").mouseleave(function(){
        $(".submenu").stop().slideUp(200);
    });



});