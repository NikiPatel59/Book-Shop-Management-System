 $(document).ready (function(){
 $('#book').validate({
  rules: {
   bookname: {
   required: true,
   checkbookname: true,
 },
   authorname: {
   required: true,
   checkauthorname: true,
 },
   price: {
   required: true,
   checkprice: true,
 },
   quantity: {
   required: true,
   checkquantity: true,
 },
},
   messages: {
   bookname:{
   required:'This field is required <br>',
   checkbookname: 'This is invalid <br>',
   },
   authorname:{
   required:'This field is required <br>',
   checkauthorname: 'This is invalid <br>',
   },
   price:{
   required:'This field is required <br>',
   checkprice: 'This is invalid <br>',
   },
   quantity:{
   required:'This field is required <br>',
   checkquantity: 'This is invalid <br>',
   },
   
   
},
  submitHandler: function(form) {
   form.submit();
  }
 });
 $.validator.addMethod("checkbookname",function(value, element) {
     return /^[A-Za-z-:!&\s]+$/.test(value);
 });
 $.validator.addMethod("checkauthorname",function(value, element) {
     return /^[A-Za-z.\s]+$/.test(value);
 });
 $.validator.addMethod("checkprice",function(value, element) {
     return /^[0-9\s]+$/.test(value);
 });
 $.validator.addMethod("checkquantity",function(value, element) {
     return /^[0-9\s]+$/.test(value);
 });
});