require("dotenv").config();
const db = require("./db");
const express = require("express");
const morgan = require("morgan");
const app = express();







app.use(express.json());

//app.use(morgan("dev"));
//***************creating middleware for server*********
//with the help of a middle ware we can actually send a respose to the user also it
//it should be in correct sequence
// app.use((req,res , next) =>{
//     console.log("yea our middleware")
//    next();
// }); 

//GET all restaurant
app.get("/api/v1/restaurants", async(req, res) => {

    try{
        const results = await db.query("select * from restaurants");

        //**normanl response method res.send("these are the restaurants")
        console.log(results);
        //jason format now:-
        res.status(200).json({
            "status": "success",
            results : results.rows.length,
            data:
            {
                "restaurant": results.rows,
            },
    
        });
  }catch(err){
    console.log(err);



    }
 
});


//GET a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: "success",
        data:{
            restaurant : "mcdonalds"

        },
    });
});


//CREATE a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);

    res.status(201).json({
        status: "success",
        data:{
            restaurant : "mcdonalds"

        },
    });
});



//UPDATE restaurants
app.put("/api/v1/restaurants/:id" , (req , res) =>{
 console.log(req.params.id);
 console.log(req.body);
 res.status(200).json({
    status:"succes",
    data:{
        restaurant : "mcdonalds"
    },
 });
});

//DELETE restaurant

app.delete("/api/v1/restaurants/:id " ,(req , res) =>{
    res.status(204).json({
        status:"Succes"
    });

});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is started on port ${port}`)
});


