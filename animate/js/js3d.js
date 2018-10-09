window.onload=function(){
var box = document.getElementById('box1');
var degX = 0;
var degY = 0;
document.getElementById('left') .onclick = function(){
    degY -= 45;
    box.style.cssText = "transform: rotateY("-degY-"deg)";
}
document.getElementById('right') .onclick = function(){
    degY += 45;
    box.style.cssText = "transform: rotateY("+degY+"deg)";
}
document.getElementById('up') .onclick = function(){
    degX += 45;
    box.style.cssText = "transform: rotateX("+degX+"deg)";
}
document.getElementById('bottom') .onclick = function(){
    degX -= 45;
    box.style.cssText = "transform: rotateX("+degX+"deg)";
}
    
}