const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Import routes
const userRoute = require("./routes/users.route.js");
const movieRoute = require("./routes/movies.route.js");
const bookingRoute = require("./routes/bookings.route.js");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // for form data

// Routes
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/bookings", bookingRoute);

app.get("/", (req, res) => {
  res.send("Hello from node API! Updated");
});

// Connect to MongoDB and start the server
mongoose
  .connect(
    "mongodb+srv://Adityaa:Vasu1234@backendapi.kopqh.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendAPI"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });
