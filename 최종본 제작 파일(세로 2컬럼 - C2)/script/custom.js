/* Navigation */
$('.menu li').mouseenter(function(){
    $(this).children('.sub-menu').stop().slideDown()
})
$('.menu li').mouseleave(function(){
    $(this).children('.sub-menu').stop().slideUp()
})

/* Modal */
$('.open-modal').click(function(){
    $('.modal').fadeIn()
})
$('.close-modal').click(function(){
    $('.modal').fadeOut()
})