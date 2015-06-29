/**
 * Created by Amir on 3/15/2015.
 */
$(document).ready(function() {

    /**
     * search slide
     */

    var search_flag = false;
    $('.search').click(function(){
        if(search_flag){
            $('.search a i').removeClass('fa-close');
            $('.search a i').addClass('fa-search');
            $('.search-bar').removeClass('search-open');
            $('.search-bar').addClass('search-close');

            $('.main').removeClass('move-down');
            search_flag = false;
        }
        else if(!search_flag){
            $('.search a i').removeClass('fa-search');
            $('.search a i').addClass('fa-close');
            $('.search-bar').removeClass('search-close');
            $('.search-bar').addClass('search-open');

            $('.main').addClass('move-down');
            search_flag = true;
        }


    })


    /*$('.search a').blur(function(){

            if( $('.search-input').focus() ){

            }
            else{
                $('.search a i').removeClass('fa-close');
                $('.search a i').addClass('fa-search');
                $('.search-bar').removeClass('search-open');
                $('.search-bar').addClass('search-close');
                $('.main-content').removeClass('menu-space');
                search_flag = false;
            }

    }






        )
    */

    /**
     * right slide
     */

    var side_flag = true;
    if (window.matchMedia('(max-width: 768px)').matches) {
        side_flag = false;
        $('.menu-icon i').removeClass('fa-times-circle');
        $('.menu-icon i').addClass('fa-plus-circle');
        $('.navigation-side').removeClass('open-side');
        $('.navigation-side').addClass('close-side');
        $('.main-content').addClass('menu-space');
        $('.menu-button').addClass('button-show');
    } else {
        side_flag = true;
        $('.menu-icon i').removeClass('fa-plus-circle');
        $('.menu-icon i').addClass('fa-times-circle');
        $('.navigation-side').removeClass('close-side');
        $('.navigation-side').addClass('open-side');
        $('.main-content').removeClass('menu-space');

    }
    $('.menu-icon').click(function(){
        if(side_flag){
            $('.menu-icon i').removeClass('fa-times-circle');
            $('.menu-icon i').addClass('fa-plus-circle');
            $('.navigation-side').removeClass('open-side');
            $('.navigation-side').addClass('close-side');
            $('.main-content').addClass('menu-space');
            $('.menu-button').addClass('button-show');
            side_flag = false;
        }
        else if(!side_flag){
            $('.menu-icon i').removeClass('fa-plus-circle');
            $('.menu-icon i').addClass('fa-times-circle');
            $('.navigation-side').removeClass('close-side');
            $('.navigation-side').addClass('open-side');
            $('.main-content').removeClass('menu-space');

            side_flag = true;
        }
        //$('.menu-icon i').removeClass('fa-bars');
        //$('.menu-icon i').addClass('fa-close');
        //$('.navigation-side').addClass('close-side');

    });

    $('.menu-button').click(function(){
        if(side_flag){
            $('.menu-icon i').removeClass('fa-times-circle');
            $('.menu-icon i').addClass('fa-plus-circle');
            $('.navigation-side').removeClass('open-side');
            $('.navigation-side').addClass('close-side');
            $('.main-content').addClass('menu-space');

            side_flag = false;
        }
        else if(!side_flag){
            $('.menu-icon i').removeClass('fa-plus-circle');
            $('.menu-icon i').addClass('fa-times-circle');
            $('.navigation-side').removeClass('close-side');
            $('.navigation-side').addClass('open-side');
            $('.main-content').removeClass('menu-space');
            $('.menu-button').removeClass('button-show');

            side_flag = true;
        }
        //$('.menu-icon i').removeClass('fa-bars');
        //$('.menu-icon i').addClass('fa-close');
        //$('.navigation-side').addClass('close-side');

    });

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 85) {
            $('nav').addClass('fixed-header');
        }
        else {
            $('nav').removeClass('fixed-header');
        }
    });

});
