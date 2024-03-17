# Flight System Website

## Users

### Authentication

- Users can register and securely log in.
- Bonus: Authentication and authorization using JWT (JSON Web Token).

### Flight Search and Booking

- Users can search for flights based on criteria like destination, departure date, return date, number of passengers, etc.
- Display available flights with details such as price, departure/arrival times, airline information, etc.
- Allow users to book flights, select seats, and confirm bookings.

### User Profile Management

- Users can manage their profiles, including personal information and preferences.
- Users cannot book unless personal information is complete.
- Users can view their booking history.

### Flight Status Tracking

- Provide flight status updates.

### Payment Simulation

- Provide users with a form to request the amount of coins they want to request.

### Flight Reviews and Ratings

- Allow users to rate and review flights they've taken.
- Display average ratings for flights and airlines.
- Display ads on the landing page according to the highest rated flights and airlines.

### FAQ and Customer Support

- Users can chat with the admin for customer support (not live).

## Admin

### Admin Dashboard

- Provide an overview and analytics of the whole system, such as total bookings, revenue, number of users, etc.

### Flight Management

- CRUD operations for managing flights, including adding new flights, updating schedules, assigning airplanes to flights, and canceling flights.

### Booking and Financial Management

- View all bookings, including details such as flight information, passenger details, payment status, etc.
- Ability to cancel or modify bookings as needed.
- Ability to accept/reject coins request forms.

### Feedback Management

- View and moderate user reviews and ratings.
- Chat back with users for any support.






git branch: Lists all local branches in the repository.

git branch [branch_name]: Creates a new branch with the specified name.

git branch -d [branch_name]: Deletes the specified branch. This command will fail if the branch has unmerged changes.

git branch -D [branch_name]: Forces deletion of the specified branch, even if it has unmerged changes.

git branch -m [old_branch_name] [new_branch_name]: Renames the specified branch.

git checkout [branch_name]: Switches to the specified branch.
