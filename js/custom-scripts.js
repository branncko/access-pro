/**
* Custom js for Accesspress Mag Pro
* 
*/
jQuery(document).ready(function($){
        
$('.search-icon i.fa-search').click(function() {
    $('.search-icon .ak-search').toggleClass('active');
});

$('.ak-search .close').click(function() {
    $('.search-icon .ak-search').removeClass('active');
});

$('.overlay-search').click(function() {
    $('.search-icon .ak-search').removeClass('active');
});

$('.nav-toggle').click(function() {
    $('.nav-wrapper').find('#apmag-header-menu').slideToggle('slow');
    $(this).parent('.nav-wrapper').toggleClass('active');
});

$('.nav-wrapper .menu-item-has-children').append('<span class="sub-toggle"> <i class="fa fa-angle-right"></i> </span>');

$('.nav-wrapper .sub-toggle').click(function() {
    $(this).parent('.menu-item-has-children').children('ul.sub-menu').first().slideToggle('1000');
    $(this).children('.fa-angle-right').first().toggleClass('fa-angle-down');
});
$('.mega-sub-toggle').click(function() {
    $(this).parent('.menu-item').children('ul.mega-cat-menu').first().slideToggle('1000');
    $(this).children('.fa-angle-right').first().toggleClass('fa-angle-down');
});

new WOW().init();

$('.tooltip').tooltipster();
 
// hide #back-top first
$("#back-top").hide();

// fade in #back-top

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    
  // Post gallery sider
  $('.gallery-slider').bxSlider({
    pager:false,
    adaptiveHeight: true,
    prevText: '<i class="fa fa-angle-left"></i>',
    nextText: '<i class="fa fa-angle-right"></i>'
  });
  
  // Mega menu
  // Hide the first cat-content
    $('#site-navigation .ap-mega-menu-con-wrap  .cat-con-section:not(:first-child)').hide();
    $('#site-navigation .ap-mega-menu-cat-wrap  div:first-child a').addClass('mega-active-cat');

    // Toggle On Hover of cat menu
    $('#site-navigation a.mega-cat-menu').hover(function(){        
        $(this).parents('.menu-item-inner-mega').find('a').removeClass('mega-active-cat');
        $(this).addClass('mega-active-cat');
        var cat_id = $(this).attr('data-cat-id');
        $(this).parents('.menu-item-inner-mega').find('.cat-con-section').hide();
        $(this).parents('.menu-item-inner-mega').find('#cat-con-id-'+cat_id).show();
    });
      
  // Tabbed widget
   $(".apmag-tabbed-widget").tabs({
           activate: function (event, ui) {
               var active = $('.apmag-tabbed-widget').tabs('option', 'active');
               $("#tabid").html('the tab id is ' + $(".apmag-tabbed-widget ul>li a").eq(active).attr("href"));
           }
       });
   
   // Category Carousel
   /*$('.category-carousel').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 254,
        pager: false,
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        slideMargin: 10
   });*/
   if( $('body').hasClass('rtl') ){
        var rltMode = 'rtl';
        var rtlClass = (rltMode == "rtl") ? "false" : "true";
    }
    
    $("#cat-block-carousel").owlCarousel({
        rtl: rtlClass,
        items : 3,
        /*itemsDesktop : [1199,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option*/
        mouseDrag : false,
        nav : true,
        navText: [
                    "<i class='fa fa-chevron-left'></i>",
                    "<i class='fa fa-chevron-right'></i>"
                    ],
        /*autoPlay : false,
        pagination : false,
        slideSpeed : 500 */
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
  }); 
   
   /*Youtube playlist*/
   /*youtube list*/
   $('.apmag-click-video-thumb').click(function(){
        var thumbIdattr = $(this).attr('data-id');
        $('.apmag-click-video-thumb').removeClass('active');
        $(this).addClass('active');
        $(this).closest('.list-conent-wrapper').find('.apmag-youtube-video-play').hide();
        $(this).closest('.list-conent-wrapper').find('.ytvideo_'+thumbIdattr).show();
   });
   
   /*Gallery item*/
   $('.gallery-item a').each(function() {
        $(this).addClass('fancybox-gallery').attr('data-lightbox-gallery', 'gallery');
    });

    $(".fancybox-gallery").nivoLightbox();
    
    $('.apmag-playlist-container').scrollbar();

    /*---Accessibility Option---*/
    $('#apmagincfont').click(function(){
          curTicSize = parseInt($('.ticker-title').css('font-size')) + 1;
          curDateSize = parseInt($('.current_date').css('font-size')) + 1;
          curBodySize = parseInt($('body').css('font-size')) + 1;
          curh1Size = parseInt($('h1').css('font-size')) + 1;
          curh2Size = parseInt($('h2').css('font-size')) + 1;
          curh3Size = parseInt($('h3').css('font-size')) + 1;
          curh4Size = parseInt($('h4').css('font-size')) + 1;
    if(curBodySize<=20)
        $('body').css('font-size', curBodySize);
    if(curDateSize<=20)
        $('.current_date').css('font-size', curDateSize);
    if(curTicSize<=20)
        $('.ticker-title').css('font-size', curTicSize);
    if(curh1Size<=40)
        $('h1').css('font-size', curh1Size);          
    if(curh2Size<=38)
        $('h2').css('font-size', curh2Size);          
    if(curh3Size<=36)
        $('h3').css('font-size', curh3Size);          
    if(curh4Size<=34)
        $('h4').css('font-size', curh4Size);
          });
    $('#apmagdecfont').click(function(){    
          curTicSize = parseInt($('.ticker-title').css('font-size')) + 1;
          curDateSize = parseInt($('.current_date').css('font-size')) + 1;
          curBodySize= parseInt($('body').css('font-size')) - 1;
          curh1Size = parseInt($('h1').css('font-size')) + 1;
          curh2Size = parseInt($('h2').css('font-size')) + 1;
          curh3Size = parseInt($('h3').css('font-size')) + 1;
          curh4Size = parseInt($('h4').css('font-size')) + 1;
    if(curTicSize>=12)
        $('body').css('font-size', curTicSize);
    if(curBodySize>=12)
        $('body').css('font-size', curBodySize);
          }); 

    /*Short Codes Js*/
    $('.slider_wrap').bxSlider({
        pager: false,
        auto: true,
        adaptiveHeight: true,
        captions: true,
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>'
    });

    $('.ap_accordian:first').children('.ap_accordian_content').show();
    $('.ap_accordian:first').children('.ap_accordian_title').addClass('active');
    $('.ap_accordian_title').click(function() {
        if ($(this).hasClass('active')) {
        }
        else {
            $(this).parent('.ap_accordian').siblings().find('.ap_accordian_content').slideUp();
            $(this).next('.ap_accordian_content').slideToggle();
            $(this).parent('.ap_accordian').siblings().find('.ap_accordian_title').removeClass('active')
            $(this).toggleClass('active')
        }
    });

    $('.ap_toggle_title').click(function() {
        $(this).next('.ap_toggle_content').slideToggle();
        $(this).toggleClass('active')
    });

    $('.ap_tab_wrap').prepend('<div class="ap_tab_group clearfix"></div>');

    $('.ap_tab_wrap').each(function() {
        $(this).children('.ap_tab').find('.tab-title').prependTo($(this).find('.ap_tab_group'));
        $(this).children('.ap_tab').wrapAll("<div class='ap_tab_content' />");
    });

    $('#page').each(function() {
        $(this).find('.ap_tab:first-child').show();
        $(this).find('.tab-title:first-child').addClass('active')
    });

    $('.ap_tab_group .tab-title').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parent('.ap_tab_group ').next('.ap_tab_content').find('.ap_tab').hide();
        var ap_id = $(this).attr('id');
        $(this).parent('.ap_tab_group ').next('.ap_tab_content').find('.' + ap_id).show();
    });
   
});