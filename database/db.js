import mongoose from "mongoose";



export const Connection = async (mongoURI) => {

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