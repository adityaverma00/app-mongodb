# Cinema Booking System API

**API Endpoints:**
1. **Movies**: [https://localhost:3000/api/movies](https://localhost:3000/api/movies)
2. **Users**: [https://localhost:3000/api/users](https://localhost:3000/api/users)
3. **Bookings**: [https://localhost:3000/api/bookings](https://localhost:3000/api/bookings)

**Packages Installed:**
npm i express express-generator nodemon body-parser mongoose mongodb

### Tools Used:
- **VSCode** for development
- **Postman** for API testing
- **MongoDB** for database management

**MongoDB Details:**
- Username: **"Adityaa"**
- Password: **"Adityaa:Vasu1234"**

## 1. Movies API

### **GET** Movie Listings:
- **URL**: [https://localhost:3000/api/movies](https://localhost:3000/api/movies)
- **How to GET**: 
  1. Open Postman.
  2. Choose **GET** method.
  3. Enter the URL.
  4. Click **Send**.
  5. You’ll see a list of all movies posted.

### **POST** a New Movie:
- **URL**: [https://localhost:3000/api/movies](https://localhost:3000/api/movies)
- **How to POST**:
  1. Choose **POST** method in Postman.
  2. Go to **Body**, select **raw**, and set the format to JSON.
  3. Enter the movie details in this format:
{
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseDate": "1994-09-23T00:00:00",
    "duration": 142
  }
  4. Click **Send** to create the new movie.

### **PUT** Update a Movie:
- **URL**: https://localhost:3000/api/movies/{movieID}
- **How to PUT**:
  1. Choose **PUT** method.
  2. Enter the movie ID in the URL.
  3. In **Body**, enter updated details in JSON format:
  { "title": "Avengers" }
  4. Click **Send** to update.

### **DELETE** a Movie:
- **URL**: https://localhost:3000/api/movies/{movieID}
- **How to DELETE**:
  1. Choose **DELETE** method.
  2. Enter the movie ID.
  3. Click **Send** to remove the movie from the database.

---

## 2. Users API

### **GET** User Listings:
- **URL**: [https://localhost:3000/api/users](https://localhost:3000/api/users)
- **How to GET**:
  - Similar to movies, follow the **GET** method instructions for users.

### **POST** a New User:
- **URL**: [https://localhost:3000/api/users](https://localhost:3000/api/users)
- **How to POST**:
  1. Choose **POST** method.
  2. In **Body**,and in the json enter user details:
  {
    "username": "eva_moore",
    "email": "eva.moore@example.com",
    "password": "password123"
  }
  3. Click **Send**.

### **PUT** Update User Details:
- **URL**: https://localhost:3000/api/users/{userID}
- **How to PUT**:
  1. Choose **PUT** method.
  2. Enter the user ID in the URL.
  3. Enter the new details in **Body** and write in json:
  { "username": "Kevin" }
  4. Click **Send** to update.

### **DELETE** a User:
- **URL**: https://localhost:3000/api/users/{userID}
- **How to DELETE**:
  - Same process as deleting a movie, but for users.

---

## 3. Bookings API

### **GET** Booking Listings:
- **URL**: [https://localhost:3000/api/bookings](https://localhost:3000/api/bookings)
- **How to GET**:
  - Similar to the movies and users.

### **POST** a New Booking:
- **URL**: [https://localhost:3000/api/bookings](https://localhost:3000/api/bookings)
- **How to POST**:
  1. Choose **POST** method.
  2. In **Body**, enter booking details:
{
    "userId": "66ed13e43f6ccfe30a3a4b73",
    "movieId": "66ed18dec9196818edb8dd05",
    "showTime": "2024-09-24T19:30:00",
    "seats": 2
  }

  3. Click **Send**.

### **PUT** Update a Booking:
- **URL**: https://localhost:3000/api/bookings/{bookingID}
- **How to PUT**:
  1. Choose **PUT** method.
  2. Enter the booking ID in the URL.
  3. Enter the updated details in **Body** (JSON format):
{ "seats": "4" }
4. Click **Send** to update.

### **DELETE** a Booking:
- **URL**: https://localhost:3000/api/bookings/{bookingID}
- **How to DELETE**:
- Same process as deleting a movie or user.


