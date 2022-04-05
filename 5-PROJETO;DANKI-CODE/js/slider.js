$(function(){
 
    $('.mosaico .container-mosaico .mosaico-wraper').slick({
        centerMode: true,
        slidesToShow:6,
        speed:700,
        autoplay:true,
        autoplaySpeed:3000,
        slidesPerRow:1,
        touchThreshold:10,
        arrows:false,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:3
                }
            },
            {
                breakpoint:580,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:2
                }
            },
            {
                breakpoint:380,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:1
                }
            }
        ]
    });
        




    $('.tratamentos .tratamento-container-full').slick({
        centerMode:false,
        slidesToShow:3,
        arrows:false,
        infinity:false,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    dots:true,
                    infinite:false,
                    centerMode:false,
                    slidesToShow:2
                }
            },
            {
                breakpoint:680,
                settings:{
                    arrows:false,
                    dots:true,
                    infinite:false,
                    centerMode:false,
                    slidesToShow:1
                }
            }
        ]
        
    });


    $('.depoimentos .container-depoimentos').slick({
        centerMode:false,
        slidesToShow:1,
        arrows:false,
        infinite:false,
        dots:true
    });

});