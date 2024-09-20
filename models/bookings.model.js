const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Please enter user ID"],
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: [true, "Please enter movie ID"],
    },
    showTime: {
        type: Date,
        required: [true, "Please enter show time"],
    },
    seats: {
        type: Number,
        required: [true, "Please enter number of seats"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
