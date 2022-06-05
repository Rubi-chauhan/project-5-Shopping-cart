const mongoose = require("mongoose");

//schema:  logical representation of data or structure of document
const userSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true, trim: true, },
    lname: { type: String, required: true, trim: true, },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true, },
    profileImage: { type: String, required: true, },
    phone: { type: Number, required: true, },
    password: { type: String, required: true, trim: true, },
    address: {
      shipping: {
        street: { type: String, required: true, trim: true, },
        city: { type: String, required: true, trim: true, },
        pincode: { type: Number, required: true, trim: true, },
      },

      billing: {
        street: { type: String, required: true, trim: true, },
        city: { type: String, required: true, trim: true, },
        pincode: { type: Number, required: true, trim: true, },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);

