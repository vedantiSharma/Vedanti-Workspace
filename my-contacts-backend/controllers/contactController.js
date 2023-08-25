
//controllers will handle all requests and connected to db
const asyncHandler = require("express-async-handler")

const Contact =require("../models/contactModel");

//description GET all contacts
//route GET /api/contacts
//access public (initially)

 const getContacts =  asyncHandler(async(req, res) =>{
   const contacts = await Contact.find();
    res.status(200).json( contacts);
 });

 //description  create contacts
//route POST /api/contacts
//access public (initially)

const createContact=  asyncHandler(async(req, res) =>{
   console.log("The req body is :" , req.body);
   const{name , email, phone} = req.body;
   if(!name || !email || !phone){
      res.status(400);
      throw new Error("All fields are mandatory");
   }
   const contact= await Contact.create({
      name,
      email,
      phone
   });

    res.status(201).json( contact);

    });



 //description  GET contact
//route get /api/contacts
//access public (initially)

const getContact=  asyncHandler(async(req, res) =>{
   const contact= await Contact.findById(req.params.id)

   if(!contact){
         res.status(404);
         throw new Error("Contact Not Found")
   }
   res.status(200).json(contact);
});
    

 //description  UPDATE contacts
//route PUT /api/contacts
//access public (initially)

const updateContact=  asyncHandler(async(req, res) =>{
   const contact= await Contact.findById(req.params.id)

   if(!contact){
         res.status(404);
         throw new Error("Contact Not Found")
   }
   const updateContact= await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
   );

    
   res.status(200).json({message :`update contact for ${req.params.id}`})
});

    
 //description  DELETE contacts
//route delete /api/contacts
//access public (initially)

const deleteContact=  asyncHandler(async(req, res) =>{
   const contact= await Contact.findById(req.params.id)

   if(!contact){
         res.status(404);
         throw new Error("Contact Not Found")
   }
   await Contact.remove();
   res.status(200).json(contact);
});

    



















 module.exports=  {getContacts , createContact , getContact, updateContact   , deleteContact};
