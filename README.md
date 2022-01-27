# BOOKING SYSTEM

> Take-home Project : room booking system.

## Table of Contents

- [Architecture](#Architecture)
- [Technologies Used](#technologies-used)
- [To Run](#to-run)
- [Test Users](#test-users)
- [Room for Improvement](#room-for-improvement)

## Architecture

### Frontend

The Frontend is composed of three layers:

- View Layer (components folder): using react components and react hooks
- State Management (store folder): using Mobx
- API Client (api folder): using fetch

### Backend

The backend is composed of four microservices:

- Gateway: a controller that manages api and controll the following services
- User: the service allows CRUD operations for the User entity
- Room: the service allows CRUD operations for the Room entity
- Booking: the service allows CRUD operations for the Booking entity

### Database

Here I am connecting to one database (only for simplicity).
Connected to a mongoDB Atlas account. credentials are hardcoded, if you would like to access the d.

## Technologies Used

- Frontend : [ React, Mobx, Styled-componenets ]
- Backend : [ NestJs, Mongoose, Docker ]
- DB: [ MongoDB ]

## To Run

- Frontend:
  `npm install` - to install dependencies
  `npm start` - to run application on port 3000

- Backend:
  `docker-compose up` - to build and run containers for each of the microservices on port 5000

## Test Users

There are two test user account one for a Pepsi user and another for Coke user

#### Pepsi test user

- email: admin@pepsi.com
- password: admin

#### Coke test user

- email: admin@coke.com
- password: admin

## Room for Improvement

- Create an Authentication microservice to authenticate user giving access and refresh tokens
- Add a sign-up feature to create a new user.
- Adding a feature to show user's bookings.
- Hash all passwords and chaging times' data types
