$(document).ready(function(){
  $('#search').click(function() {
   var gettextbox = $('#searchbox').val();
    $.ajax ('searchjs.php',{
    type: 'POST',  // http method
    data: { textbox: gettextbox }, 
    success: function (data) {
    $("#TextBoxContainer").html(data);
    }
  });
 });

  $('#booknamehead').click(function() {
    $.ajax ('sortbooknameasc.php',{
    type: 'POST',  // http method
    success: function (data) {
    $("#TextBoxContainer").html(data);
    }
  });
    $.ajax ('sortbooknamedsc.php',{
    type: 'POST',  // http method
    success: function (data) {
    $("#TextBoxContainer").html(data);
    }
  });
 });

  $('#authorhead').click(function() {
    $.ajax ('sortauthorasc.php',{
    type: 'POST',  // http method
    success: function (data) {
    $("#TextBoxContainer").html(data);
 }
});
    $.ajax ('sortauthordsc.php',{
    type: 'POST',  // http method
    success: function (data) {
    $("#TextBoxContainer").html(data);
   }
  });
 });

   $('#pricehead').click(function() {
    $.ajax ('sortpriceasc.php',{
    type: 'POST',  // http method
    success: function (data) {
    $("#TextBoxContainer").html(data);
 }
});
    $.ajax ('sortpricedsc.php',{
    type: 'POST',  // http method
    success: function (data) {
    $("#TextBoxContainer").html(data);
   }
  });
 });

   $('#quantityhead').click(function() {
    $.ajax ('sortquantityasc.php',{
    type: 'POST',  // http method
    success: function (data) {
    $("#TextBoxContainer").html(data);
 }
});
    $.ajax ('sortquantitydsc.php',{
    type: 'POST',  // http method
    success: function (data) {
    $("#TextBoxContainer").html(data);
   }
  });
 });
});


