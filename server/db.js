import mongoose from 'mongoose';

export const connection = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log("Connected to database successfully");
    } catch (error) {
        console.log(error);
        console.log("Could not connect to database!");
    }
};