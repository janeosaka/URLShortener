const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); // getting global variable

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit();
    }
}

module.exports = connectDB;