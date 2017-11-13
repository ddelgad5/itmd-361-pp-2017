window.onload = function(){
  jQuery(jQuery('audio')).addClass('hide');
};

jQuery('#doorbell').on('click', function () {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
});

window.addEventListener("keydown", function(event) {

  switch (event.key) {
    case "d":
      var doorbell = new Audio('media/doorbell.mp3');
      doorbell.play();
    break;
    default:
    return;
  }
},true);
