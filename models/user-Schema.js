import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        trim: true,
        max: 20
    },
    lastname: {
        type: String,
        require: true,
        trim: true,
        
        max: 20
    },
    username: {
        type: String,
        require: true,
        trim: true,
       
        max: 20,
        unique : true,
        lowercase : true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique : true,
        lowercase : true



    },
    password: {
        type: String,
        require: true,
        trim: true,
        min: 5,
        max: 20
    },
    phone: {
        type: String,
        require: true,
        trim : true,
        min : 5,
        max : 20
    }


})
const  user = mongoose.model('user' , userSchema)
export default user;