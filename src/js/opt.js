$(".izi").iziModal({
  headerColor: '#88f',
  background: '#fff',
  arrowKeys: false,
  navigateArrows: false,
  autoOpen: 0,
  width: 600,
  top: null,
  bottom: null,
  borderBottom: true,
  padding: 0,
  radius: 3,
});

$(function(){
  $("#phone").mask("+7 (999) 999-99-99");
});