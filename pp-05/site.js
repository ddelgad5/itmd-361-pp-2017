function playDoorBell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
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
