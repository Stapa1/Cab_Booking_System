# Book-My-cab
# Cab Booking System using MEAN Stack, Socket.io, and Google Maps

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Description

The Cab Booking System is a web-based application that allows users to book and manage cab rides. It is built using the MEAN stack (MongoDB, Express.js, Angular, Node.js) for the backend and Angular for the frontend. Socket.io is used for real-time communication, and Google Maps integration provides location-based services.

This system is designed for both passengers and drivers. Passengers can request a cab, view real-time location, and manage their rides, while drivers can accept ride requests and navigate to the passenger's location.

## Features

- User Registration and Authentication: Users can create accounts, log in, and manage their profiles.
- Real-Time Cab Tracking: Passengers can track their cab in real-time on a map.
- Ride Booking: Passengers can book a cab by providing their pickup and drop-off locations.
- Ride Acceptance: Drivers can accept or decline ride requests.
- In-App Chat: Passengers and drivers can communicate with each other through an in-app chat.
- Location Services: Google Maps integration for accurate location services.
- Booking History: Users can view their ride history and receipts.
- Admin Dashboard: An admin panel to manage drivers, users, and system settings.

## Technologies

- **MEAN Stack:**
  - MongoDB (Database)
  - Express.js (Backend)
  - Angular (Frontend)
  - Node.js (Server)

- **Socket.io:** Real-time communication between passengers, drivers, and the server.

- **Google Maps API:** Integration for location services and real-time mapping.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Stapa1/cab-booking-system.git
   ```

2. Install the server dependencies:

   ```bash
   cd server
   npm install
   ```

3. Install the client dependencies:

   ```bash
   cd ../client
   npm install
   ```

4. Configure environment variables for MongoDB connection, Google Maps API key, and other necessary settings.

5. Start the server:

   ```bash
   cd ../server
   npm start
   ```

6. Start the client:

   ```bash
   cd ../client
   ng serve
   ```

7. Access the application in your web browser at `http://localhost:4200`.

## Usage

1. Register as a user or driver.

2. Log in with your credentials.

3. As a passenger, book a cab by providing pickup and drop-off locations.

4. As a driver, accept or decline ride requests.

5. Track the ride in real-time on the map.

6. Use the in-app chat to communicate with the other party.

7. View your ride history and manage your profile.

## Screenshots

1)
![ice_screenshot_20181014-195605](https://user-images.githubusercontent.com/27079355/47169642-adea6000-d321-11e8-9852-f57050108f33.png)

2)
![ice_screenshot_20181014-202817](https://user-images.githubusercontent.com/27079355/47170125-e76f9b00-d322-11e8-8122-4580147c715c.png)

3)
![ice_screenshot_20181014-203112](https://user-images.githubusercontent.com/27079355/47169762-002b8100-d322-11e8-8930-3740cac97226.png)

4)
![ice_screenshot_20181014-203436](https://user-images.githubusercontent.com/27079355/47169835-27824e00-d322-11e8-9371-5ad11cdb75ab.png)

5)
![ice_screenshot_20181014-203645](https://user-images.githubusercontent.com/27079355/47169926-64e6db80-d322-11e8-86ad-ada626797894.png)

6)
![ice_screenshot_20181014-203900](https://user-images.githubusercontent.com/27079355/47169953-7cbe5f80-d322-11e8-99d1-fe5d4414ffc0.png)

7)
![ice_screenshot_20181014-204148](https://user-images.githubusercontent.com/27079355/47169969-89db4e80-d322-11e8-8c18-010ae86229f0.png)

## Contributing

If you would like to contribute to this project, please open an issue or create a pull request on the GitHub repository.



