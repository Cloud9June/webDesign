$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav>ul>li").mouseleave(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });
});