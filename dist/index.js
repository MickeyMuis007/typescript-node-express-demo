"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// intiialize configuration
// dotenv.config();
// port is now available to the Node.js runtime
// as if it were an enveionment variable
const port = 3000;
const app = express_1.default();
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!!!");
});
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map