import {access, mkdir} from "fs/promises";

export const checkIfFoldersExist = async (dirs: string[]) => {
	for(let i = 0; i < dirs.length; ++i) {
		try {
			await access(dirs[i]);
		} catch {
			await mkdir(dirs[i]);
		}
	}
};