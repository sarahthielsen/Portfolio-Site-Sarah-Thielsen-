console.log("Hey! Welcome to my portfolio site!")
function menuToggle() {
    var x =document.getElementById('myNavtoggle');
    x.className += ' responsive';
    if(x.className === 'navToggle') {  //browser checks if class name of x is navToggle, if yes - it adds responsive to className
    x.className += ' responsive';
    } else {
        x.className = 'navToggle';
    }
}