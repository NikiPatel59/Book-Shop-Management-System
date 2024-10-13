<?php
 include("connection.php");
  $sql = "select book_quantity from book where book_id=" . $_POST["productId4"];
  $result = $conn->query($sql);

  $newquantity = mysqli_fetch_assoc($result);
  $newquantity["book_quantity"];
   $quan = 1;
   
  $updatequantity = $newquantity["book_quantity"] - $quan;  //To minus quantity from total
  //echo $updatequantity; 

  if($updatequantity >= 0){
    $sql = "update book set book_quantity = ".$updatequantity." where book_id = ".$_POST["productId4"];  //update quantity
    $resultt = $conn->query($sql);
    
    $sql = "select book_quantity from book where book_id=" . $_POST["productId4"];
    $resulttt = $conn->query($sql);

    $row=mysqli_fetch_assoc($resulttt);
    print $row["book_quantity"];
   //if ($resultt === TRUE) {
   // header('Location:booklist.html');
   // exit;
// }
}

   else{
    echo '<script>alert("Please enter valid quantity")</script>';
    //header('Location:sellbook.html');
    //exit;
}

 ?>