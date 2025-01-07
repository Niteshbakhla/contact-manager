const mongoose = require("mongoose");


const contactSchema =  mongoose.Schema({
            name: {
                        type: String,
                        required: [true, "Please add the contact name"]
            },

            email: {
                        type: String,
                        required: [true, "Please add the contact email address"]
            },

            phone: {
                        type: String,
                        required: [true, "Please add the contact phone number"]
            }
}, {
            timestamps: true
});

const contact = mongoose.model("userContact", contactSchema)

module.exports = contact;

