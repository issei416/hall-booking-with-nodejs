import express from "express";
import cors from "cors";
import roomRouter from "./Routers/rooms.router.js";
import bookingRouter from "./Routers/booking.router.js"

const PORT = 4000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("app is working fine");
})

app.use('/rooms', roomRouter);
app.use('/bookings', bookingRouter);
app.use('/customers', bookingRouter);
app.use('/customerbookings/:id', bookingRouter);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})