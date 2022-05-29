"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const nanoid_1 = require("nanoid");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(express_fileupload_1.default());
app.use(express_1.default.static('static'));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});
app.post("/", (req, res) => {
    const isArray = Array.isArray(req.files.file);
    const file = isArray ? req.files.file[0] : req.files.file;
    const filename = file.name;
    const arrayFile = filename.split('.');
    const pathFile = arrayFile.pop();
    const fileName = nanoid_1.nanoid() + "." + pathFile;
    file.mv('./static/imgs/' + fileName, function (err) {
        err && res.send(err);
        res.send(`Image upload on https://localhost:3000/imgs/${fileName}`);
    });
    console.log(req.files);
});
app.listen(8080, () => {
    console.log("Server ready!");
});
