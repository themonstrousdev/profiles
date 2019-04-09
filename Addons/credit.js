$(document).ready(() => {
  $(document).keydown(function (event) {
    if (event.keyCode == 123) {
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73 || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
      return false;
    }
  });
  document.addEventListener('contextmenu', function (event) {
    {}
    event.preventDefault();
  }, false);
  console.log('%cSTOP!', 'color: red; text-shadow: 2px 0px #000, 0px -2px #000, -2px 0px #000, 0px 2px #000;font-size: 7vh; font-weight: 600;font-family:Calibri');
  console.log('%cThis code is either paid for, copyrighted, or both! In an event that you find this, you are already trying to bypass that. Please turn back now and simply ask The Monster (aka Elle) for any question regarding this profile.', 'color: #333; font-size: 3vh;font-family: Calibri;');
  console.log('%cIf you want to know more, go to http://www.themonster.xyz', 'color: #333; font-size: 3vh;font-family: Calibri;');
});