<?php

include("../connection.php");

if(isset($_POST['destination'], $_POST['departure_date'], $_POST['arrival_date'], $_POST['price'], $_POST['airline_name'])) {
    $destination = $_POST['destination'];
    $departure_date = $_POST['departure_date'];
    $arrival_date = $_POST['arrival_date'];
    $price = $_POST['price'];


$query = $mysqli -> prepare('SELECT destination, departure_date, arrival_date, price FROM flights');
$query -> execute();
$query -> store_result();
$num_rows = $query -> num_rows();

if ($num_rows == 0){
    $response ['status'] = 'fail';
    $response ["message"] = "No flights available at the moment, make sure to check again later.";
}else{
    $flights =[];
    $query -> bind_result($destination_result, $departure_date_result, $arrival_date_result, $price_result);
    while ($query -> fetch()){
        $flight = [
            'destination' => $destination_result,
            'departure_date' => $departure_date_result,
            'arrival_date' => $arrival_date_result,
            'price' => $price_result
        ];
        $flights[] = $flight;
    }
    $response['status'] = "success";
    $response['flights'] = $flights;
    
    
}    
} else {
    $response['status'] = 'fail';
    $response['message'] = 'Required parameters are missing.';
}

echo json_encode($response);