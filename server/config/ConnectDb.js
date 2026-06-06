require('dotenv').config();
const  mongoose = require('mongoose');
const URI = process.env.MONGODB_URL;

const connectDB = async () => { 
    try {
        console.log(URI);
        await mongoose.connect(URI)
        console.log("MongoDB Connected")
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB;
