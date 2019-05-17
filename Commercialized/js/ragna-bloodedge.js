var delay=1,historySlide=1,orient=window.innerWidth>=window.innerHeight?"landscape":"portrait",volume=document.getElementById("musicVolume"),backMusic=document.getElementById("backMusic"),firstPlay=false,over=false,charCounter=1,hoveredChar=null,nextHovered=null;$(".progressBar").css("width",`${volume.value}%`);backMusic.volume=volume.value/100;volume.oninput=function(){var val=$(this).val();$(".progressBar").css("width",`${val}%`)
backMusic.volume=val/100;};$("#musicControls").click(function(){if($(this).hasClass("stop")){backMusic.play();$(this).removeClass("stop");$(this).addClass("play");if(!firstPlay){firstPlay=true;}}else{backMusic.pause();$(this).removeClass("play");$(this).addClass("stop");}});$(".splitItem").click(()=>{if(!firstPlay&&orient!="portrait"){backMusic.play();firstPlay=true;$("#musicControls").removeClass("stop");$("#musicControls").addClass("play");}});$("#musicControls, #volumeContainer").mouseenter(()=>{$("#volumeContainer").stop();$("#volumeContainer").fadeIn(500);});$("#musicControls, #volumeContainer").mouseleave(()=>{$("#volumeContainer").stop();$("#volumeContainer").fadeOut(500);});setTimeout(()=>{$("#ragna").addClass("visible");},2250);$("body").append($("<div>",{id:"tooltips"}));var runMe;$(".char.hover").mouseenter(function(){if(orient=="portrait"){return;}
over=true;var $elem=$(this),img=$elem.attr("hover-img"),charOffset=$elem.offset(),height=$elem.outerHeight(),width=$elem.outerWidth(),nextHovered=$(this).attr("id");if(!hoveredChar){hoveredChar=nextHovered;nextHovered=null;checkTooltips();}else if(hoveredChar==nextHovered){if($("#tooltips").html()==""){clearTimeout(runMe);setTimeout(()=>{checkTooltips();},100);}
nextHovered=null;}else if(hoveredChar!=nextHovered){clearTimeout(runMe);setTimeout(()=>{checkTooltips();},100);hoveredChar=nextHovered;nextHovered=null;}
if(!img){return;}
function checkTooltips(){if($("#tooltips").html()==""&&over){$("<div>",{class:"tooltip",style:`top:${charOffset.top-height}px;left:${charOffset.left+width/2}px`,html:`<img src='${img}'>`}).appendTo("#tooltips");}else{runMe=setTimeout(()=>{checkTooltips();},100);;}}});$(".char.hover").mouseleave(function(){if(orient=="portrait"){return;}
over=false;clearTimeout(runMe);if($("#tooltips").html()==""){return;}else{$("#tooltips .tooltip:first-child").css({"opacity":"0","transform":"translate(-50%, -20%)"});setTimeout(()=>{$("#tooltips .tooltip:first-child").remove();},250);}});$(window).resize(function(){orient=window.innerWidth>=window.innerHeight?"landscape":"portrait";if(orient=="portrait"&&$("#musicControls").hasClass("play")){backMusic.pause();$("#musicControls").removeClass("play");$("#musicControls").addClass("stop");}
if($(".splitItem").hasClass("open")){$(".splitItem:not(.open)").attr("style",`${orient=="landscape"?"margin: 0 .5vw; width: 7vw":"margin: .5vh 0; height: 7vh"}`);$(".splitItem.open").attr("style",`${orient=="landscape"?"margin:0 .5vw;width:60vw":"margin: .5vh 0;height:60vh"}`);}else{}});function prevSlide(elem){if(historySlide==1){}else if(historySlide==2){historySlide=1;$(".slideMe").removeClass("second");$(".slideMe").addClass("first");$(".slideMe .right").removeClass("open");setTimeout(()=>{$(".slideMe .top").addClass("open");},500);elem.removeAttr("style");}else if(historySlide==3){historySlide=2;$(".slideMe").removeClass("third");$(".slideMe").addClass("second");$(".slideMe .bottom").removeClass("open");setTimeout(()=>{$(".slideMe .right").addClass("open");},500);$(".nextSlide").removeAttr("style");}else{historySlide=2;$(".slideMe").removeClass("third, first, second");$(".slideMe .right, .slideMe .top, .slideMe .bottom").removeClass("open");setTimeout(()=>{$(".slideMe .right").addClass("open");},500);$(".slideMe").addClass("second");}}
function nextSlide(elem){if(historySlide==1){$(".prevSlide").css({"opacity":"1","pointer-events":"all"});historySlide=2;$(".slideMe").removeClass("first");$(".slideMe").addClass("second");$(".slideMe .top").removeClass("open");setTimeout(()=>{$(".slideMe .right").addClass("open");},500);}else if(historySlide==2){historySlide=3;$(".slideMe").removeClass("second");$(".slideMe").addClass("third");elem.css({opacity:0,"pointer-events":"none"});$(".slideMe .right").removeClass("open");setTimeout(()=>{$(".slideMe .bottom").addClass("open");},500);}else if(historySlide==3){}else{historySlide=2;$(".slideMe").removeClass("third, first, second");$(".slideMe").addClass("second");$(".slideMe .right, .slideMe .top, .slideMe .bottom").removeClass("open");setTimeout(()=>{$(".slideMe .right").addClass("open");},500);}}
$(".slideMe").on("swiped-left",function(){prevSlide($(".prevSlide"));});$(".prevSlide").click(function(){prevSlide($(this));});$(".slideMe").on("swiped-right",function(){nextSlide($(".nextSlide"));})
$(".nextSlide").click(function(){nextSlide($(this));})
$(".splitItem").each(function(){$(this).css("animation-delay",`${delay}s`);delay+=.25;});$(".splitItem:not(:first-child):not(.splitItem *)").click(function(){if($(this).hasClass("open")){return;}
var hideMe=$(".splitItem .content:visible");$(".splitItem").attr("style",`${orient=="landscape"?"margin: 0 .5vw; width: 7vw":"margin: .5vh 0; height: 7vh"}`);$(".splitItem").removeClass("open");$(".splitItem .slideMe>*").removeClass("open");$(".prevSlide, .nextSlide").removeAttr("style");$(".slideMe").removeClass("first, second, third");$(".slideMe").addClass("first");historySlide=1;setTimeout(()=>{$(this).find(".slideMe").find(".top").addClass("open");},500);hideMe.addClass("hide");setTimeout(()=>{hideMe.removeAttr("style");hideMe.removeClass("hide");},500);$(this).addClass("open");$(this).css(`${orient=="landscape"?"width":"height"}`,`${orient=="landscape"?"60vw":"60vh"}`);$(this).children(".content").show();});$(".splitItem:first-child").click(()=>{var hideMe=$(".splitItem .content:visible");$(".splitItem").removeAttr("style");$(".splitItem").removeClass("open");$(".splitItem .slideMe .top").removeClass("open");$(".prevSlide, .nextSlide").removeAttr("style");historySlide=1;hideMe.addClass("hide");setTimeout(()=>{hideMe.removeAttr("style");hideMe.removeClass("hide");},500);})
$(".char").each(function(){var img=$(this).attr("img");if(!img){img="https://i.imgur.com/iIaz8rN.png"};$(this).css("background-image",`url(${img})`);$(this).attr("id",`char-${charCounter}`);charCounter++;})