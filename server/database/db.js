import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@book-store.unznovr.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL);
        console.log('Database connected successfully')
    }catch(error) {
        console.log(`Error while connecting with the database: ${error}`)
    }
};
