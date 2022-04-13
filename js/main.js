$(function(){
    'use strict';
    $(window).scroll(function(){
        var navbar =$(".nav,navbar-nav");
        if($(window).scrollTop()>=navbar.height()){

            if(navbar.hasClass("scrolled")){ 
                
            }else{
                navbar.addClass("scrolled");
            }
        }else
        navbar.removeClass("scrolled");
      
    });
    // deal with tabs
    $(".tab-switch li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".tabs-section .tabs-content div").hide();
        $("."+$(this).data("class")).show();
    });
})