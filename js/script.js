$(function(){
     function loop(){
         $("#show img")
         .animate({opacity:0},2000)
         .animate({opacity:10},20000,loop)
     }
     loop();
})



