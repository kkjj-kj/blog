//slect 
$(function(){
    $(".select").click(function(){
        $(".select-Company").show();
        $(".select-img").attr('src','images/up.png')
    });
    $("body").click(function(e){
        if($(e.target).closest(".select").length==0){
            $(".select-Company").hide();
            $(".select-img").attr('src','images/down.png');
        }
    });
    $(".select>span").mouseover(function(){
         $(".select>span").addClass("select-bg");
    })
    $(".select-Company>span").mouseover(function(){
         $(".select-Company>span").addClass("select-bg");
    })
    $("body").mouseover(function(e){
        if($(e.target).closest(".select>span").length==0){
            $(".select>span").removeClass("select-bg");
        }
    })
    $("body").mouseover(function(e){
        if($(e.target).closest(".select-Company>span").length==0){
            $(".select-Company>span").removeClass("select-bg");
        }
    })
//    $(".select-Company").click(function(){
//        
//    })
});
//con-left
$(function(){
    $(".con-left-list>li").mouseover(function(){
        var $t = $(this);
        var $t_index = $t.index();
        var $big = $(".con-big-list");
        var $big_li = $(".con-big-list>li");
        $big.show();
        $big_li.hide().eq($t_index).fadeIn(200)
    })
    $("body").mouseover(function(e){
        if($(e.target).closest(".con-left-list>li,.con-big-list").length==0){
            $(".con-big-list").hide();
        }
    })
    $('.con-list-last').mouseover(function(){
        $(".con-big-list").hide();
    })
})
//pic
$(function(){
    $(".con-pic-current>ul>li").click(function(){
        var $t = $(this);
        var $t_index = $t.index();
        $t.addClass("con-pic-current-a").siblings().removeClass("con-pic-current-a");
        $(".con-pic>ul>li").hide().eq($t_index).fadeIn(500);
    })
    setInterval(function(){
        var $bot = $(".con-pic-current>ul>li");
        var $bot_length = $bot.length;
        var $bot_current = $(".con-pic-current-a");
        var $bot_current_index = $bot.index($bot_current);
        if($bot_current_index+1 == $bot_length){
            $bot.eq(0).click();
        }else{
            $bot_current.next().click();
        }
    },3000)
})
$(function(){
    $(".con-bottom-left-pic-current>ul>li").click(function(){
        var $t = $(this);
        var $t_index = $t.index();
        $t.addClass("con-bottom-left-pic-current1").siblings()
            .removeClass("con-bottom-left-pic-current1");
        $(".con-bottom-left>ul>li").hide().eq($t_index).show();
    })
    
    
    setInterval(function pic(){
        var $bot = $(".con-bottom-left-pic-current>ul>li");
        var $bot_length = $bot.length;
        var $bot_current = $(".con-bottom-left-pic-current1");
        var $bot_current_index =$bot.index($bot_current);
        if($bot_current_index+1 == $bot_length){
            $bot.eq(0).click();
        }else{
            $(".con-bottom-left-pic-current1").next().click();
        }
    },3000);
 })   
    


//````````````````````

$(".fhNav").hover(function() {}, function() {
    $(".bottomLine").css("width", parseFloat($(".selectedNav").eq(0).width() + 20) + "px");
    $(".bottomLine").css("left", parseFloat($(".selectedNav").eq(0)[0].offsetLeft) + "px");
})
$(".nav li").hover(function() {
    $(".bottomLine").css("width", parseFloat($(this).width() + 20) + "px");
    $(".bottomLine").css("left", parseFloat($(this)[0].offsetLeft) + "px");
});
$(".nav li").on("click", function() {
    $(".nav li").removeClass("selectedNav");
    $(this).addClass("selectedNav");
    $(".bottomLine").css("width", parseFloat($(this).width() + 20) + "px");
    $(".bottomLine").css("left", parseFloat($(this)[0].offsetLeft) + "px");
})


$(".fhNav").hover(function() {}, function() {
    $(".bottomLine").css("width", parseFloat($(".selectedNav").eq(0).width() + 20) + "px");
    $(".bottomLine").css("left", parseFloat($(".selectedNav").eq(0)[0].offsetLeft) + "px");
})
$(".nav li").hover(function() {
    $(".bottomLine").css("width", parseFloat($(this).width() + 20) + "px");
    $(".bottomLine").css("left", parseFloat($(this)[0].offsetLeft) + "px");
});
$(".nav li").on("click", function() {
    $(".nav li").removeClass("selectedNav");
    $(this).addClass("selectedNav");
    $(".bottomLine").css("width", parseFloat($(this).width() + 20) + "px");
    $(".bottomLine").css("left", parseFloat($(this)[0].offsetLeft) + "px");
})

$(function(){
    $(".email").focus(function(){
        $(".con-right-input-p1,.con-right-input-p2").show();
//        var $t = $(this).val;
//        $t(if val.length > 0)
    })
})


