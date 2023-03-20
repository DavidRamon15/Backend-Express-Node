 const express = require('express');
 require('dotenv').config();

 //create express server
const app = express();

 //Public directory
 app.use( express.static('public') );

 //reading and parsing of the body
 app.use( express.json() );

 //Rutes 
 //app.use('/api/auth' , require('./routes/auth'))
 app.use('/' , require('./routes/history'))



 

 //Listening to requests
 app.listen( process.env.PORT , () =>{
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
 });