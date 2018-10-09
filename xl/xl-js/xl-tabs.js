$(function(){
    $(".tab-list>li").click(function(){
        var t = $(this);
        var t_index = t.index();
        $(t).addClass("cur").siblings().removeClass("cur");
        $(".banner-list>li").eq(t_index).animate({"opacity": "1"}, 500).siblings().animate({"opacity": "0"}, 200);
    })
    
})

