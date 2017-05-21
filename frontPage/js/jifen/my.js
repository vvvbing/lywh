//截取多余的字符串边长省略号
function Str(content)
{
    var tempContent;
    if(content.length>33)
    {
        tempContent=content.substring(0, 33)+"...";
    }
    else
        tempContent=content;
    return tempContent;

}
function Str1(content)
{
    var tempContent;
    if(content.length>30)
    {
        tempContent=content.substring(0, 30)+"...";
    }
    else
        tempContent=content;
    return tempContent;

}
function Str2(content)
{
    var tempContent;
    if(content.length>25)
    {
        tempContent=content.substring(0, 25)+"...";
    }
    else
        tempContent=content;
    return tempContent;

}
function Str3(content)
{
    var tempContent;
    if(content.length>15)
    {
        tempContent=content.substring(0, 15)+"...";
    }
    else
        tempContent=content;
    return tempContent;

}


$(document).ready(function(){
    $(".f1").hover(function () {
        $(this).find("label").addClass("hover");
        $(this).find(".f2").show();
    }, function () {
        $(this).find("label").removeClass("hover");
        $(this).find(".f2").hide();
});

    //点击登陆按钮
   $(function(){
       $(".landing_btn a").hover(function(){
           $(this).css({
               "background":"#cd291f",
               "border":"1px solid #cd291f"});
       },function(){
               $(this).css({ "background":"#a91d00" ,
                             "border":"1px solid #a91d00"})
           }
       );
       $(".landing_btn a").click(function(){
           $(this).css({
               "width":"130px","color": "#fff",
               "background": "#a91d00",
               "padding":"10px 8px",
               "height":"5px",
               "border":"1px solid #841b20",
               "text-decoration": "none"}
           );

            })
   });

    $(".f1").hover(function () {
        $(this).find("label").addClass("hover");
        $(this).find(".cho_icon").addClass("hover");
        $(this).find(".f2").show();
    }, function () {
        $(this).find("label").removeClass("hover");
        $(this).find(".cho_icon").removeClass("hover");
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










   $(".product_content dl").hover(function(){
       $(this).find("dd").addClass("hover");
   },function(){
       $(this).find("dd").removeClass("hover");
   });


    //轮播图
    $(function(){
        $(".yScrollListInList1 ul").css({width:$(".yScrollListInList1 ul li").length*(160+84)+"px"});
        $(".yScrollListInList2 ul").css({width:$(".yScrollListInList2 ul li").length*(160+84)+"px"});
        var numwidth=(160+84)*4;
        $(".yScrollListInList .yScrollListbtnl").click(function(){
            var obj=$(this).parent(".yScrollListInList").find("ul");
            if (!(obj.is(":animated"))) {
                var lefts=parseInt(obj.css("left").slice(0,-2));
                if(lefts<30){
                    obj.animate({left:lefts+numwidth},1000);
                }
            }
        });
        $(".yScrollListInList .yScrollListbtnr").click(function(){
            var obj=$(this).parent(".yScrollListInList").find("ul");
            var objcds=-(30+(Math.ceil(obj.find("li").length/4)-2)*numwidth);
            if (!(obj.is(":animated"))) {
                var lefts=parseInt(obj.css("left").slice(0,-2));
                if(lefts>objcds){
                    obj.animate({left:lefts-numwidth},1000);
                }
            }
        })
    });

    $(".jf").click(function(){
          $(this).addClass("current1");
          $(this).siblings().removeClass("current1");
          $(".jfmx").show();
          $(".srjf").hide();
          $(".zcjf").hide();
      });
    $(".sr").click(function(){
        $(this).addClass("current1");
        $(this).siblings().removeClass("current1");
        $(".srjf").show();
        $(".jfmx").hide();
        $(".zcjf").hide();
    });

    $(".zc").click(function(){
        $(this).addClass("current1");
        $(this).siblings().removeClass("current1");
        $(".zcjf").show();
        $(".jfmx").hide();
        $(".srjf").hide();
    });




    //$("table tbody tr:odd").css("background","#fff");
    //$("table tbody tr:even").css("background","#F5F6FA");

    $("table tbody tr").mouseover(function(){
        $(this).css("background","#C0E0F9");
    }).mouseout(function(){
        $("table tbody tr:odd").css("background","#fff");
        $("table tbody tr:even").css("background","#fff");
    });


    $(".page1 span").click(function(){
        $(this).addClass("current2");
        $(this).siblings().removeClass("current2");
    });


    $(".fenlei2").hover(function(){
        $(this).find("div").addClass("current1");
        $(this).find("a").addClass("current3");
        $(this).find("i").addClass("hover");
        $(this).find("ul").show();
    },function(){
        $(this).find("div").removeClass("current1");
        $(this).find("a").removeClass("current3");
        $(this).find("a").siblings().removeClass("current3");
        $(this).find("i").removeClass("hover");
        $(this).find("ul").hide();
    });

});

