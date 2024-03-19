<?php
include("connection.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");


$query = $mysqli->prepare('select departure_airport, arrival_airport, departure_date,  arrival_date FROM flights WHERE departure_airport=?, arrival_airport=?, departure_date=?,  arrival_date=?');
$query->bind_param('ssss', $departure_airport, $arrival_airport, $departure_date, $arrival_date);
$query->execute();
$query->store_result();
$query->bind_result($departure_airport, $arrival_airport, $departure_date, $arrival_date);
$query->fetch();
$num_rows = $query->num_rows();
