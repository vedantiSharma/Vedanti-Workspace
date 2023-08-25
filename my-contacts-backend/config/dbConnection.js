const mongoose = require("mongoose");

const connectDb = async () => {

    try {
        console.log("connnn " + process.env.CONNECTION_STRING);
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DataBase Connected",
            connect.connection.host,
            connect.connection.name);

    } catch (err) {
        console.log(err);
        process.exit(1);

    }

}

module.exports = connectDb;
// const mongoose = require("mongoose");

// const connectDb = async () => {
//     try {
//         await mongoose.connect(process.env.CONNECTION_STRING, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Database Connected to", mongoose.connection.host, mongoose.connection.name);
//     } catch (err) {
//         console.error("Error connecting to the database:", err.message);
//         process.exit(1);
//     }
// };

// module.exports = connectDb;
