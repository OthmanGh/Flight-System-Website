<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

include("../connection.php");

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$check_email = $mysqli->prepare('SELECT email FROM users WHERE email = ?');
$check_email->bind_param('s', $email);
$check_email->execute();
$check_email->store_result();

if ($check_email->num_rows() == 1) {
    $response['status'] = 'fail';
    $response['message'] = 'User already exists';
} else {
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $role = 'member';
    $query = $mysqli->prepare('INSERT INTO users(username, password, email, role) VALUES(?,?,?,?);');
    $query->bind_param('ssss', $username, $hashed_password, $email, $role);
    if ($query->execute()) {
        $response['status'] = 'success';
        $response['message'] = "$username has been created successfully";
    } else {
        $response['status'] = 'fail';
        $response['message'] = 'Failed to create user';
    }
}

echo json_encode($response);
