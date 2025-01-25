const mongoose = require('mongoose');

const connection = async (url) => {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
};

module.exports = connection;