function tooltip(){var title=$(this).attr("title");$(this).removeAttr("title");this.TooltipMessage=$("<div/>",{class:"tooltipMessage",style:"display: none;"});this.TooltipMessage.html("<span>"+title+"</span>");$("body").append(this.TooltipMessage);if($(this).hasClass("tooltipLeft")){this.TooltipMessage.addClass("left");}
if($(this).hasClass("tooltipTop")){this.TooltipMessage.addClass("top");}
$(this).hover(tooltipFadeIn,tooltipFadeOut);$(this).mousemove(tooltipMousemove);}
function tooltipFadeIn(){this.TooltipMessage.stop(true,false).fadeIn();}
function tooltipFadeOut(){this.TooltipMessage.stop(true,false).fadeOut();}
function tooltipMousemove(e){var offset={left:e.pageX,top:e.pageY};if(this.TooltipMessage.hasClass("left")){offset.left-=this.TooltipMessage.width()+20;}else{offset.left-=this.TooltipMessage.width()/2;}
if(this.TooltipMessage.hasClass("top")){offset.top-=this.TooltipMessage.height()+50;}else{offset.top+=30}
this.TooltipMessage.offset(offset);}
$(function(e){$(".tooltip").each(tooltip);});