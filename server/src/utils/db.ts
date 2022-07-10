import mongoose from "mongoose";

export async function connectToDb(){
    try {
     
        await mongoose.connect()
    }catch (e) {

    }
}