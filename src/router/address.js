const express = require('express');
const router = express.Router();
const { addAddress, deleteAddress, updateAddress } = require('../controller/address');
const { auth } = require('../middleware/auth');


router.post("/add-address", auth("user"), addAddress);
// router.delete("/delete-address", deleteAddress);
router.patch("/update-address", auth("user"), updateAddress);


module.exports = router;