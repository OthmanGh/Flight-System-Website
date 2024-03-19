<?php
$mysqli = new mysqli('localhost', 'root', "", "flightssystemwebsitedb");

if ($mysqli->connect_error) {
    die("Connection Error (" . $mysqli->connect_errno . ')' . $mysqli->connect_error);
}
