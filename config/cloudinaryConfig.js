const cloudinary = require("cloudinary").v2;
<<<<<<< HEAD
require("dotenv").config();
=======
>>>>>>> 1d3eb2ffe8783a4283249d29939a7e941c9a862b

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

module.exports = cloudinary;
