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

            nav = $container.find(".slideshow_nav"),
            bannerCount = banner.length;


        var currentIndex = 0;   
        var timer;

        //슬라이드 이동 함수
        function goToSlide(index){
            barWidth = pagination.outerWidth();
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

        
    // ABOUT scroll evnet
        // 스크롤의 위치가 일정 순간에 오면
        // 슬로건 메뉴가 나타난다. 
        
        var $slogan = $(".about .slogan");
        var aboutPos = $(".about h3").offset().top;

        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            if(scrollTop >= aboutPos - 500){
                $slogan.addClass("show");
            };
        });


    // news hover
    var $newsContents = $(".news .news_contents > div");

   $newsContents.hover(function () {
       $(this).find(".contents_title").css({
            "background":"#e94d50",
            "color":"#fff"});
       $(this).find(".overlay").css({"display":"block"});
       $(this).find("img").css({"transform":"scale(1.05)"});
   },function () {
        $(this).find(".contents_title").css({
            "background":"none",
            "color":"#e94d50"});
        $(this).find(".overlay").css({"display":"none"});
        $(this).find("img").css({"transform":"scale(1)"});
   });


   // notice rolling
   var $container = $(".notice_rolling"),
        rolling = $container.find(".rolling");

    var rollingTimer;

    rollingTimer = window.setInterval(doRolling, 2000);

    function doRolling () {
        rolling.css({"transition":"0.4s",top:"-2em"});

        window.setTimeout(function () {
            rolling.removeAttr("style");
        }, 400);
        
    }

console.log(rolling.children().first());


});