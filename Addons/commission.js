$(window).on("load", ()=>{
  console.log("%cBIG YEEt", "color: transparent; background: url(https://www.themonster.xyz/assets/main-logo.png) center/contain no-repeat; font-size: 20vw");

  console.log('%cSTOP!', 'color: red; text-shadow: 2px 0px #000, 0px -2px #000, -2px 0px #000, 0px 2px #000;font-size: 7vh; font-weight: 600;font-family:Calibri');
  
  console.log('%cThis code is either paid for, copyrighted, or both! In an event that you find this, you are already trying to bypass that. Please turn back now and simply ask The Monster (aka Elle) for any question regarding this profile.', 'color: #333; font-size: 3vh;font-family: Calibri;');
  
  console.log('%cIf you want to know more, go to http://www.themonster.xyz', 'color: #333; font-size: 3vh;font-family: Calibri;');

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
    }
    
    @keyframes context-open-new {
      0% {
        transform: scale(1, 0.8);
      }
    }
    
    .context-menu .context-item {
      padding: 1vh 5vh;
      text-align: center;
      font-family: "Share", sans-serif;
      font-size: 2.5vh;
      width: 100%;
      border-bottom: .1vh solid #777;
      transition: background-color .2s ease-in-out;
    }
    
    .context-menu .hoverable.context-item:hover {
      background-color: #777;
    }
    
    .context-menu .context-item.coder {
      background: url(https://www.themonster.xyz/assets/main-logo.png) .5vw center/auto 60% no-repeat;
    }
    
    .context-menu a.context-item {
      color: inherit;
      text-decoration: none;
      padding: 0;
      border: none;
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
  pStart = inner.search("FOR:") + 4,
  pEnd = inner.search("RPC Profile") - 1,
  profileName = inner.slice(pStart, pEnd),
  rStart = inner.search("REGISTRATION:") + 8,
  rEnd = inner.search(";"),
  registration = inner.slice(rStart, rEnd);

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
    html: `This code belongs to ${profileName} only.`,
  }).appendTo(".context-menu");

  return false;
});