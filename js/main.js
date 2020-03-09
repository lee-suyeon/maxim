$(function () {
    // #header_dropdown
        var $navMenu = $(".nav .gnb > li");

        $navMenu.hover(function () {
            $(this).find(".dropdown").stop().slideDown(200);
        }, function () {
            $(this).find(".dropdown").stop().slideUp(200);
        });


    //배너 슬라이드
        var $container = $(".slideshow"),
            slideGroup = $container.find(".slideshow_slides"),
            banner = slideGroup.children("div");

        var pagination = $container.find(".current"),
            barWidth = pagination.outerWidth(),
            nav = $container.find(".slideshow_nav"),
            bannerCount = banner.length;
            
        var currentIndex = 0;   
        var timer;

        //슬라이드 이동 함수
        function goToSlide(index){
            slideGroup.stop().animate({left: -100 * index + "%"});
            pagination.stop().animate({left: barWidth * index + "px"});
            currentIndex = index;
            updateNav();
        };

        nav.find("button").click(function (e) {
            e.preventDefault();
            if($(this).hasClass("prev")){
                goToSlide(currentIndex - 1);
            }else{
                goToSlide(currentIndex + 1);
            }
        });

        function updateNav () {
            var navPrev = nav.find(".prev"),
                 navNext = nav.find(".next");

            if(currentIndex == 0){
                navPrev.css({display:"none"});
            }else {
                navPrev.css({display:"block"});
            };

            if(currentIndex == bannerCount - 1){
                navNext.css({display:"none"});
            }else {
                navNext.css({display:"block"});
            };
        };

        updateNav();


        function nextSlide () {
            var nextIndex = (currentIndex + 1) % bannerCount;
            goToSlide(nextIndex);
        };

        timer = window.setInterval(nextSlide, 3000);
        
        $container.hover(function () {
            clearInterval(timer);
        }, function () {
            timer = window.setInterval(nextSlide, 3000);
        });
});