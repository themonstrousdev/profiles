var audio=document.getElementById("music"),input=document.getElementById("musicVolume");audio.volume=$("#musicVolume").attr("value")/100;input.oninput=function(){console.log("Volume changing");audio.volume=$(this).val()/100;}
$("body").sakura({minSize:14,maxSize:19});$("body").append($("<div>",{id:"tooltips"}));$("#playPause").click(function(){if($(this).hasClass("play")){$(this).removeClass("play");$(this).addClass("pause");audio.play();}else{$(this).removeClass("pause");$(this).addClass("play");audio.pause();}});$(".pup").click(function(){var opens=$(`#${$(this).attr("opens")}`),currentOpen=$("#content .scroller:visible");if(opens.is(":visible")){return;}
$(".pup").removeClass("selected");$(this).addClass("selected");currentOpen.animate({"margin-top":"5vh","opacity":"0"},500,()=>{currentOpen.hide();currentOpen.removeAttr("style");});opens.show();opens.addClass("animate");setTimeout(()=>{opens.addClass("selected");opens.removeClass("animate");},500);});$(".friend").each(function(){var img=$(this).attr("img");if(!img){img="https://i.pinimg.com/564x/7a/6e/68/7a6e688ae21a738b9057ef5696ab24b1.jpg";}
$(this).css("background-image",`url(${img})`);});$(".tooltip").hover(function(){var thisPos=$(this).offset(),viewHeight=window.innerHeight,width=$(this).outerWidth(),content=$(this).attr("tooltip"),tooltipHeight;if($("#tooltips").find(".tip")){$(".tip").remove();}
if(!content){return;}
setTimeout(()=>{$("#tooltips").append($("<div>",{class:"tip",html:`<div class="tipWrap">${content}</div>`,style:`bottom:${viewHeight-thisPos.top}px;left:${thisPos.left+(width/2)}px`}));tooltipHeight=$("#tooltips .tip .scroller").outerHeight();$("#tooltips .tip").css("height",`${tooltipHeight}px`)},100);},function(){$(".tip").animate({"margin-bottom":"3vh","opacity":"0"},200,()=>{$(".tip").remove();})})