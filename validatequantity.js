  $(document).ready (function(){
 $('#sellbook').validate({
   rules: {
   quantity: {
   required: true,
   min:1,
   checkquan: true,
 }
   },
 messages: {
   quantity:{
   required:'This field is required <br>',
   min: 'This is invalid <br>',
   checkquan: 'This is invalid <br>',
   },
   },
 });
 $.validator.addMethod("checkquan",function(value, element) {
     return /^[0-9\s]+$/.test(value);
 });
  });