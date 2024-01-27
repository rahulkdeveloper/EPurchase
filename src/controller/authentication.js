const User = require("../model/User");
const { comparePassword, hashPassword } = require('../helper/utils');
const jwt = require('jsonwebtoken');
const {
    v4: uuidv4,
} = require('uuid');
const dotenv = require('dotenv');
dotenv.config();

exports.register = async (request, response) => {
    try {



        const { password, email, fullName, mobile } = request.body

        // check user alredy exist or not...
        const findUser = await User.findOne({ where: { email } })
        console.log(findUser);

        if (findUser) {

            return response.status(400).json({
                success: false,
                message: "Email already exist",
            })
        }




        request.body.password = await hashPassword(password);
        request.body.id = uuidv4()
        const newUser = await User.create(request.body)

        return response.status(201).json({
            success: true,
            message: "Register Successfully",
            data: newUser,
        })

    } catch (error) {
        console.log("Error", error);
        return response.status(error.status || 500).json({
            success: false,
            message: error.message || "Internal server error"
        })
    }
}

exports.login = async (request, response) => {
    try {

        const { email, password } = request.body;


        // check user alredy exist or not...
        const findUser = await User.findOne({ where: { email } })

        if (!findUser) {

            return response.status(400).json({
                success: false,
                message: "Please login with correct credentials.",
            })
        }


        // compare password...
        const isPasswordValid = await comparePassword(password, findUser.password);
        if (!isPasswordValid) {
            return response.status(400).json({
                success: false,
                message: "Please login with correct credentials.",
            })
        }



        // generate jwt token...
        const accessToken = await jwt.sign({ id: findUser.id }, process.env.JWT_SECRET_KEY);


        return response.status(200).json({
            success: true,
            message: "Login Successfully",
            accessToken,
        })

    } catch (error) {
        console.log("Error", error);
        return response.status(error.status || 500).json({
            success: false,
            message: error.message || "Internal server error"
        })
    }
}