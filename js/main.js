
$(function(){
    console.log('main.js ready');
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
