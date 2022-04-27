import {Request, Response} from "express";
import {nanoid} from "nanoid";
import {checkIfFoldersExist} from "../checkIfFoldersExist";

const STATIC = "static";
const ROOT = `./${STATIC}/imgs`;

export const uploadImage = async (req: Request, res: Response) => {
	if(req.files) {
		await checkIfFoldersExist([`./${STATIC}`, ROOT]);

		const files = Array.isArray(req.files.file)
			? req.files.file
			: [req.files.file];

		for(let i = 0; i < files.length; ++i) {
			const file = files[i];
			const filename = `${nanoid()}${file.name.slice(file.name.lastIndexOf("."), file.name.length)}`;

			file.mv(`${ROOT}/${filename}`, (err) => {
				err && res.send(err);
				res.send(`Image upload on http://localhost:${process.env.PORT}/imgs/${filename}`)
			});
		}
	}
};