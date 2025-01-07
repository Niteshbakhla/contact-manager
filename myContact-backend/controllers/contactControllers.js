const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")



//Get contact 
// route get  /api/contacts

exports.getContacts = asyncHandler(async (req, res) => {
            const contacts = Contact.find({});

            res.status(200).json(contacts)
})


//Post contact
// route Post  /api/contacts
exports.createContact = asyncHandler(async (req, res) => {

            const { name, email, phone } = req.body;

            if (!name || !email || !phone) {
                        res.status(400)
                        throw new Error("All fields are mandatory")
            }
            const contacts = new Contact({ name, email, phone });
            await contacts.save();

            res.status(201).json({ message: "Create Contact" })
})


//Get contact
// route get  /api/contacts/:id
exports.getContact = asyncHandler(async (req, res) => {
            const contact = await Contact.findById(req.params.id);
            if (!contact) {
                        res.status(404);
                        throw new Error("Contact not found")
            }
            res.status(200).json({ message: `Get contact for ${req.params.id}`, contact })
})



//Update contact
// route put  /api/contacts/:id
exports.updateContact = asyncHandler(
            (req, res) => {
                        res.status(200).json({ message: `Update contact for ${req.params.id}` })
            }
)

//Delete contact
// route Delete  /api/contacts/:id
exports.deleteContact = asyncHandler(
            (req, res) => {
                        res.status(200).json({ message: `Delete contact for ${req.params.id}` })
            }
)