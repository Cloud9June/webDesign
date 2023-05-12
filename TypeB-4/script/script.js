$(function(){

  let currentIndex = 0;
  
  setInterval(function(){
      
      if(currentIndex<2) {
          currentIndex++;
      } else {
          currentIndex = 0;
      }
      
      let slidePosition = currentIndex * (-1200)+"px";
      
      $(".slideList").animate({left:slidePosition},400);
      
  },3000);
  
  
  $(".nav>ul>li").mouseover(function(){
      $(".nav>ul>li>ul, .nav .sub_back").stop().slideDown(200);
  });
  $(".nav>ul>li").mouseout(function(){
      $(".nav>ul>li>ul, .nav .sub_back").stop().slideUp(200);
  });
       
  $(".layerPopup").click(function(){
      $(".layer, .layer_bg").fadeIn();
  });
  $(".layer .close").click(function(){
      $(".layer, .layer_bg").fadeOut();
  });
});