<?php
include("connection.php");

   $sql = "INSERT INTO book (book_name,author,book_price,book_quantity)" .
          "VALUES ( '" . $_POST["bookname"] . " ','".$_POST["authorname"] . "'," . $_POST["price"] . "," . $_POST["quantity"] . ")";
   $result = $conn->query($sql);
    if($result == TRUE){
      print_r($result);
      header('Location:booklist.html');
 }
?>