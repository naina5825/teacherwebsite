$(function(){
     function loop(){
         $("#show img")
         .animate({opacity:0},2000)
         .animate({opacity:10},20000,loop)
     }
     loop();
})


$(function(){
        function loop(){
            $(".about-part h1")
            .animate({fontSize:0},1000)
            .animate({fontSize:45},3000)

            .animate({marginLeft:80},1000)
            .animate({marginLeft:0},2000,loop)
        }
        loop();
})
 
