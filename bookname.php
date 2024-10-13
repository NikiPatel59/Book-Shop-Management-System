<?php
include("connection.php");

  $query = "select book_id,book_name from book where author='" . $_POST["productId1"] ."'" ;
  $resultt = $conn->query($query);
  echo "<option value=123>Select form below options</option>";
  while($bookname = mysqli_fetch_array($resultt))
          {
             echo "<option value='".$bookname['book_id']."'>".$bookname['book_name']."</option>";
          }
?>