<?php



$todo = $_POST['todo'];


header('Content-type: application/json');
echo json_encode($todo);


?>