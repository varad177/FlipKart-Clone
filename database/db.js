import mongoose from "mongoose";



export const Connection = async () => {
    // const mongoURI= process.env.MONGO_URL ;

     const mongoURI= "mongodb+srv://varad:varad6862@cluster0.0suvvd6.mongodb.net/flip-Kart-clone"
    try {
        await mongoose.connect(mongoURI, {
            useUnifiedTopology: true, useNewUrlParser: true
        });
        console.log("db connected succesfully");

    } catch (error) {
        console.log("error while connecting to the data base ", error.message);
    }
}

export default Connection;