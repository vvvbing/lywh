$(document).ready(function(){

    $(".f1").hover(function () {
        $(this).find("label").addClass("hover");
        $(this).find(".f2").show();
    }, function () {
        $(this).find("label").removeClass("hover");
        $(this).find(".f2").hide();
    });


        $(".shop_cart").hover(function () {
            $(".shop_car").addClass("hover");
            $(this).find("i.cho_icon").addClass("hover");
            $(".shop_cart_list").show();
        }, function () {
            $(".shop_car").removeClass("hover");
            $(this).find("i.cho_icon").removeClass("hover");
            $(".shop_cart_list").hide();
        });
        $(".shop_cart").hover(function () {
            $(".shop_car").addClass("hover");
            $(this).find(".cho_icon").addClass("hover");
            $(".no_shop").show();
        }, function () {
            $(".shop_car").removeClass("hover");
            $(this).find(".cho_icon").removeClass("hover");
            $(".no_shop").hide();
        });





//验证
var yzProperty={
   question:false,
    QQ:false,
    Email:false
};

$(".textarea").blur(function(){
    if( $.trim($(this).val())=="")
    {
        $(this).val("");
        $(".kong1").css("display","inline-block");
        yzProperty.question=false;
    }
    else{
        $(".kong1").css("display","none");
        yzProperty.question=true;
    }
});



$(".QQ").blur(function(){
    if( $.trim($(this).val())=="")
    {
        $(this).val("");
        $(".kong2").css("display","inline-block");
        yzProperty.QQ=false;
    }
    else{
        $(".kong2").css("display","none");
        yzProperty.QQ=true;
    }
});

$(".email").blur(function(){
    if( $.trim($(this).val())=="")
    {
        $(this).val("");
        $(".kong3").css("display","inline-block");
        yzProperty.Email=false;
    }
    else{
        $(".kong3").css("display","none");
        yzProperty.Email=true;
    }
});


$(".submit").click(function(){
    var isFalse=false;
    for(var s in yzProperty)
    {
        if(!yzProperty[s])
        {
            isFalse=true;
            break;
        }
    }
    if(isFalse)
    {
        alert("请填写完整");
    }
    else
    {

    }
});
});