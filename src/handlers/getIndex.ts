import {Request, Response} from "express";

export const getIndex = (req: Request, res: Response) =>
	res.sendFile(`${process.cwd()}/public/index.html`);