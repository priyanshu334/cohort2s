"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("hello");
});
app.listen(3000, () => {
    console.log("listning at 3000");
});
