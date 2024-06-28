const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/e-com');
        console.log('MongoDB connected');
    } catch (err) {
        console.error("error", err.message);
    }
};

module.exports = connectDB;
