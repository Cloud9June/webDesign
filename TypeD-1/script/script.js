$(function(){
  
  let currentIndex = 0;
  
  setInterval(function(){
      
      if(currentIndex<2) {
          currentIndex++;
      } else {
          currentIndex = 0;
      }
      
      let slidePosition = currentIndex * (-400)+"px";
      
      $(".slideList").animate({top:slidePosition},400);
      
  },3000);

  $(".nav>ul>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(200);
  });
  $(".nav>ul>li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200);
  });

  $(".layerPopup").click(function(){
    $(".layer, .layer_bg").fadeIn();
  });
  $(".layer .close").click(function(){
    $(".layer, .layer_bg").fadeOut();
  });

  let tabBtn = $(".tabBtn>a");
  let tabCont = $(".tabCont>div");
    
  tabCont.hide().eq(0).show();
    
  tabBtn.click(function(e){
      e.preventDefault();

      let target = $(this);
      let index = target.index();

      tabBtn.removeClass("active");
      target.addClass("active");
      tabCont.css("display","none");
      tabCont.eq(index).css("display","block");
  });
});  
  
  