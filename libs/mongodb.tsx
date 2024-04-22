import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected successfully');
    } catch (e) {
        console.log(e)
    }
}

export default connectMongoDB;
