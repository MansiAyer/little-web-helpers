//preloader
var preload = ""
$( preload ).prependTo( "body" );
//popup if javascript disabled
//popup if browser version is old
//navbar
//footer

//refresh button for tests in mobile - ctrlR for mobile
var ref_btn = "<div class='position-absolute position-fixed top-50 end-0 translate-middle-y' style='z-index:1040;'><button type='button' class='btn btn-info refresh-del'><div class='spinner-grow spinner-grow-sm text-light' role='status'></div></button></div>"
$( ref_btn ).prependTo( "body" );
$(".refresh-del").click(function(){
  window.location.reload(true);
});


//hackerrain
$( document ).ready(function() {
  var x="";
  var y="";
  for (var i=0;i<94;i++) {
    x += String.fromCharCode(i + 32);
      y += String.fromCharCode(i + 161);
  }
  
    for (var i = x.length - 1; i >= 0; i--) {
        var a = Math.floor((Math.random() * 100) + 1).toString()+"%";
        var b = Math.floor((Math.random() * 10) + (Math.random() * 25)).toString();
        var temp = document.createElement("MARQUEE");
        temp.innerHTML = x[i];    
        temp.className = "hacker";
        temp.style.left = a;
        temp.setAttribute("direction","down");
        temp.setAttribute("scrollamount",b);
        $(".hackerrain").prepend(temp);
        
    }

  $("marquee.hacker").css({
    "z-index": "1020",
        "color": "#5CC400",
        "text-shadow": "0px 0px 5px #85F702",
        "position": "absolute",
        "font-family": "monospace",
        "height": "100vh",
        "width": "fit-content",
        "top": "0%"
  });
});
