$(document).ready(function(){
 $('#author').change(function() {
   var getProductId1 = $('#author').val();
   alert (getProductId1);
   $.ajax ('bookname.php',{
    type: 'POST',  // http method
    data: { productId1: getProductId1 },  // data to submit
    success: function (data) {
    alert (data);
   $('#book').html(data);
  }
 });
});

$('#book').change(function() {
   var getProductId2 = $('#book').val();
   alert (getProductId2);
   $.ajax ('price.php',{
    type: 'POST',  // http method
    data: { productId2: getProductId2 },  // data to submit
    success: function (data) {
    alert (data);
   $('#price').val(data);
   }
  });
 });
 $('#book').change(function() {
   var getProductId3 = $('#book').val();
   alert (getProductId3);
   $.ajax ('quantity.php',{
    type: 'POST',  // http method
    data: { productId3: getProductId3 },  // data to submit
    success: function (data) {
    alert (data);
   var quan = $('#quantity').val(data);
   }
  });
 });
 $('#submit1').click(function() {
   var getProductId4 = $('#book').val();
   alert (getProductId4);
   $.ajax ('sell.php',{
    type: 'POST',  // http method
    data: { productId4: getProductId4 },  // data to submit
    success: function (data) {
      alert (data);
      window.location = "booklist.html";
   }
  });
 });
});