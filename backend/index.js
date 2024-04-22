import express from "express"
import { PORT , MONGOURL} from "./config.js";
import mongoose from "mongoose";
import bookRouter from './Routes/booksRoutes.js'
import cors from 'cors'


const app = express();


// Middleware for parsing JSON request bodies
app.use(express.json());

// methods for handling cors policy
//option 1 - allow all origin with default of cors(*)
app.use(cors());

// option-2 - allow custom origin
// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','DELETE','PUT'],
//     allowedHeaders:['Content-Type'],
// }))


//route for home page
app.get('/',(req,res)=>{
    return res.status(234).send("Welcome To mernStack tutorial");
})

app.use('/books',bookRouter);








mongoose.connect(MONGOURL)
.then(()=>{
    console.log('App Connected to Database');
    app.listen(PORT,()=>{
        console.log(`App is listening to port : ${PORT}`);
    })
    
    
})
.catch((err)=>{
    console.log(err);
})