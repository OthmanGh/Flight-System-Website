<?php

include("");

$query = $mysqli->prepare('SELECT * FROM flights');
$query->execute();
$query->store_result();
$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['status'] = 'No Flight Found';
} else {
    $flight = [];
    $query->bind_result($flight_id, $destination, $departure_date, $arrival_date, $departure_airport, $arrival_airport, $price, $airline_id);

    while ($query->fetch()) {
        $flight = [
            'flight_id' => $flight_id,
            'departure_date' => $departure_date,
            'arrival_date' => $arrival_date,
            'price' => $price,
            'airline_id' => $airline_id,
            'departure_airport' => $departure_airport,
            'arrival_airport' => $arrival_airport,
            'destination' => $destination,
        ];

        $flights[] = $flight;
    }

    $response['status'] = 'success';
    $response['flights'] = $flights;
}

echo json_encode($response);
