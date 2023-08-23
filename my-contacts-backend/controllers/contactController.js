//controllers will handle all requests and connected to db

//description GET all contacts
//route GET /api/contacts
//access public (initially)

 const getContacts = (req, res) =>{
    res.status(200).json({message :"get all the contacts"})
 };

 //description  create contacts
//route POST /api/contacts
//access public (initially)

const createContact= (req, res) =>{
   console.log("The req body is :" , req.body);
   const{name , email, phone} = req.body;
   if(!name || email || phone){
      res.status(400);
      throw new Error("All fields are mandatory")
   }

    res.status(201).json({message :"Create contact"})

    };



 //description  GET contact
//route POST /api/contacts
//access public (initially)

const getContact= (req, res) =>{
   res.status(200).json({message :`Get contact for ${req.params.id}`});
};
    

 //description  UPDATE contacts
//route PUT /api/contacts
//access public (initially)

const updateContact= (req, res) =>{
   res.status(200).json({message :`update contact for ${req.params.id}`})
};

    
 //description  DELETE contacts
//route delete /api/contacts
//access public (initially)

const deleteContact= (req, res) =>{
   res.status(200).json({message :`delete contact for ${req.params.id}`})
};

    



















 module.exports=  {getContacts , createContact , getContact, updateContact   , deleteContact};
