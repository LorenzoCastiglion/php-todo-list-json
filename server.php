<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-Requested-With");

$file_url = './todo.json';
$todo = '';
$file_text = file_get_contents($file_url);
$list = json_decode($file_text);


if (isset($_POST['todo'])) {

    $newTodo = [
        'text'=> $_POST['todo'], 
        'done'=> false, 
        'hasError'=> false
    ];

        array_unshift($list, $newTodo);

        file_put_contents($file_url, json_encode($list));

}else{

    header('Content-type: application/json');
    echo json_encode($list);

}





?>