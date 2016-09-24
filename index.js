// REQUIRE express, body-parser's json method, SET app to express' object
const express = require( "express" );
const { json } = require( "body-parser" );
const app = express();
// PORT
const port = 8899;

// MIDDLEWARE
const middleware = require( "./controllers/middleware.js" );
const mainCtrl = require( "./controllers/mainCtrl.js" );
app.use( middleware.addHeaders );
// ROUTES


//REST
app.get( "/api/name", mainCtrl.getName );
app.get( "/api/location", mainCtrl.getLocation );
app.get( "/api/occupations", mainCtrl.getOccupations );
app.get( "/api/hobbies", mainCtrl.getHobbies );


// LISTEN
app.listen( port, () => console.log( `Personal API is listening on port: ${ port }` ) );
