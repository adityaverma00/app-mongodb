const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please enter email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
