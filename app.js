require('dotenv').config();
// async erros
require('express-async-errors');

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productsrouter = require("./routes/products");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
    res.send('<h1>Store API</h1> <a href="/api/v1/products">Products route</a>');
});
app.use('/api/v1/products' , productsrouter );
// route
// product routes
app.use(notFoundMiddleware);
app.use(errorMiddleware);


const port = process.env.PORT || 3000;

const start = async ()=>{
    try {
        // connect db
        await connectDB(process.env.MONGO_URI);
        app.listen(port , console.log(`Server started on port ${port}`));
        
    } catch (error) {
        console.log(error);
    }
}
start()