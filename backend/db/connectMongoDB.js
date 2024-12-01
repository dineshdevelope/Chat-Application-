import mongoose from "mongoose"

const connectMongoDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDb");
        
    } catch (error) {
        console.log(`Error connecting to MongoDb ${error.message}`);
        process.exit(1)
        
    }
}

export default connectMongoDb