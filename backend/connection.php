<?php

$mysqli = new mysqli("localhost", "root", "null", "flightSystemWebsite");

if ($mysqli->connect_error) {
    die("Connection failed" . $mysqli->connect_error);
}
