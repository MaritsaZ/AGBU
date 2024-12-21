//install mongoose ORM-@ (object relation mapping)

// mongoose.connect("mongodb+srv://maritsaz:Mongoparol6@agbu.uc9el.mongodb.net/", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log('MongoDB connected'))
//     .catch((err) => console.error('MongoDB connection error:', err));
// async function a(){
//     let name = "hjgkjh";
//     let email = "hil';oj";
//     let age = 24; 
//     const user = new User({ name, email, age });
//     const savedUser = await user.save();
// }
// a();
///////////express, router
const express = require('express');
const app = express();
const api = require("./router");
// const User = require('./mongo.schema');

require('dotenv').config();
const port = process.env.PORT;
app.use(express.json());
app.use("/api/v1", api );


app.listen(port, ()=>{
    console.log("port 4000");
    
})

