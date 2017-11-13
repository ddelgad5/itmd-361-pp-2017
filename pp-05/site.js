window.onload = function(){
  jQuery(jQuery('audio')).addClass('hide');
};

jQuery('#doorbell').on('click', function () {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
});
