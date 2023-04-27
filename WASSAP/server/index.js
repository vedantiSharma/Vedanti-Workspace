const http = require("http");
const  express = require("express");
const socketIO = require("socket.io");

const cors = require("cors");
//const { protocol } = require("engine.io-parser");

const app = express();
const port = 4500|| process.env.PORT;

const users= [{}];

app.use(cors());

app.get("/",(req,res)  => {
    res.send("hell it is working");
})


const server = http.createServer(app);

const io = socketIO(server);

io.on("connection",(socket) =>{
    console.log("new connection");  
    
    socket.on('joined' , ({user})=>
    {
        users[socket.id] = user;
        console.log(`${user} has joined`);
       socket.broadcast.emit('userJoined'  , {user:"Admin" , message:`${user[socket.id]} has joined`});
    
        socket.emit('welcome', {user : "Admin" , message: `welcome to the chat ,${user[socket.id]}`})


    })
     socket.on('message' , ({message , id}) =>{
        io.emit('sendMessage' , {user:users[id], message , id});

     })



 socket.on('disconnect' , ()=>{

    socket.broadcast.emit('leave' , {user:"Admin" , message:`${user[socket.id]} has left}`});
    console.log(`User left`);
 })

});

server.listen(port,()=>{
    console.log(`server is working on http://localhost:${port}`);    
});
