window.onload = function(){
typeWrite();
  start();

  $(function() {
    $('body').removeClass('fade-out');
  });
}
//typewrite my name
function typeWrite(){
var typed = new Typed("#typed", {
    strings: ["SHAUN ^100 ANDERSON."],
    typeSpeed: 150,
    showCursor: false,
    startDelay: 400,
  });
}
function start(){
var typed = new Typed("#typed2", {
  strings: ["Who Am I?"],
//   smartBackspace: true,
//   backDelay:2500,
  //loop: true,
  typeSpeed: 100,
  startDelay: 7500,
  showCursor: true,
  cursorChar: '|',
});
}
