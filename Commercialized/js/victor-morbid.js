var width=$(window).width();var height=$(window).height();$.ajax({url:"https://ellexidecodes.github.io/Profile-Codes/repeatedEffects/smoke.txt",dataType:"text",success:function(data){console.log('Loading in smoke!');$(".h").html(data);},error:function(){console.log('Nobody is smoking. Try again?');}});$(".bell").click(function(){var attr;if(!$(this).hasClass("selected")){$(".bell.selected").removeClass("selected");$(".tab").fadeOut();attr=$(this).attr("opens");$(this).addClass("selected");$(`#${attr}`).fadeIn();}});$(".friend").each(function(){var elem=$(this);var pic=elem.attr("pic")?elem.attr("pic"):"https://i.imgur.com/5iZaFwE.jpg";elem.css("background-image",`url(${pic})`)});$(".friend").click(function(){var elem=$(this);var pic=elem.attr("pic")?elem.attr("pic"):"https://i.imgur.com/5iZaFwE.jpg";var offset=elem.offset();var name=elem.attr("name");var profile=elem.attr("profile")?elem.attr("profile"):"#";var tabs=$(this).children(".friendTab");var style=`left:calc(${offset.left}px+8.5vw)`;var addStyle="";if(offset.top<(height/5)*2){addStyle=`;top:calc(${offset.top}px-3vh);transform:none`}else if((offset.top+elem.outerHeight())>(height/5)*2){addStyle=`;top:unset;transform:none;bottom:calc(${height-(offset.top+elem.outerHeight())}px-3vh)`}
$("#popout").remove();$("#friendTab").remove();$("<div>",{id:"popout",class:"friendPopout",style:style+addStyle}).appendTo("body");$("<div>",{class:"pic",style:`background-image:url(${pic})`}).appendTo("#popout");$("<div>",{class:'friendName',html:name}).appendTo("#popout");$("<a>",{class:"profile",html:"View Profile",target:"_blank",href:profile}).appendTo("#popout");$("<div>",{class:"tabs"}).appendTo("#popout");for(var i=0;i<tabs.length;++i){var name=$(tabs[i]).attr("name");$("<div>",{class:"btn",html:name,click:function(e){var tabStyle='';var popOff=$("#popout").offset();var popWidth=$("#popout").outerWidth();$("#friendTab").remove();var tabName=$(e.target).html();for(var j=0;j<tabs.length&&$(tabs[j]).attr("name")!=tabName;++j){}
var content=$(tabs[j]).html();$("<div>",{class:"friendTab",id:"friendTab"}).appendTo("body");$("<div>",{class:"scroller",html:content}).appendTo("#friendTab");if((width-(popOff.left+popWidth))<$("#friendTab").outerWidth()){tabStyle=`right:calc(${width-popOff.left}px+1vh);animation:ftRight 200ms ease-in-out`}else{tabStyle=`left:calc(${popOff.left+popWidth}px+1vh);animation:ftLeft 200ms ease-in-out`}
tabStyle+=`;top:${$("#popout .pic").offset().top+($("#popout .pic").outerHeight()/2)}px`;$("#friendTab").attr("style",tabStyle);}}).appendTo("#popout .tabs");}});$(document).ready(()=>{var open=$(".bell.selected").attr("opens");$(`#${open}`).show();});function getRandomSize(min,max){return Math.round(Math.random()*(max-min)+min);}
$(document).click(function(e){if(!($(e.target).hasClass("friend")||$(e.target).hasClass("friendPopout")||$(e.target).hasClass("btn")||$(e.target).hasClass("tabs")||$(e.target).hasClass("pic")||$(e.target).hasClass("profile")||$(e.target).hasClass("friendTab")||($(e.target).hasClass("scroller")&&$(e.target).parent()==$(".friendTab")||$(e.target).hasClass("friendName")))){$("#popout").remove();$("#friendTab").remove();}})