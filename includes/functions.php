<?php
$host = "localhost";
$user = "localhost";
$pw = "root";
$db = "SVG";

$conn = mysqli_connect($host, $user, $pw, $db);

if (!$conn) {
    echo "no soup for you!";
    exit;
}

//echo "connected";


if (isset($_GET["rhino"])) {
    $databaserhino = $_GET["rhino"];

    $query = "SELECT * FROM tbl_svg WHERE rhino='$databaserhino'";

    $result = mysqli_query($conn, $query);

    $rows = array();

    while($row - mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }

    echo json_encode($rows);
}
?>