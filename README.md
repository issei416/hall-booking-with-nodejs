# 🏨 Hall-booking API

Welcome to the Hall-booking API project! This API allows users to manage rooms, bookings, and customers for a hall booking system.


TECHS USED :

* Node.js
* Express.js
* Postman

### 🚀 Usage
Start the server:
```
npm start
```
The server will be running at http://localhost:4000.

### 🛠️ Endpoints

#### General Endpoint
* GET /: Verifies server status.
#### Room Management
* GET /rooms/getrooms: Retrieves a list of all available rooms.  
* POST /rooms/createroom: Creates a new room with specified details.
#### Booking Management
* POST /bookings/bookroom: Books a room for a customer.  
* GET /bookings/bookedrooms: Retrieves a list of all booked rooms.
#### Customer Management
* GET /bookings/customers: Retrieves a list of all customers who have booked rooms.  
* GET /bookings/customerbookings/
: Retrieves a list of all bookings for a specific customer.

### 📚 API Documentation URL

Here is the API documentation URL for this hall booking API project [Click here](https://documenter.getpostman.com/view/36384038/2sA3kSo3QN)

### Deployed URL 

Here is the Render deployed url for the API giude (click here)[https://hall-booking-with-nodejs.onrender.com]
