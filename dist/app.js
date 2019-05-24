"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const main_route_1 = __importDefault(require("./router/main.route"));
// intiialize configuration
dotenv_1.default.config();
// port is now available to the Node.js runtime
// as if it were an enveionment variable
const port = process.env.SERVER_PORT;
const app = express_1.default();
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send(`Hello ${main_route_1.default.name}`);
});
app.use(main_route_1.default.router);
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map