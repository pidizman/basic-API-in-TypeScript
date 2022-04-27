import express, {Express} from "express";
import bodyParser from "body-parser";
import upload from "express-fileupload";

export const app = (): Express => {
	return express()
		.use(bodyParser.urlencoded({ extended: false }))
		.use(bodyParser.json())
		.use(upload())
		.use(express.static("static"));
};