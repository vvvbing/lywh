$(document).ready(function(){

    function boxWidth(){
        var boxLength=$(window).width()/2;
        var boxHeight=$(window).height()/2;
        var boxEnd=boxLength-150;
        $('.loginBox').css({"position":"fixed","left":""+boxEnd+"px","top":""+boxHeight+"px"});
    }

    boxWidth();
    $(window).resize(function(){
        boxWidth();
    });












    var $hand = $('.hand');
    $hand.click(function () {
        var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        data = data[Math.floor(Math.random() * data.length)];
        switch (data) {
            case 1:
                rotateFunc(1, 16, ' 成长值+10');
                break;
            case 2:
                rotateFunc(2, 47, ' 玉石一只');
                break;
            case 3:
                rotateFunc(3, 76, '成长值+5');
                break;
            case 4:
                rotateFunc(4, 106, '玉石一只');
                break;
            case 5:
                rotateFunc(5, 135, ' 谢谢参与！');
                break;
            case 6:
                rotateFunc(6, 164, '紫砂壶一个');
                break;
            case 7:
                rotateFunc(7, 193, '成长值+10');
                break;
            case 8:
                rotateFunc(7, 223, ' 茶叶一包');
                break;
            case 9:
                rotateFunc(7, 252, '成长值+5');
                break;
            case 10:
                rotateFunc(7, 284, ' 宣纸一套');
                break;
            case 11:
                rotateFunc(7, 314, ' 成长值+5');
                break;
            case 12:
                rotateFunc(7, 345, ' 谢谢参与');
                break;
        }
    });

    var rotateFunc = function (awards, angle, text) {
        $hand.stopRotate();
        $hand.rotate({
            angle: 0,
            duration: 5000,
            animateTo: angle + 1440,
            callback: function () {

                $(".loginBox").find("p").text(text);
                $("body").append("<div class='mask'></div>");
                $(".mask").addClass("mask").fadeIn("slow");
                $(".loginBox").fadeIn("slow");

                $(".close_btn").click(function(){
                    $(".loginBox").fadeOut("fast");
                    $(".mask").css("display","none")
                });
            }
        });
    };


});