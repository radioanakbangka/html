//-------Animasi-hide-show2.js--------
//-------santa-mars.blogspot.com--------

$(function() {
  $('a').click(function() {
   if( $("#loadhalaman1,#loadhalaman2").is(":hidden") ) {
    $("#loadhalaman1,#loadhalaman2").fadeIn(5).delay(1000).fadeOut(1000);
   }
   else
   {
    $("#loadhalaman1,#loadhalaman2").hide(10);
   }
   });
  });

 $(function() {
  $('#klik-bawah-data').click(function() {
   if( $(".header-outer,#blog-pager,#sidebar-right-1,.post-outer,.date-header,.round3.black50.post-header-line-line").is(":hidden") ) {
    $(".header-outer,#blog-pager,#sidebar-right-1,.post-outer,.date-header,.round3.black50.post-header-line-line").show(1000);
   }
   else
   {
    $(".header-outer,#blog-pager,#sidebar-right-1,.post-outer,.date-header,.round3.black50.post-header-line-line").hide(1000);
   }
   });
  });

 $(function() {
  $('#home-windows').click(function() {
   if( $("#jantung-santa").is(":hidden") ) {
    $("#jantung-santa").fadeIn(10);
   }
   else
   {
    $("#jantung-santa").fadeOut(10);
   }
   });
  });

 $(function() {
  $('#start-baru,.welkiri').click(function() {
   if( $("#jantung-windows").is(":hidden") ) {
    $("#jantung-windows").fadeIn(10);
   }
   else
   {
    $("#jantung-windows").fadeOut(10);
   }
   });
  });

$(document).ready(function(){
    $("#comment-slide").click(function(){
        $(".custom-comments").slideToggle("slow");
        $(this).toggleClass("active");
        return false;
    });
});