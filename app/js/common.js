


 // $(".wrapp-slider-karusel").wrapAll("<div class='maindiv11' data-slick='{'slidesToShow': 5, 'slidesToScroll': 1}'></div>");

jQuery(document).ready(function() {

    // Меню
        jQuery('.click-menu-min').on('click', function(){
    jQuery('.wrapp-menu-min').toggleClass('serch-open');
});

jQuery('.perents-links').on('click', function(){
   jQuery(this).siblings('ul').toggleClass('pod-menu');
});
    // Конец меню

  jQuery(document).ready(function() {
    jQuery('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>eurooptica.by</small>';
            }
        },
       zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
});
// var widthBody = $('body').width();
var slaids;
var widthBody;

     widthBody = $('body').width();

    if(widthBody > 1200){
    slaids = 5;
}

    if(widthBody <= 1200){
    slaids = 4;
}
  if(widthBody <= 760){
      slaids =2;  
    }
      if(widthBody <= 480){
      slaids =1;  
    }
// console.log(widthBody);
  jQuery('#main').slick({
        // dots: true,
        autoplay: true,
        autoplaySpeed:4000,
        infinite: true,
        slidesToShow: slaids,
        slidesToScroll: 1,
        prevArrow: '<img class="lefts" src="img/backward.png">',  // стрелки
        nextArrow: '<img class="righets" src="img/before.png">'  // стрелки
    });
});

console.log('111');




