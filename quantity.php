 <?php
include("connection.php");

  $query = "select book_quantity from book where book_id=" . $_POST["productId3"];
  $resultt = $conn->query($query);
  $row=mysqli_fetch_assoc($resultt);
  print $row["book_quantity"];
?>  