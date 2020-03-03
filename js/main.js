$(function () {

    //슬라이드 

    var $productSlide = $(".product_slide"),
         $productList = $(".product_list"),
         listWidth = $(".product_list li").outerWidth();

        console.log(listWidth);

    var $prev = $(".product_slide_nav .prev"),
         $next = $(".product_slide_nav .next");


         $next.click(function () {
            $productList.animate({"left":"-416px"});
         });



});