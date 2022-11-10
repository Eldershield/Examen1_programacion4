const express = require('express');

class Server{
   constructor(){
    this.app=express()
    this.routes();
   
   }

   routes(){
    this.app.use('/eventos',require('../routes/eventos'))
   }

   listen(){
    this.app.listen(process.env.PORT,()=>
    console.log("El puerto esta corriedno el puerto TCP"+process.env.PORT))
   }
}

module.exports =Server