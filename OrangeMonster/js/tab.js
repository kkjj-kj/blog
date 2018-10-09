/*选项卡*/
$(function(){
    $(".box-focus-ul li").click(function(){
        var $t = $(this);
        var $x = $t.index();
        $t.addClass("box-focus-ul-li").siblings().removeClass("box-focus-ul-li");
        $(".pic-ul li").hide().eq($x).fadeIn(1000);
    });
    setInterval(function(){
        var $bot = $(".box-focus-ul li");
        var $bot_length = $bot.length;
        var $bot_current = $(".box-focus-ul-li");
        var $bot_current_index = $bot.index($bot_current);
        if($bot_current_index+1 == $bot_length){
            $bot.eq(0).click();
        }else{
            $bot_current.next().click();
        }
    },3000);
    
})
    
//search
$(function(){
    $(".search-icon02").click(function(){
        $(".search-icon02").css("opacity","0");
    })
})