$(function () {

    // title scroll event
    var $contents = $("section"),
         $topBtn = $("#top");

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 0){
            $topBtn.css({right:0});
        } else {
            $topBtn.css({right:"-6rem"});
        }
        $contents.each(function () {
            if($(this).offset().top - 500 <= scrollTop){
                $(this).find(".hide").addClass("active");
            };
        });
    });

    $topBtn.click(function (e) {
        e.preventDefault();
        $("html,body").stop().animate({scrollTop : 0});
    })
 
    //배너 슬라이드
    var $slideshow = $(".slideshow"),
        $slideGroup = $slideshow.find(".slideshow_slides"),
        $banner = $slideGroup.children("div");

    var $pagination = $slideshow.find(".current"),
         $slideNav = $slideshow.find(".slideshow_nav");

    var currentIndex = 0;   
    var timer;

    $slideGroup.children("div:gt(0)").hide();

    timer = window.setInterval(fadeInSlide, 3000)    
    
    function fadeInSlide(){
        next = (currentIndex + 1) % $banner.length;
        $banner.eq(currentIndex).fadeOut();
        $banner.eq(next).fadeIn();
        currentIndex = next;
        moveToPag();
    }

    function moveToPag () {
        barWidth = $pagination.outerWidth();
        $pagination.css({left: barWidth * currentIndex + "px"});
    }

    $slideNav.find("button").click(function (e) {
        e.preventDefault();
        if($(this).hasClass("prev")){
            fadeInSlide(currentIndex - 1);
        }else{
            fadeInSlide(currentIndex + 1);
        }
    });
    
    $slideshow.hover(function () {
        clearInterval(timer);
    }, function () {
        timer = window.setInterval(fadeInSlide, 3000);
    });



    // product tab-menu 

    var $tabAnchor = $(".product_tab li"),
        $productInfor = $(".product_infor ul li"),
        $productList = $(".product_list");

    var $productNav = $(".product_nav"),
        $next = $productNav.find(".next"),
        $prev = $productNav.find(".prev");

    var slideIndex = 0,
        listIndex = 0;

    $tabAnchor.each( function (index) {
        $(this).attr("data-index", index);
    });
   
    $tabAnchor.click(function (e) {
        e.preventDefault();
        
        $tabAnchor.removeClass("on");
        $(this).addClass("on");
    
        $productInfor.hide();
        $productList.hide();
        $productList.css({"left":0});
    
        slideIndex = $(this).attr("data-index");
        $productInfor.eq(slideIndex).show();
        $productList.eq(slideIndex).show();
        
        if(!listIndex == 0){listIndex = 0;}

        removeNav();
    });

    $tabAnchor.eq(0).trigger("click");

    var slideWidth = $productList.outerWidth() / 6;
   
    $(window).resize(function () {
        slideWidth = $productList.outerWidth() / 6;
        $productList.css({left:0});
        listIndex = 0;
        removeNav();
    });
    
    function moveToSlide (slideIndex, index) {
        $productList.eq(slideIndex).animate({left: -1 * slideWidth * index + "px"});
        listIndex = index;
        removeNav();
    };

    $productNav.find("div").click(function (e) {
        e.preventDefault();
        if($(this).hasClass("prev")){
            moveToSlide(slideIndex, listIndex - 1);
        }else{
            moveToSlide(slideIndex, listIndex + 1);
        }
        
    });

    function removeNav () {
        var productCount = $productList.eq(slideIndex).children().length;
        var w =$(window).width();
        if(w <= 480){
            if(listIndex == productCount - 1){
                $next.css({display:"none"});
            } else {
                $next.css({display:"block"});            }
            };
        if(w <= 768 && w > 480){
            if(listIndex == productCount - 2){
                $next.css({display:"none"});
            } else {
                $next.css({display:"block"});
            };
        } if(w > 768) {
            if(listIndex == productCount - 3){
                $next.css({display:"none"});
            } else {
                $next.css({display:"block"});
            };
        }
        if (listIndex == 0){
            $prev.css({display:"none"});
        } else {
            $prev.css({display:"block"});
        }
    };
    removeNav();
    
    
    // news hover
    var $newsContents = $(".news_contents > div");

    $newsContents.hover(function () {
        $(this).addClass("active");
    },function () {
        $(this).removeClass("active");
    });


   // notice rolling
    var $notice = $(".notice_rolling"),
        rolling = $notice.find(".rolling");

    var rollingTimer;

    rollingTimer = window.setInterval(doRolling, 2000);

    function doRolling () {
        rolling.css({"transition":"0.4s",top:"-2rem"});
        window.setTimeout(function () {
            rolling.removeAttr("style");
            rolling.append(rolling.children().first());
        }, 400); 
    };

    $notice.hover(function () {
        clearInterval(rollingTimer);
    }, function() {
        rollingTimer = window.setInterval(doRolling, 2000);
    });

});
