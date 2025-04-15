const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
    }

module.exports = connectDB;