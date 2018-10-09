$(function(){
    var $XYZ = $(".XYZ");
    var $xyz = $(".xyz");
    $XYZ.click(function(){
        var deg = 360;  //旋转度数
        var blok = true;  //判断是否在动画，或者时间内
        if(blok){
        //锁住判断
            blok = false;
            degx += 45;
            degy += 45;
            s = 'rotate('+ degY +'deg)';
            x = 'rotate('+ degY +'deg)';
            $xyz.css(s).css(x);
            //如果出现点击图片旋转越来越快可以使用  
            setTimeout(function(){
                blok = true;
            },500)
        }
    })
})