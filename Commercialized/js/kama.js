var delay=0,images=$(".sprite .img").length,count,duration=3*images;$(".img").each(function(){var img=$(this).attr("img");if(!img){img="https://i.imgur.com/972T2J0.png";}
$(this).css("background-image",`url(${img})`);});$(".btn").each(function(){var img=$(this).attr("img");$("<div>",{class:"lotusIcon"}).appendTo($(this));$("<div>",{class:"manifest",style:`background:url(${img})right/auto 100%no-repeat`}).appendTo($(this));})
$(".friend").each(function(){var img=$(this).attr('face');$(this).addClass("tooltip");if(!img){img="https://i.imgur.com/fzBjzh5.png";}
$(this).css("background-image",`url(${img})`);})
$(".sprite .btn").click(function(){var background=document.querySelector("video.background");background.play();var opens=$(`#${$(this).attr("opens")}`);if(opens.is(":visible")){return;}else if(!opens){$(".tab").fadeOut(500);}
$(".tab").fadeOut(500);opens.show();$(".img").fadeOut(1000);$(`#${$(this).attr("portrait")}`).fadeIn(1000);});