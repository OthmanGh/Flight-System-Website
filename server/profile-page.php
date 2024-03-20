<?php
include('../connection.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$user_id = 'dummydata';


$query_profile = $mysqli->prepare('SELECT address, phone_number, first_name, last_name, gender, preferences FROM user_profile WHERE user_id=?');
$query_profile->bind_param('s', $user_id);
$query_profile->execute();
$query_profile->store_result();
$num_profile_rows = $query_profile->num_rows();

$query_auth = $mysqli->prepare('SELECT username, email, password FROM users WHERE user_id=?');
$query_auth->bind_param('s', $user_id);
$query_auth->execute();
$query_auth->store_result();
$num_auth_rows = $query_auth->num_rows();


$query_booking = $mysqli->prepare('SELECT seat_number, booking_date, payment_status FROM bookings WHERE user_id=?');
$query_booking->bind_param('s', $user_id);
$query_booking->execute();
$query_booking->store_result();
$num_booking_rows = $query_booking->num_rows();

$response = [];

if ($num_profile_rows > 0 && $num_auth_rows > 0 && $num_booking_rows > 0) {

    $profile_data = [];
    $query_profile->bind_result($address, $phone_number, $first_name, $last_name, $gender, $preferences);
    while ($query_profile->fetch()) {
        $profile_data = [
            'address' => $address,
            'phone_number' => $phone_number,
            'first_name' => $first_name,
            'last_name' => $last_name,
            'gender' => $gender,
            'preferences' => $preferences
        ];
    }

    $auth_data = [];
    $query_auth->bind_result($username, $email, $password);
    while ($query_auth->fetch()) {
        $auth_data = [
            'username' => $username,
            'email' => $email,
            'password' => $password
        ];
    }

    $booking_data = [];
    $query_booking->bind_result($seat_number, $booking_date, $payment_status);
    while ($query_booking->fetch()) {
        $booking_data[] = [
            'seat_number' => $seat_number,
            'booking_date' => $booking_date,
            'payment_status' => $payment_status
        ];
    }

    $response["status"] = "Success";
    $response["profile_data"] = $profile_data;
    $response["auth_data"] = $auth_data;
    $response["booking_data"] = $booking_data;
} else {
    $response["status"] = "No Data Found";
}

echo json_encode($response);
?>
