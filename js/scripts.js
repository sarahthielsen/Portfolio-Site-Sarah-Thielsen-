console.log("Hey! Welcome to my portfolio site!")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
      var isMobileBreakpoint = window.innerWidth <= 641
  
    if (x.className === 'navtoggle' && isMobileBreakpoint) {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }