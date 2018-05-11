window.onload = function(){
typeWrite();
start();

  $(function() {
    $('body').removeClass('fade-out');
  });

  //once loaded, delay the move to the who am i section (jquery)
  $("html, body").delay(3200).animate({
    scrollTop: $('#target').offset().top 
}, 2000);
  
}
//when page is reloaded again it is moved to the top of the page
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
//typewrite my name
function typeWrite(){
var typed = new Typed("#typed", {
    strings: ["SHAUN ^100 ANDERSON"],
    typeSpeed: 100,
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
  typeSpeed: 120,
  startDelay: 5500,
  showCursor: true,
  cursorChar: '|',
});
}
