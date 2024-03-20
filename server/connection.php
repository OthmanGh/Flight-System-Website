<?php
$mysqli = new mysqli('localhost', 'root', "", "flightsystemwebsite");

if ($mysqli->connect_error) {
    die("Connection Error (" . $mysqli->connect_errno . ')' . $mysqli->connect_error);
}
