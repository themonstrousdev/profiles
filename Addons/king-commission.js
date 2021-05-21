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
  
  console.image("https://i.imgur.com/os3SY7T.png");
  
  console.log('%cSTOP!', 'color: red; text-shadow: 2px 0px #000, 0px -2px #000, -2px 0px #000, 0px 2px #000;font-size: 7vh; font-weight: 600;font-family:Calibri');
  
  console.log('%cThis code is paid for! In an event that you find this, you are already trying to bypass that. Please turn back now and simply ask Kingdom Corp for any question regarding this profile.', 'font-size: 3vh;font-family: Calibri;');
  
  console.log('%cIf you want to know more, go to https://roleplay.chat/profile.php?user=Kingdom+Corp', 'font-size: 3vh;font-family: Calibri;');
 

  $("head").append(`
  <link href="https://themonstrousdev.github.io/styles/fancy-fonts.css" rel="stylesheet">
  <link href="https://themonstrousdev.github.io/styles/google-fonts.css" rel="stylesheet">`);

  $("<style>", {
    id: "context-menu",
    html: `
    .context-menu {
      position: absolute;
      background: #eee;
      display: flex;
      flex-flow: column wrap;
      width: 13vw;
      box-shadow: .5vh .5vh .5vh rgba(0, 0, 0, 0.3);
      animation: context-open-new 300ms cubic-bezier(0, 0, 0, 1);
      transform-origin: top;
      color: black;
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
      font-family: "Roboto", sans-serif !important;
      font-size: 1.7vh;
      width: 100%;
      border: none;
      font-style: normal;
      text-shadow: none;
      text-transform: initial;
      background: transparent;
      border-bottom: .1vh solid #ccc;
      transition: background .2s ease-in-out;
      filter: none;
      font-weight: initial;
    }
    
    .context-menu .context-item.hoverable:hover {
      background-color: rgba(0,0,0,0.1) !important;
    }
    
    .context-menu .context-item.coder {
      background: url(https://i.imgur.com/PaVsQj7.png) .5vw center/auto 90% no-repeat;
      font-family: 'Staatliches';
      text-transform: uppercase;
    }
    
    .context-menu a.context-item {
      color: inherit;
      background: transparent;
      text-decoration: none;
      font-family: "Roboto", sans-serif !important;
      font-size: 1.7vh;
      filter: none;
      font-weight: initial;
    }
    
    #copyMe {
      position: absolute;
      top: -100vh;
      left: -100vh;
    }
    
    body>div:not([class]):not([id]):last-child>div:not([class]):not([id]) {
      display: none;
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
  styles = bodyStyle ? document.body.querySelectorAll("style") : document.head.querySelectorAll("style:not(#context-menu)"),
  hasSelected = window.getSelection().toString(),
  profileName;
  
  if(styles.length > 0) {
    style = styles[styles.length-1].innerHTML,
    pStart = style.includes("FOR:") ? style.search("FOR:") + 4 : null,
    pEnd = new RegExp("\\[").test(style) ? style.search("\\[") - 1 : null;
    
    profileName = pStart && pEnd ? style.slice(pStart, pEnd) : null;
  }

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

  if(hasSelected) {
    $("<a>", {
      class: "context-item hoverable",
      style: "display: flex; flex-flow: row wrap; justify-content: space-between;align-items: center;align-content: center;",
      html: "<span>Copy</span> <span style='opacity: .6;font-size: 80%'>Ctrl + C</span>",
      click: function() {
        $("<input>", {
          id: "copyMe",
          value: hasSelected
        }).appendTo("body")
        $("#copyMe").select();
        document.execCommand("copy");
        setTimeout(() => {
          $("#copyMe").remove();
        }, 300);
      }
    }).appendTo(".context-menu");
  }

  $("<a>", {
    class: "context-item coder hoverable",
    html: "&copy; Kingdom Corp",
    href: "https://roleplay.chat/profile.php?user=Kingdom+Corp",
    target: "_blank",
    rel: "noopener noreferrer"
  }).appendTo(".context-menu");

  $("<div>", {
    class: "context-item",
    html: `This code belongs to ${profileName != null?profileName:"this character"} only.`,
  }).appendTo(".context-menu");

  return false;
});
