<?php
// print $_GET['input'];
if (isset($_GET['input'])) {
    if ($_GET['input'] == "") {
        $input = "";
    } else {
        $input = $_GET['input'] . "\n";
    }
    $filep = fopen('chat.txt', 'a');
    fputs($filep, $input);
    fclose($filep);
}
$data = file('chat.txt');
//print_r($data);

header('Content-type: application/json');
echo json_encode($data);
