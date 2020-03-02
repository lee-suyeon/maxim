$(function () {

    //슬라이드 

    var $container = $(".slider"),
        $slideGroup =$(".slideshow_slides"),
        $slides = $(".slideshow_slides > div"),
        $nav = $container.find(".slideshow_nav"),
        $indicator = $container.find(".pagination");

               
        var currentIndex = 0;

        // next 버튼을 누르면
        $nav.find(".next").click(function () {
            $slideGroup.animate({"left":"-200%"}, function () {
                $(this).removeAttr("style").children(":first").appendTo(this);
            });
        });

        $nav.find(".prev").click(function () {
            $slideGroup.animate({"left":"0%"}, function () {
                $(this).removeAttr("style").children(":last").prependTo(this);
            });
        });



});