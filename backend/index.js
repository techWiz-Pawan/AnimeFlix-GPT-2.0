// Step - 1
// const express = require("express");
// or
// you can use 'import' by just adding `"type": "module",` in package.json
import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path: ".env"
})

// express ko humne call isliye kyuki hum chahte hai ke 'app' ko use karke express ke saari functionality use kar paye.
const app = express();

app.listen(process.env.PORT, ()=>{
    console.log(`Server listen at port ${process.env.PORT}`);
});



// note : to use nodemon run with 'npm run dev'