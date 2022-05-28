"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const nanoid_1 = require("nanoid");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, express_fileupload_1.default)());
app.use(express_1.default.static('static'));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});
app.post("/", (req, res) => {
    const file = req.files.file;
    const filename = file.name;
    const arrayFile = filename.split('.');
    const pathFile = arrayFile.pop();
    const fileName = (0, nanoid_1.nanoid)() + "." + pathFile;
    file.mv('./static/imgs/' + fileName, function (err) {
        err && res.send(err);
        res.send(`Image uplod on https://basic-API-in-TypeScript.filipos01.repl.co/imgs/${fileName}`);
    });
    console.log(req.files);
});
app.listen(PORT, () => {
    console.log("Server ready!");
});
