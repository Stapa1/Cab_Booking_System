# Cab Booking System

Create a web application for a cab booking system where users can book cabs, calculate routes, and estimate costs.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
- [Contributing](#contributing)


## Overview

The Cab Booking System is a web application that allows users to book cabs, calculate the shortest route between source and destination, and estimate the cost of their trips. This system is designed to manage cab bookings efficiently.

## Features

- Book a cab by providing source, destination, and user information.
- Calculate the shortest route and estimated cost based on the selected cab and locations.
- List available cabs with pricing per minute.
- Track cab bookings and view their details.
- Edit cab information (admin functionality).
- No cab should have overlapping start and end times.
- Responsive design (good to have).
- Send email notifications to users at the time of booking (good to have).

## Technologies Used

- Node.js with Express.js for the backend
- MongoDB Atlas for database storage
- Mongoose for MongoDB object modeling
- React for the frontend (SPA)
- Additional libraries for routing, state management, and UI components

## Installation

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/cab-booking-system.git`
2. Navigate to the project directory: `cd cab-booking-system`
3. Install dependencies for the backend: `cd backend && npm install`
4. Install dependencies for the frontend: `cd frontend && npm install`
5. Start the backend server: `cd backend && npm start`
6. Start the frontend development server: `cd frontend && npm start`

## Usage

- Access the web application by opening your browser and navigating to `http://localhost:3000`.

## API Endpoints

- The application provides the following API endpoints for various functionalities:
  - `/api/cabs`: List available cabs.
  - `/api/bookings`: Book a cab, calculate routes, and estimate costs.
  - `/api/bookings/:bookingId`: Get details of a specific booking.
  - `/api/cabs/:cabId`: Get details of a specific cab.
  - `/api/users/:userId/bookings`: Get a list of bookings for a specific user.

## Frontend

The frontend of the Cab Booking System is built using React, creating a single-page application (SPA). Users can interact with the application through an intuitive and user-friendly interface.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push the changes to your fork.
5. Create a pull request to the original repository.
