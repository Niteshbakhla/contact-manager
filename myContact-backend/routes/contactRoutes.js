const { getContacts,
            createContact,
            getContact,
            updateContact,
            deleteContact } = require("../controllers/contactControllers");

const router = require("express").Router();


//router for get all contact  and creating contact 

router.route("/").get(getContacts).post(createContact)



// route for get single contact  and updating the contact 

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)

module.exports = router;



