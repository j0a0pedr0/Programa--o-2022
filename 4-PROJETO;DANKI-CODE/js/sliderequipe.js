$(function(){

    var amt = $('.sobre-autor').length;
    var curIndex = 0;
    var delay = 7000;
    
    

   
    initSlider();
   // autoPlay();
    cliqueSlider();
    

    function initSlider(){

        for(var i = 0; i < amt; i++){
            if(i == 0){
                $('.slider-bullets').append('<span style="background-color:rgb(100,100,100);"></span>');
            }else{
                $('.slider-bullets').append('<span></span>');
            }
        }

        setInterval(function(){
            alternarSlider();
        },delay);
    };


    function cliqueSlider(){
        $('.slider-bullets span').click(function(){
            $('.sobre-autor').eq(curIndex).stop().fadeOut(500);
            curIndex = $(this).index();
            $('.sobre-autor').eq(curIndex).stop().fadeIn(2000);
            $('.slider-bullets span').css('background-color','#ccc');
            $(this).css('background-color','black');
            $(this).css('transition','2s');   
        });
    }

    function alternarSlider(){
        $('.sobre-autor').eq(curIndex).stop().fadeOut(500);
        curIndex+=1;
        if(curIndex == amt){
            curIndex = 0;
        }
        $('.slider-bullets span').css('background-color','#ccc');
        $('.slider-bullets span').eq(curIndex).css('background-color','rgb(100,100,100)');
        $('.slider-bullets span').css('transition','2s'); 
        $('.sobre-autor').eq(curIndex).stop().fadeIn(1500);
    }


/*
    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt){
                curIndex = 0;
                goToSlider(curIndex);
            }
        },delay);
    }




    function goToSlider(curIndex){
        var offTrap = $('.scroll-wraper').offset().left
        console.log(offTrap)
        var offSetX =($('.sobre-autor').eq(curIndex).offset().left * 3) - ($('.scroll-wraper').offset().left);
        console.log(offSetX)

        $('.scrollEquipe').animate({'scrollLeft':offSetX+'%'},9000,'linear');
        
    }    
* */


});