-- Create Airline table
CREATE TABLE Airline (
    airline_id INT AUTO_INCREMENT PRIMARY KEY,
    airline_name VARCHAR(255)
);

-- Insert dummy data into Airline table
INSERT INTO Airline (airline_name) VALUES
('Qatar'),
('Emirates'),
('Delta'),
('United'),
('American');

-- Create Flight_status table
CREATE TABLE Flight_status (
    status_id INT AUTO_INCREMENT PRIMARY KEY,
    update_time TIMESTAMP,
    status VARCHAR(50)
);

-- Insert dummy data into Flight_status table
INSERT INTO Flight_status (update_time, status) VALUES
('2024-03-19 10:00:00', 'Scheduled'),
('2024-03-20 11:00:00', 'Departed'),
('2024-03-21 12:00:00', 'Arrived'),
('2024-03-22 13:00:00', 'Delayed'),
('2024-03-23 14:00:00', 'Cancelled');

-- Create Flights table
CREATE TABLE Flights (
    flight_id INT AUTO_INCREMENT PRIMARY KEY,
    departure_date DATE,
    arrival_date DATE,
    price INT,
    departure_airport VARCHAR(255),
    arrival_airport VARCHAR(255),
    airline_id INT,
    flight_status_id INT,
    FOREIGN KEY (airline_id) REFERENCES Airline(airline_id),
    FOREIGN KEY (flight_status_id) REFERENCES Flight_status(status_id)
);

-- Insert dummy data into Flights table
INSERT INTO Flights (departure_date, arrival_date, price, departure_airport, arrival_airport, airline_id, flight_status_id) VALUES
('2024-04-01', '2024-04-01', 200, 'JFK', 'LAX', 1, 1),
('2024-04-02', '2024-04-02', 250, 'LAX', 'JFK', 2, 2),
('2024-04-03', '2024-04-03', 300, 'ORD', 'LGA', 1, 1),
('2024-04-04', '2024-04-04', 180, 'LGA', 'ORD', 2, 2),
('2024-04-05', '2024-04-05', 220, 'SFO', 'SEA', 1, 1);

-- Create Users table
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    role VARCHAR(50)
);

-- Insert dummy data into Users table
INSERT INTO Users (username, email, password, role) VALUES
('user1', 'user1@example.com', 'pass123', 'member'),
('admin', 'admin@example.com', 'admin123', 'admin'),
('johndoe', 'johndoe@example.com', 'jdpass', 'member'),
('janedoe', 'janedoe@example.com', 'jdpass', 'member'),
('testuser', 'testuser@example.com', 'test123', 'member');

-- Create Bookings table
CREATE TABLE Bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    seat_number VARCHAR(50),
    booking_date DATE,
    payment_status VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Insert dummy data into Bookings table
INSERT INTO Bookings (user_id, seat_number, booking_date, payment_status) VALUES
(1, 'A12', '2024-03-19', 'paid'),
(2, 'B34', '2024-03-20', 'pending'),
(3, 'C56', '2024-03-21', 'paid'),
(4, 'D78', '2024-03-22', 'paid'),
(5, 'E90', '2024-03-23', 'pending');

-- Create Reviews table
CREATE TABLE Reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    review_text TEXT,
    review_date DATE,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Insert dummy data into Reviews table
INSERT INTO Reviews (user_id, review_text, review_date) VALUES
(1, 'Great experience!', '2024-03-19'),
(2, 'Poor service, won''t recommend', '2024-03-20'),
(3, 'Excellent flight', '2024-03-21'),
(4, 'Average experience', '2024-03-22'),
(5, 'Amazing service', '2024-03-23');

-- Create FQRS table
CREATE TABLE FQRS (
    fq_id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT,
    answer TEXT
);

-- Insert dummy data into FQRS table
INSERT INTO FQRS (question, answer) VALUES
('How was the flight?', 'It was great!'),
('Any delays?', 'No, everything was on time.'),
('How was the service?', 'Service was excellent.'),
('Cleanliness of cabin?', 'Cabin was clean.'),
('Would you recommend?', 'Yes, definitely.');

-- Create Coins table
CREATE TABLE Coins (
    request_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    amount INT,
    request_date DATE,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Insert dummy data into Coins table
INSERT INTO Coins (user_id, amount, request_date) VALUES
(1, 100, '2024-03-19'),
(2, 150, '2024-03-20'),
(3, 200, '2024-03-21'),
(4, 50, '2024-03-22'),
(5, 120, '2024-03-23');

-- Create User Profile table
CREATE TABLE User_Profile (
    profile_id INT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255),
    phone_number VARCHAR(20),
    full_name VARCHAR(100),
    preferences VARCHAR(255),
    new_attribute VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Insert dummy data into User Profile table
INSERT INTO User_Profile (address, phone_number, full_name, preferences, new_attribute, user_id) VALUES
('123 Main St, City', '123-456-7890', 'John Doe', 'Window seat', NULL, 1),
('456 Elm St, City', '456-789-1230', 'Jane Doe', 'Aisle seat', NULL, 2),
('789 Oak St, City', '789-123-4560', 'Bob Smith', 'Window seat', NULL, 3),
('321 Pine St, City', '321-654-9870', 'Sarah Brown', 'Aisle seat', NULL, 4),
('654 Cedar St, City', '654-987-3210', 'Alex Johnson', 'Window seat', NULL, 5);
