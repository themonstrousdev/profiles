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
  
  console.log('%cThis code is either paid for, copyrighted, or both! In an event that you find this, you are already trying to bypass that. Please turn back now and simply ask The Monster (aka Elle) for any question regarding this profile.', 'color: #333; font-size: 3vh;font-family: Calibri;');
  
  console.log('%cIf you want to know more, go to http://www.themonster.xyz', 'color: #333; font-size: 3vh;font-family: Calibri;');
 

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
      box-shadow: 0 1vh 2vh rgba(0, 0, 0, 0.8);
      animation: context-open-new 300ms cubic-bezier(0, 0, 0, 1);
      transform-origin: top;
      color: #111;
      text-transform: initial;
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

  var styles = document.head.querySelectorAll("style:not(#context-menu)"),
  inner = styles[styles.length-1].innerHTML,
  pStart = inner.includes("FOR:") ? inner.search("FOR:") + 4 : null,
  pEnd = new RegExp("\\[").test(inner) ? inner.search("\\[") - 1 : null,
  profileName = pStart && pEnd ? inner.slice(pStart, pEnd) : null,
  rStart = inner.search("REGISTRATION:") + 8 ? inner.search("REGISTRATION:") + 8 : null,
  rEnd = inner.search(";") ? inner.search(";") : null,
  registration = rStart ? inner.slice(rStart, rEnd) : null;

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
    html: "Copyright Registration",
    href: registration,
    target: "_blank",
    rel: "nooopener noreferrer"
  }).appendTo(".context-menu");

  $("<div>", {
    class: "context-item",
    html: `This code belongs to ${profileName != null?profileName:"this character"} only.`,
  }).appendTo(".context-menu");

  return false;
});