import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://firstUser:User543@cluster0.rzvox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to the database successfully.")
    }
    catch(error){
        console.log(error);
    }
}

export default connectDB;