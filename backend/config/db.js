import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://pravukalyandas99:BCwOfBT6eUBtwKAO@cluster0.zu25rzm.mongodb.net/quickbite?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
}