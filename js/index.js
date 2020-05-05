
let featuresOffset = $("#features").offset().top ;
$(window).scroll(function(){
    let wScroll = $(window).scrollTop(); //geter
    if(wScroll > featuresOffset)
    {
        $("#navbar").css("backgroundColor" , "rgba(0,0,0,0.5)");
        $("#btnUp").fadeIn(500);
    }
    else
    {
        $("#navbar").css("backgroundColor", "transparent");
        $("#btnUp").fadeOut(500);
    }
})

$("#btnUp").click(function(){
    $("html, body").animate({scrollTop:"0"},2000)
})

$("a").click(function(){

   let aHref = $(this).attr("href");
   let sectionOffset = $(aHref).offset().top;
   $("html , body").animate({scrollTop:sectionOffset}, 2000) 
})


let colorItem = $(".color-item");

colorItem.eq(0).css("backgroundColor", "#0285");
colorItem.eq(1).css("backgroundColor", "orange");
colorItem.eq(2).css("backgroundColor", "#064");
colorItem.eq(3).css("backgroundColor", "#367");
colorItem.eq(4).css("backgroundColor", "#247");
colorItem.click(function(){
    let color = $(this).css("backgroundColor");
    $("body").css("color" , color)

})
$(".img-option").click(function(){
    let imgSrc = $(this).attr("src");
    $("header").css("backgroundImage", `url(${imgSrc})`);
})


$("#options i ").click(function(){
    let boxOptionsWidth = $(".options-box").outerWidth();
    if($("#options").css("left") == "0px")
    {
        $("#options").animate({left: `-${boxOptionsWidth}`} , 1000)
    }
    else{
        $("#options").animate({left:`0px`} , 1000)
    }
})

$(document).ready(function () {

    $("#loading .spinner").fadeOut(1000, function(){
        $("#loading").fadeOut(1000 , function(){
            $("body").css("overflow" , "auto")
        });
    })
})