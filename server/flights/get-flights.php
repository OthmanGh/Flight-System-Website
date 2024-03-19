<?php

include("../connection.php");

if(isset($_POST['destination'], $_POST['departure_date'], $_POST['arrival_date'], $_POST['price'], $_POST['airline_name'])) {
    $destination = $_POST['destination'];
    $departure_date = $_POST['departure_date'];
    $arrival_date = $_POST['arrival_date'];
    $price = $_POST['price'];
    $airline_name = $_POST['airline_name'];

$query = $mysqli -> prepare('SELECT destination, departure_date, arrival_date, price, airline_name FROM flight');
$query -> execute();
$query -> store_result();
$num_rows = $query -> num_rows();

if ($num_rows == 0){
    $resoponse ['status'] = 'fail';
    $response ["message"] = "No flights available at the moment, make sure to check again later.";
}else{
    $flights =[];
    $query -> bind_result($destination, $departure_date, $arrival_date, $price, $airline_name);
    while ($query -> fetch()){
        $flight = [
            'destination' => $destination,
            'departure_date' => $departure_date,
            'arrival_date' => $arrival_date,
            'price' => $price,
            'airline_name' => $airline_name
        ];
        $flights[] = $flight;
    }
    $response['status'] = "success";
    $reponse['flights'] = $flights;
    
    
}    
} else {
    $response['status'] = 'fail';
    $response['message'] = 'Required parameters are missing.';
}

echo json_encode($response);