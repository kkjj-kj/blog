$(function(){
    $(".icon-list li").click(function(){
        var $t = $(this);
        var $x_index = $t.index();
         $t.addClass("cir-click").siblings().removeClass("cir-click");
         $(".pro2 li").eq($x_index).find(".card").addClass("card-JQ");
         $(".pro2 li").eq($x_index).find(".card-bc").addClass("card-BJQ");
        
    })
});


