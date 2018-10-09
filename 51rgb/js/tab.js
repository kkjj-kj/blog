/*搜索框*/
$(function(){
    $(".top-input>input").focus(function(){
       $(".input-text,.input-search").addClass ("input-border");
    })
    .blur(function(){
        $(".input-text,.input-search").removeClass ("input-border");
    });
     $(".input-text").dblclick(function(){
         $(".input-con").show();
     })
     .blur(function(){
        $(".input-con").hide();
    });
});

/*选项卡*/
$(function(){
    $(".box5 li").click(function(){
        var $t = $(this);
        var $x = $t.index();
        $t.addClass("box-current1").siblings().removeClass("box-current1");
        $(".con-img li").hide().eq($x).fadeIn(1000);
    });
});
    
$(function(){
        $(".box5 li").mouseover(function(){
        var $t = $(this);
        $t.addClass("box-current2").siblings().removeClass("box-current2");
        $(".box5 li").mouseout(function(){
            $(this).removeClass("box-current2");
        });
    });
});



$(function(){ 
//   seTimeout每隔几秒
    setInterval(function(){
        var $bot = $(".box5 li");
        var $bot_length = $bot.length;
        var $bot_current = $(".box5 li.box-current1");
        var $bot_current_index = $bot.index($bot_current);
        if($bot_current_index+1==$bot_length){
            $bot.eq(0).click();
        }else{
            $(".box5 li.box-current1").next().click();
        }
    },2000);
});

//  flash
//$(function(){
//    $(".aul li").click(function(){
//        var $t=$(this);
//        $t.addClass("xxx");
//        setTimeout(function(){$t.removeClass("xxx")},2000)
//    })
//})
$(function(){
    $(".aul li").click(function(){
        var $t = $(this); 
        var $x = $t.index();
        $(".aul li").eq($x).addClass("xxx");
        setTimeout(function(){$(".aul li").eq($x).removeClass("xxx")},2000)
    })
})

$(function(){
    $(".login").click(function(){
        $(".sign-in").show();
        
    })
   $(".sign-close").click(function(){
        $(".sign-in").hide();
    })
   
})











