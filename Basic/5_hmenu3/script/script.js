$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(".nav>ul>li>ul").show();
    });
    $(".nav>ul>li").mouseleave(function(){
        $(".nav>ul>li>ul").hide();
    });
});