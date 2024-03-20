<?php
include('../../connection.php');

$flight_id = $_GET['flight_id'];

$query_delete = $mysqli->prepare('DELETE FROM flights WHERE flight_id = ?');
$query_delete->bind_param('i', $flight_id);

if ($query_delete->execute()) {
    $query_select = $mysqli->prepare('SELECT * FROM flights');
    $query_select->execute();
    $result = $query_select->get_result();

    $flights = array();
    while ($row = $result->fetch_assoc()) {
        $flights[] = $row;
    }

    $response['status'] = 'success';
    $response['message'] = 'Flight is deleted successfully';
    $response['flights'] = $flights;
} else {
    $response['status'] = 'fail';
    $response['message'] = 'Failed to delete Flight';
}

echo json_encode($response);
