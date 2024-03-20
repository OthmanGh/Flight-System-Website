-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2024 at 12:56 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flightsystemwebsite`
--

-- --------------------------------------------------------

--
-- Table structure for table `airlines`
--
-- Creation: Mar 19, 2024 at 02:51 AM
--

CREATE TABLE `airlines` (
  `airline_id` int(11) NOT NULL,
  `airline_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELATIONSHIPS FOR TABLE `airlines`:
--

--
-- Dumping data for table `airlines`
--

INSERT INTO `airlines` (`airline_id`, `airline_name`) VALUES
(1, 'Qatar'),
(2, 'Emirates'),
(3, 'Delta'),
(4, 'United'),
(5, 'American');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--
-- Creation: Mar 19, 2024 at 02:51 AM
--

CREATE TABLE `bookings` (
  `booking_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `seat_number` varchar(50) DEFAULT NULL,
  `booking_date` date DEFAULT NULL,
  `payment_status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELATIONSHIPS FOR TABLE `bookings`:
--   `user_id`
--       `users` -> `user_id`
--

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`booking_id`, `user_id`, `seat_number`, `booking_date`, `payment_status`) VALUES
(1, 1, 'A12', '2024-03-19', 'paid'),
(2, 2, 'B34', '2024-03-20', 'pending'),
(3, 3, 'C56', '2024-03-21', 'paid'),
(4, 4, 'D78', '2024-03-22', 'paid'),
(5, 5, 'E90', '2024-03-23', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `flights`
--
-- Creation: Mar 19, 2024 at 09:25 PM
-- Last update: Mar 20, 2024 at 11:48 AM
--

CREATE TABLE `flights` (
  `flight_id` int(11) NOT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `departure_date` datetime DEFAULT NULL,
  `arrival_date` datetime DEFAULT NULL,
  `departure_airport` varchar(3) DEFAULT NULL,
  `arrival_airport` varchar(3) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `airline` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELATIONSHIPS FOR TABLE `flights`:
--

--
-- Dumping data for table `flights`
--

INSERT INTO `flights` (`flight_id`, `destination`, `departure_date`, `arrival_date`, `departure_airport`, `arrival_airport`, `price`, `airline`) VALUES
(18, 'London', '2024-04-10 08:00:00', '2024-04-10 10:30:00', 'JFK', 'LHR', 500.00, 'British Airways'),
(19, 'Paris', '2024-04-15 10:30:00', '2024-04-15 13:00:00', 'LAX', 'CDG', 600.00, 'Air France'),
(23, 'Los Angeles', '2024-04-25 09:00:00', '2024-04-25 12:00:00', 'JFK', 'LAX', 400.00, 'Delta Airlines'),
(24, 'Berlin', '2024-05-05 11:30:00', '2024-05-05 14:30:00', 'CDG', 'TXL', 550.00, 'Lufthansa'),
(25, 'Rome', '2024-05-15 13:00:00', '2024-05-15 16:30:00', 'LHR', 'FCO', 620.00, 'Alitalia'),
(26, 'Madrid', '2024-06-01 10:45:00', '2024-06-01 13:30:00', 'JFK', 'MAD', 700.00, 'Iberia'),
(27, 'Seoul', '2024-06-15 20:30:00', '2024-06-16 06:00:00', 'LAX', 'ICN', 950.00, 'Korean Air'),
(28, 'Shanghai', '2024-07-05 08:15:00', '2024-07-05 18:30:00', 'JFK', 'PVG', 1100.00, 'China Eastern Airlines'),
(31, 'Singapore', '2024-08-25 22:00:00', '2024-08-26 10:30:00', 'JFK', 'SIN', 1250.00, 'Singapore Airlines'),
(32, 'Mumbai', '2024-09-10 07:30:00', '2024-09-10 15:45:00', 'LHR', 'BOM', 900.00, 'Air India'),
(33, 'New York', '2024-04-10 08:00:00', '2024-04-10 10:30:00', 'LHR', 'JFK', 550.00, 'American Airlines'),
(34, 'Los Angeles', '2024-04-15 10:30:00', '2024-04-15 13:00:00', 'CDG', 'LAX', 650.00, 'Delta Airlines'),
(35, 'Beijing', '2024-05-01 13:45:00', '2024-05-02 05:30:00', 'NRT', 'PEK', 1100.00, 'China Eastern Airlines'),
(36, 'Rio de Janeiro', '2024-05-20 20:00:00', '2024-05-21 15:30:00', 'SYD', 'GIG', 1400.00, 'LATAM Airlines'),
(37, 'Cape Town', '2024-06-10 06:15:00', '2024-06-10 14:00:00', 'DXB', 'CPT', 850.00, 'South African Airways'),
(38, '[object HTMLInputElement]', NULL, NULL, NULL, NULL, 0.00, '[object HTMLInputElement]'),
(39, '[object HTMLInputElement]', NULL, NULL, NULL, NULL, 0.00, '[object HTMLInputElement]');

-- --------------------------------------------------------

--
-- Table structure for table `flight_statuses`
--
-- Creation: Mar 19, 2024 at 02:51 AM
--

CREATE TABLE `flight_statuses` (
  `status_id` int(11) NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELATIONSHIPS FOR TABLE `flight_statuses`:
--

--
-- Dumping data for table `flight_statuses`
--

INSERT INTO `flight_statuses` (`status_id`, `update_time`, `status`) VALUES
(1, '2024-03-19 08:00:00', 'Scheduled'),
(2, '2024-03-20 09:00:00', 'Departed'),
(3, '2024-03-21 10:00:00', 'Arrived'),
(4, '2024-03-22 11:00:00', 'Delayed'),
(5, '2024-03-23 12:00:00', 'Cancelled');

-- --------------------------------------------------------

--
-- Table structure for table `fqrs`
--
-- Creation: Mar 19, 2024 at 02:51 AM
--

CREATE TABLE `fqrs` (
  `fq_id` int(11) NOT NULL,
  `question` text DEFAULT NULL,
  `answer` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELATIONSHIPS FOR TABLE `fqrs`:
--

--
-- Dumping data for table `fqrs`
--

INSERT INTO `fqrs` (`fq_id`, `question`, `answer`) VALUES
(1, 'How was the flight?', 'It was great!'),
(2, 'Any delays?', 'No, everything was on time.'),
(3, 'How was the service?', 'Service was excellent.'),
(4, 'Cleanliness of cabin?', 'Cabin was clean.'),
(5, 'Would you recommend?', 'Yes, definitely.');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--
-- Creation: Mar 19, 2024 at 01:09 PM
--

CREATE TABLE `reviews` (
  `review_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `review_text` text DEFAULT NULL,
  `review_date` date DEFAULT NULL,
  `rate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELATIONSHIPS FOR TABLE `reviews`:
--   `user_id`
--       `users` -> `user_id`
--

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`review_id`, `user_id`, `review_text`, `review_date`, `rate`) VALUES
(1, 1, 'Great experience!', '2024-03-19', 0),
(2, 2, 'Poor service, won\'t recommend', '2024-03-20', 0),
(3, 3, 'Excellent flight', '2024-03-21', 0),
(4, 4, 'Average experience', '2024-03-22', 0),
(5, 5, 'Amazing service', '2024-03-23', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--
-- Creation: Mar 19, 2024 at 02:51 AM
-- Last update: Mar 20, 2024 at 03:56 AM
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELATIONSHIPS FOR TABLE `users`:
--

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password`, `role`) VALUES
(1, 'user1', 'user1@example.com', 'pass123', 'member'),
(2, 'admin', 'admin@gmail.com', 'admin123', 'admin'),
(3, 'johndoe', 'johndoe@example.com', 'jdpass', 'member'),
(4, 'janedoe', 'janedoe@example.com', 'jdpass', 'member'),
(5, 'testuser', 'testuser@example.com', 'test123', 'member'),
(6, 'yasmine', 'yasmine@gmail.com', '$2y$10$Azy7y8cZQHW8Vo0MTxF9N.Ms2hjroGRNJ0lg9Pinmhk.eG3J4dO8C', 'member'),
(7, 'othman Ghandour', 'othmanghandour@gmail.com', '$2y$10$yNy7Q9YEIVuqY225waloPOHbiiVy6j4jTQKBkj.QTUTfYz9CTv5Oy', 'member'),
(9, 'Ahmad Ahmad', 'Ahmad Ahmad@gmail.com', '$2y$10$PwJ3ewz0H0rhp3KL7VNKbuYKWoot1/YklPO.734pq11IHhPns3boy', 'member'),
(11, 'Taha ', 'taha123@gmail.com', '$2y$10$oS0Iz9elcgrNOJ5.sMpE7e2kGtRfdzEWVlv9QERQLI4bTYVWup5qO', 'member');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `airlines`
--
ALTER TABLE `airlines`
  ADD PRIMARY KEY (`airline_id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`booking_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `flights`
--
ALTER TABLE `flights`
  ADD PRIMARY KEY (`flight_id`);

--
-- Indexes for table `flight_statuses`
--
ALTER TABLE `flight_statuses`
  ADD PRIMARY KEY (`status_id`);

--
-- Indexes for table `fqrs`
--
ALTER TABLE `fqrs`
  ADD PRIMARY KEY (`fq_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `airlines`
--
ALTER TABLE `airlines`
  MODIFY `airline_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `flights`
--
ALTER TABLE `flights`
  MODIFY `flight_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `flight_statuses`
--
ALTER TABLE `flight_statuses`
  MODIFY `status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `fqrs`
--
ALTER TABLE `fqrs`
  MODIFY `fq_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
