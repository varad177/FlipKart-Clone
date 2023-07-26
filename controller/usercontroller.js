
import User from "../models/user-Schema.js";

export const userSignup = async (req, res) => {
    try {

        const exist = await User.findOne({ username: req.body.username });
        if (exist) {
            res.status(401).json({
                success: false,
                message: "user already exist"
            })
        }

        const user = req.body
        const newUser = new User(user);
        await newUser.save()

        res.status(200).json({
            success: true,
            message: "sign up successfully"
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            message: error.message
        })
    }
}

export const userLogin = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        let userexist = await User.findOne({ username: username, password: password })
        if (userexist) {
            res.status(200).json({
                success: true,
                data: userexist,
                message: `${username} login successfull`
            })
        }
        else {
            res.status(400).json({
                success: false,
                message: `invalid credentials `
            })
        }
    } catch (error) {
        res.status(500).json({
            'Error': error.message
        })

    }
}