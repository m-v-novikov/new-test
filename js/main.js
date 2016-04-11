
$(function(){
    console.log('main.js ready');

    $('.guantity-but').on('click', function(e){
        var quantity = $(this).closest('.length'),
            plus = $('.plus-but', quantity),
            minus = $('.minus-but', quantity),
            num_quantity = $('.num', quantity),
            num = parseInt(num_quantity.attr('data-value')),
            current_target =  $(e.target);
        if(current_target.is(plus)){
            num = num + 1;
            num_quantity.attr('data-value', num);
            num_quantity.html(num)
        }else if(current_target.is(minus)){
            num = num - 1;
            num_quantity.attr('data-value', num);
            num_quantity.html(num)
        }
    });


    var banner_swiper = new Swiper('.main-banners.swiper-container', {
        speed: 400,
        nextButton: '.banners-swiper-next',
        prevButton: '.banners-swiper-prev'
    });
    var best_product_swiper = new Swiper('.best-products.swiper-container', {
        speed: 400,
        slidesPerView: 'auto',
        nextButton: '.best-products-swiper-next',
        prevButton: '.best-products-swiper-prev'
    });
    var best_product_swiper = new Swiper('.new-products.swiper-container', {
        speed: 400,
        slidesPerView: 'auto',
        nextButton: '.new-products-swiper-next',
        prevButton: '.new-products-swiper-prev'
    });
});
