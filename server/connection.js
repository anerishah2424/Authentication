let connectionString = 'mongodb+srv://Aneri:Aneri2424@cluster0.x29qy7v.mongodb.net/mydatabase?retryWrites=true&w=majority';
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
