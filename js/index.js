//refresh button for tests in mobile - ctrlR for mobile
$( "<div class='position-absolute position-fixed top-50 end-0 translate-middle-y' style='z-index:1040;'><button type='button' class='btn btn-info refresh-del'><div class='spinner-grow spinner-grow-sm text-light' role='status'></div></button></div>" ).prependTo( "body" );
$(".refresh-del").click(function(){
  window.location.reload(true);
});
