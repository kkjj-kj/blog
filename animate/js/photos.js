$(function(){
    $(".pro4 ul li").click(function(){
        $(this).animate({width:750},500);
        $(this).siblings().animate({width:141},500);
    })
})