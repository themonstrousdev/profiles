$(document).keydown(function (event) {
  if (event.keyCode == 123) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73 || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
    return false;
  }
});

$(window).ready(()=>{
  $("head").append(`
  <link href="https://www.themonster.xyz/styles/fancy-fonts.css" rel="stylesheet">
  <link href="https://www.themonster.xyz/styles/google-fonts.css" rel="stylesheet">`);

  var bodyStyle = document.body.querySelectorAll("style").length > 0,
  styles = bodyStyle ? document.body.querySelectorAll("style") : document.head.querySelectorAll("style:not(#context-menu):not(#code-overlay)"),
  style = styles[styles.length-1].innerHTML,
  sStart = style.includes("SOURCE:") ? style.search("SOURCE:") + 7 : null,
  sEnd = sStart ? style.indexOf("-", sStart) : 0,
  source = sStart && sEnd? style.slice(sStart, sEnd) : null,
  rStart = style.includes("REGISTRATION:") ? style.search("REGISTRATION:", sEnd) + 13 : null,
  rEnd = style.search(";") ? style.search(";") : null,
  registration = rStart ? style.slice(rStart, rEnd) : null,
  showCode = false;

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
      text-decoration: none;
      font-family: "Share", sans-serif;
      font-size: 2.5vh;
      background: transparent;
    }`
  }).appendTo("head");

  $("<style>", {
    id: "code-overlay",
    html: `
    :root {
      --blurple: #7289DA;
      --greyple: #99AAB5;
      --dark: #2C2F33;
      --green: #43b581;
    }

    .texture {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
      mask: url(../assets/concrete-texture.png);
      -webkit-mask: url(https://www.themonster.xyz/assets/concrete-texture.png);
      opacity: .5;
    }

    .green {
      color: var(--green)
    }

    #code {
      position: absolute;
      top: 53%;
      left: 50%;
      height: 80vh;
      width: 80vw;
      background: #222;
      border-radius: 1vh;
      border: 1px solid var(--dark);
      box-shadow: 0 2vh 4vh rgba(0,0,0,0.4);
      transform: translate(-50%, -50%);
      animation: fall 1s cubic-bezier(.4, 0, 0, 1.2) forwards;
      z-index: 1;
    }
    
    @keyframes fall {
      from {
        transform: translate(-50%, -170%);
      }
    }
    
    #code .exit {
      position: absolute;
      top: 1vw;
      right: 1vw;
      height: 1.5vw;
      width: 1.5vw;
      background: url(https://monstrousdev.github.io/themes/assets/svgs/cancel.svg) center/100% no-repeat;
      filter: invert(30%);
      cursor: pointer;
      transition: all .2s ease-in-out;
    }
    
    #code .exit:hover {
      filter: invert(60%);
    }
    
    #code .codeWrap {
      position: absolute;
      top: 3vw;
      left: 3vw;
      right: 3vw;
      bottom: 3vw;
      height: unset;
      width: unset;
      overflow: hidden;
      display: block;
      background: rgba(0,0,0,.1);
      box-shadow: inset 0vh 1vh 2vh rgba(0,0,0,0.4);
    }
    
    #code .codeScroller {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      padding: 0;
      white-space: pre;
    }
    
    #code textarea {
      background: transparent;
      border: transparent;
      outline: none;
      height: 100%;
      width: calc(100% + 1.7vw);
      padding: 5vh;
      font-family: monospace;
      font-size: 2.1vh;
      resize: none;
      color: #ddd;
    }
    
    #code .choices {
      position: absolute;
      bottom: 1.5vh;
      width: fit-content;
      display: flex;
      flex-flow: row wrap;
      left: 50%;
      transform: translateX(-50%);
    }
    
    #code .choice {
      color: var(--blurple);
      transition: all .2s ease-in-out;
      align-self: center;
      margin: 0 2vh;
      cursor: pointer;
      font-family: "Share", sans-serif;
    }
    
    #code .choice:hover {
      color: var(--greyple);
    }`
  }).appendTo("head");

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

  console.log('%cHi, there!', 'color: green; text-shadow: 2px 0px #000, 0px -2px #000, -2px 0px #000, 0px 2px #000;font-size: 7vh; font-weight: 600;font-family:Calibri');

  console.log('%cThis code is either a copyrighted code but is free for you to use. \nThough, %cplease do not remove the credit. \n%cOtherwise, have fun using it!', 'font-size: 3vh;font-family: Calibri;', 'color: red; font-weight: bold;font-family: Calibri;font-size: 3vh;', 'font-size: 3vh;font-family: Calibri;');
  
  console.log("%cIf you run into any trouble using it, contact %cDeum %con RPC or DM her on Discord: Lil Monster#557", 'font-size: 3vh;font-family: Calibri;', "font-weight: bold; font-size: 3vh;font-family: Calibri;", "font-size: 3vh;font-family: Calibri;");

  console.log(`%cYou can find the source code here: ${source}\nAn easier way would be to right click on the profile and select "View Code Source"`, 'font-size: 3vh;font-family: Calibri;');

  $(window).click(()=> {
    if($(".context-menu")) {
      $(".context-menu").remove();
    };
  });
  
  $(window).contextmenu((e)=> {
    if($(".context-menu")) {
      $(".context-menu").remove();
    };
    
    var winHeight = $(window).innerHeight(),
    winWidth = $(window).innerWidth(),
    cmTop, cmLeft,
    hasSelected = window.getSelection().toString();
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

    if(registration != null) {
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
      html: "This code is free for personal use."
    }).appendTo(".context-menu");

    if(source != null) {
      $("<div>", {
        class: "context-item hoverable",
        html: `View Code Source`,
        click: function () {
          if(showCode) {
            return;
          }

          showCode = true;
          $.ajax({
            url: source,
            dataType: 'text',
            success: function (data) {
              $("body").append($("<div />", {
                id: "code"
              }));
  
              $("<div />", {
                class: "texture"
              }).appendTo("#code");
  
              $("<div />", {
                class: "codeWrap"
              }).appendTo("#code");
  
              $("<div />", {
                class: "codeScroller"
              }).appendTo("#code .codeWrap");
  
              $("<textarea>", {
                text: data,
                readonly: ""
              }).appendTo("#code .codeScroller");
  
              $("<div />", {
                class: "exit",
                click: function() {
                  showCode = false;
                  $("#code").fadeOut(200);
                  setTimeout(function(){
                    $("#code").remove();
                  }, 200);
                }
              }).appendTo("#code");
  
              $("<div />", {
                class: "choices"
              }).appendTo("#code")
  
              $("<div />", {
                class: "choice",
                html: "CSS Only",
                click: function() {
                  var cssEnd = data.search("/style") - 1,
                  subString = data.slice(7, cssEnd);
  
                  $("#code textarea").val(subString);
                }
              }).appendTo("#code .choices");
  
              $("<div />", {
                class: "choice",
                html: "HTML Only",
                click: function() {
                  var htmlStart = data.search("/style") + 7,
                  subString = data.slice(htmlStart);
  
                  $("#code textarea").val(subString);
                }
              }).appendTo("#code .choices");
  
              $("<div />", {
                class: "choice",
                html: "Show Full Code",
                click: function() {
                  $("#code textarea").val(data);
                }
              }).appendTo("#code .choices");
  
              $("<div />", {
                class: "choice",
                html: "Copy Code",
                click: function() {
                  $("#code textarea").select();
                  document.execCommand("copy");
                  $(this).css("color", "var(--green)");
                  $(this).html("Code copied!");
                  if (window.getSelection) {
                    window.getSelection().removeAllRanges();
                  } else if (document.selection) {
                    document.selection.empty();
                  }
  
                  setTimeout(function(){
                    $("#code .choices .choice:last-child").html("Copy Code");
                    $("#code .choices .choice:last-child").removeAttr("style");
                  }, 2000);
                }
              }).appendTo("#code .choices");
            },
            error: function() {
              console.log("Welp....");
            }
          })
        }
      }).appendTo(".context-menu");
    }

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
  
    return false;
  });


})
