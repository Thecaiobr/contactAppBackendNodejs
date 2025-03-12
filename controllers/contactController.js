const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel");
//@description get all contact
//@route GET /api/contacts
//@access Private
const getContacts = asyncHandler (async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});

// @desc    Create a new contact
// @route   POST /api/contacts
// @access  Private
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const contact = await Contact.create({
        name,
        email,
        phone, 
        user_id: req.user.id,
    });
    res.status(201).json(contact);
});


// @desc    Get a contact by ID
// @route   GET /api/contacts/:id
// @access  Private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

const updateContact = asyncHandler (async  (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(404);
        throw new Error("User dont have the permission to update other user contact");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(200).json(updatedContact)
});

const deleteContact = asyncHandler (async  (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(404);
        throw new Error("User dont have the permission to delete other user contact");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(contact);
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}