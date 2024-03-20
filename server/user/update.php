<?php
include("../../connection.php");

$user_id = $_GET['user_id'];

$email = $_POST['email'];
$password = $_POST['password'];
$name = $_POST['name'];

$user = $mysqli->prepare('UPDATE users SET email=?, password=?, name=? WHERE user_id=?');

$user->bind_param('sssi', $email, $password, $name, $user_id);

if ($user->execute()) {
    $response['status'] = 'Success';
    $response['message'] = 'Data successfully updated';
} else {
    $response['status'] = 'Failed';
}

echo json_encode($response);
?>
