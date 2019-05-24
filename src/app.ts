import dotenv from "dotenv";
import express from "express";

import main from "./router/main.route";

// intiialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an enveionment variable
const port = process.env.SERVER_PORT;

const app = express();

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( `Hello ${main.name}!!!` );
} );

app.use(main.router);

// start the Express server
app.listen( port, () => {
  // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
