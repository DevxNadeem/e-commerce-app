require('dotenv').config();
const  mongoose = require('mongoose');
const URI = process.env.MONGODB_URL;

const connectDB = async () => { 
    try {
        console.log(URI);
        await mongoose.connect('mongodb+srv://ns2798579_db_user:SHEIKH123@cluster0.yzeos9z.mongodb.net/e-commerce-app')
        console.log("MongoDB Connected")
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB;
