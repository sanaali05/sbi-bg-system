import express from "express";
import router from "./route/route.js";
import "./database/Connection.js";
import "dotenv/config";
import cors from 'cors'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path'


const app = express();
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors())
app.use(express.json());
app.use("/", router);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.use(express.static(path.join(__dirname, '/client/build')));

// app.get('*',(request,response)=>{

//     response.sendFile(path.join(__dirname, '/client/build/index.html'))

// })

app.listen(port, () => {
    console.log(`server is start on ${port}`)
})
