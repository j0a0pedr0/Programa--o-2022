$(function(){

    var $ = jQuery.noConflict()

//plugin social media.
    $('#social-share').jsSocials({
        shares: ["email", "twitter", "facebook", "googleplus", 
        "linkedin", "pinterest", "stumbleupon", "whatsapp"]
    })


    //plugin mask.

    $('input[name=telefone]').mask('(99)99999-9999');
    $('input[name=telefone]').css('width','110px');
    $('input[name=telefone]').css('border-radius','10px');
    $('input[name=data]').css('width','75px')
    $('inout[name=data]').css('outline','0')
    $('input[name=data]').mask('99/99/9999');


    $('a').fancybox();
    





});