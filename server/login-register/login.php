<?php
include("../connection.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

///* this'll be implemented later
// $query->bind_result($id, $username, $email, $hashed_password, $role);
// $query->fetch();
// $num_rows = $query->num_rows();


// if ($num_rows === 1) {
//     if (password_verify($password, $hashed_password)) {
//         $response['status'] = "success";
//         $response['id'] = $id;
//         $response['username'] = $username;
//         $response['email'] = $email;
//     } else {
//         $response['status'] = 'failed';
//         $response['messsage'] = 'incorrect credentials';
//     }
// } else {
//     $response['status'] = 'fail';
//     $responsen['message'] = 'user not found';
// }

// echo json_encode($response);

$query = $mysqli->prepare('select id, username, email,  password, role FROM users WHERE email=?');
$query->bind_param('s', $email);
$query->execute();
$query->store_result();
$query->bind_result($id, $username, $email, $password, $role);
$query->fetch();
$num_rows = $query->num_rows();

if ($num_rows == 1) {
    $response['status'] = "success";
    $response['id'] = $id;
    $response['username'] = $username;
    $response['email'] = $email;
} else {
    $response['status'] = 'fail';
    $responsen['message'] = 'user not found';
}
echo json_encode($response);
