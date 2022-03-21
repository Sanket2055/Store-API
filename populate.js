require('dotenv').config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const jsonProducts = require("./products.json");

const start= async ()=>{
    // console.log("starting");
    try {
        // connect db
        // console.log("connecting to db");
        await connectDB(process.env.MONGO_URI);
        // populate db
        await Product.insertMany(jsonProducts);
        console.log("DB populated");
    } catch (error) {
        console.log(error);
    }
}
start();