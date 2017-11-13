function playDoorBell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
  jQuery('p.hide').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
}

window.onload = function(){
  jQuery(jQuery('audio')).addClass('hide');
};

jQuery('#doorbell').on('click', function () {
  playDoorBell();
});

window.addEventListener("keydown", function(event) {

  switch (event.key) {
    case "d":
      playDoorBell();
    break;
    default:
    return;
  }
},true);
