// assuming that the front end handles the data such that
// date, start and end time is in the format dd-MM-yyyy and hh-mm-ss(24 hrs format)

import rooms from './rooms.controller.js'

const roomnames = {};

rooms.forEach(room => {
    roomnames[room.room_id] = room.room_name;
});
export const bookings = [
    {
        "booking_id": 1,
        "customer_id":101,
        "customer_name": "mukesh",
        "date" : "10-07-2024",
        "start_time" : "09-00-00",
        "end_time" : "12-00-00",
        "room_id": 1,
        "room_name": "Deluxe Room"
    },
    {
        "booking_id": 2,
        "customer_id":102,
        "customer_name": "khanna",
        "date" : "10-07-2024",
        "start_time" : "09-00-00",
        "end_time" : "14-30-00",
        "room_id": 2,
        "room_name" : "Luxury Room"
    },
    {
        "booking_id": 3,
        "customer_id":103,
        "customer_name": "suresh",
        "date" : "15-04-2024",
        "start_time" : "10-00-00",
        "end_time" : "13-00-00",
        "room_id": 2,
        "room_name" : "Luxury Room"
    },
    {
        "booking_id": 4,
        "customer_id":101,
        "customer_name": "mukesh",
        "date" : "27-12-2024",
        "start_time" : "15-00-00",
        "end_time" : "11-00-00",
        "room_id": 3,
        "room_name" : "Premium Room"
    }
]

export const bookroom = (req, res) => {
    const { customer_id, customer_name, date, start_time, end_time, room_id } = req.body;
    const booking_id = bookings[bookings.length - 1].booking_id + 1;
    const booking = {
        booking_id,
        customer_id,
        customer_name,
        date,
        start_time,
        end_time,
        room_id,
        "room_name": roomnames[room_id]
    }
    bookings.push(booking);
    res.status(201).json(booking);
}

export const getBookedRooms = (req, res) => {
    const bookedRooms = bookings.map(booking => {
        return {
            "room_id": booking.room_id,
            "room_name": booking.room_name,
            "customer_name": booking.customer_name,
            "date": booking.date,
            "start_time": booking.start_time,
            "end_time": booking.end_time
        }
    });

    res.status(200).json(bookedRooms);
}

export const getCustomers = (req, res) => {
    const customers = bookings.map(booking => {
        return {
            "customer_id": booking.customer_id,
            "customer_name": booking.customer_name,
            "room_name": booking.room_name,
            "date": booking.date,
            "start_time": booking.start_time,
            "end_time": booking.end_time
        }
    });

    res.status(200).json(customers);
}

export const getCustomerBookings = (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const customerBookings = bookings.filter(booking => booking.customer_id === parseInt(id));

    res.status(200).json(customerBookings);
}

