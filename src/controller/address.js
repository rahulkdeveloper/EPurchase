const User = require("../model/User");
const {
    v4: uuidv4,
} = require('uuid');
const dotenv = require('dotenv');
dotenv.config();
const Address = require('../model/UserAddress');

exports.addAddress = async (request, response) => {
    try {



        // const { userId, address1, address2, city, State, countryName, pincode, isHome = true, isOffice = false } = request.body;


        request.body.id = uuidv4();
        const newAddress = await Address.create(request.body)

        return response.status(201).json({
            success: true,
            message: "Address added successfully.",
            data: newAddress,
        })

    } catch (error) {
        console.log("Error", error);
        return response.status(error.status || 500).json({
            success: false,
            message: error.message || "Internal server error"
        })
    }
}

exports.updateAddress = async (request, response) => {
    try {

        let { addressId } = request.body;

        let findAddress = await Address.findOne({ where: { id: request.body.addressId } })

        if (!findAddress) {
            return response.status(404).json({
                success: false,
                message: "Address not found"
            })
        }

        delete request.body.addressId;

        await Address.update(request.body, { where: { id: addressId } })


        return response.status(200).json({
            success: true,
            message: "Address updated succesfully",
        })




    } catch (error) {
        console.log(error)
        return response.status(500).json({
            success: false,
            message: error.message
        })
    }
}