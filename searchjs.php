<?php
include('connection.php');

  $search = $_POST['textbox'];
   //echo $search;
  $sql = ("SELECT book_name,author,book_price,book_quantity FROM book WHERE book_name LIKE '%".$search."%' OR author LIKE '%".$search."%' OR book_price LIKE '%".$search."%'");
  $result = $conn->query($sql);

 if ($result == true){
  while ($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['book_name'] . "</td>";
    echo "<td>" . $row['author'] . "</td>";
    echo "<td>" . $row['book_price'] . "</td>";
    echo "<td>" . $row['book_quantity'] . "</td>";
    echo "</tr>";
 }
}
 else {
  echo "Failed";
}

?>