<?php
include('../connection.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$query = $mysqli->prepare("SELECT airline_id, airline_name FROM airlines");
$query->execute();
$query->store_result();
$num_rows = $query->num_rows();


if ($num_rows == 0) {
    $response["status"] = "No Airlines";
} else {
    $airlines = [];
    $query->bind_result($airline_id, $airline_name);
    while ($query->fetch()) {
        $airline = [
            'id' => $airline_id,
            'name' => $airline_name
        ];
        $airlines[] = $airline;
    }

    $response["status"] = "Success";
    $response["allAirlines"] = $airlines;
}

echo json_encode($response);
