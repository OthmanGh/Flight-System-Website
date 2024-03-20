<?php
include('../../connection.php');

$flight_id = $_GET['flight_id'];

$query = $mysqli->prepare('DELETE FROM flights WHERE flight_id =?');
$query->bind_param('i', $flight_id);


if ($query->execute()) {
    $response['success'] = 'success';
    $response['message'] = "Flight is deleted successfully";
} else {
    $response['status'] =  'fail';
    $response['message'] = 'Failed to delete Flight';
}


echo json_encode($response);
