$(window).ready(()=>{
  function renderImage (url, scale = 0.1) {
    let img = new Image()
   
    img.onload = () => {
      const style = `
        color: transparent;
        display: block !important;
        margin: 10px 0;
        font-size: ${img.height * scale}px;
        padding: ${Math.floor(img.height * scale/2)}px ${Math.floor(img.width * scale/2)}px;
        background: url(${url});
        background-size: ${img.width * scale}px ${img.height * scale}px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      `
      console.log('%cB', style);
    }
   
    img.src = url;
  }
   
  console.image = renderImage;
  
  console.image("https://www.themonster.xyz/assets/main-logo.png");
  
  console.log('%cSTOP!', 'color: red; text-shadow: 2px 0px #000, 0px -2px #000, -2px 0px #000, 0px 2px #000;font-size: 7vh; font-weight: 600;font-family:Calibri');
  
  console.log('%cThis code is either paid for, copyrighted, or both! In an event that you find this, you are already trying to bypass that. Please turn back now and simply ask The Monster (aka Elle) for any question regarding this profile.', 'font-size: 3vh;font-family: Calibri;');
  
  console.log('%cIf you want to know more, go to http://www.themonster.xyz', 'font-size: 3vh;font-family: Calibri;');
 

  $("head").append(`
  <link href="https://www.themonster.xyz/styles/fancy-fonts.css" rel="stylesheet">
  <link href="https://www.themonster.xyz/styles/google-fonts.css" rel="stylesheet">`);

  $("<style>", {
    id: "context-menu",
    html: `
    .context-menu {
      position: absolute;
      background: #888;
      display: flex;
      flex-flow: column wrap;
      width: 17vw;
      box-shadow: .5vh .5vh .5vh rgba(0, 0, 0, 0.3);
      animation: context-open-new 300ms cubic-bezier(0, 0, 0, 1);
      transform-origin: top;
      color: #111;
      font-style: normal;
    }
    
    @keyframes context-open-new {
      0% {
        transform: scale(1, 0.8);
      }
    }
    
    .context-menu .context-item {
      box-sizing: border-box;
      padding: 1vh 5vh;
      text-align: center;
      font-family: "Share", sans-serif;
      font-size: 2.5vh;
      width: 100%;
      border: none;
      font-style: normal;
      text-shadow: none;
      text-transform: initial;
      background: transparent;
      border-bottom: .1vh solid #777;
      transition: background .2s ease-in-out;
    }
    
    .context-menu .context-item.hoverable:hover {
      background-color: #777 !important;
    }
    
    .context-menu .context-item.coder {
      background: url(https://www.themonster.xyz/assets/main-logo.png) .5vw center/auto 60% no-repeat;
    }
    
    .context-menu a.context-item {
      color: inherit;
      background: transparent;
      text-decoration: none;
      font-family: "Share", sans-serif;
      font-size: 2.5vh;
    }`
  }).appendTo("head");
});

$(document).keydown(function (event) {
  if (event.keyCode == 123) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73 || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
    return false;
  }
});

$(window).click(()=> {
  if($(".context-menu")) {
    $(".context-menu").remove();
  };
});

$(window).contextmenu((e)=> {
  if($(".context-menu")) {
    $(".context-menu").remove();
  };

  var bodyStyle = document.body.querySelectorAll("style:not([media])").length > 0,
  styles = bodyStyle ? document.body.querySelectorAll("style") : document.head.querySelectorAll("style:not(#context-menu):not(#code-overlay)"),
  style = styles[styles.length-1].innerHTML,
  pStart = style.includes("FOR:") ? style.search("FOR:") + 4 : null,
  pEnd = new RegExp("\\[").test(style) ? style.search("\\[") - 1 : null,
  profileName = pStart && pEnd ? style.slice(pStart, pEnd) : null,
  rStart = style.includes("REGISTRATION:") ? style.search("REGISTRATION:") + 13 : null,
  rEnd = style.search(";") ? style.search(";") : null,
  registration = rStart ? style.slice(rStart, rEnd) : null,
  hasSelected = window.getSelection().toString();

  var winHeight = $(window).innerHeight(),
  winWidth = $(window).innerWidth(),
  cmTop, cmLeft;
  if(e.pageY > (winHeight/4)*3) {
    cmTop = `bottom: ${winHeight - e.pageY}px; transform-origin: bottom;`;
  } else {
    cmTop = `top: ${e.pageY}px;`
  }

  if(e.pageX > (winWidth/4)*3) {
    cmLeft = `right: ${winWidth - e.pageX}px;`
  } else {
    cmLeft = `left: ${e.pageX}px;`
  }

  $("body").append($("<div>", {
    class: "context-menu",
    style: `${cmTop}${cmLeft}`
  }));

  $("<a>", {
    class: "context-item coder hoverable",
    html: "&copy; The Monster",
    href: "https://roleplay.chat/profile.php?user=Deum",
    target: "_blank",
    rel: "noopener noreferrer"
  }).appendTo(".context-menu");

  $("<a>", {
    class: "context-item hoverable",
    html: "License : <img src='https://www.themonster.xyz/assets/creativecommons.svg' style='height: 2.5vh; width: auto;' alt='Creative Commons'> BY-NC-ND",
    href: "https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode",
    target: "_blank",
    rel: "noopener noreferrer"
  }).appendTo(".context-menu");

  if(registration) {
    $("<a>", {
      class: "context-item hoverable",
      html: "Copyright Registration",
      href: registration,
      target: "_blank",
      rel: "nooopener noreferrer"
    }).appendTo(".context-menu");
  }

  $("<div>", {
    class: "context-item",
    html: `This code belongs to ${profileName != null?profileName:"this character"} only.`,
  }).appendTo(".context-menu");

  if(hasSelected) {
    $("<a>", {
      class: "context-item hoverable",
      style: "display: flex; flex-flow: row wrap; justify-content: space-between;align-items: center;align-content: center;",
      html: "<span>Copy</span> <span style='opacity: .6;font-size: 80%'>Ctrl + C</span>",
      click: function() {
        document.execCommand("copy");
      }
    }).appendTo(".context-menu");
  }

  return false;
});