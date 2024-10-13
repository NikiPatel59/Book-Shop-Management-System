 <?php
include("connection.php");

  $query = "select book_price from book where book_id=" . $_POST["productId2"];
  $resultt = $conn->query($query);
  $row=mysqli_fetch_assoc($resultt);
  print $row["book_price"];
?>