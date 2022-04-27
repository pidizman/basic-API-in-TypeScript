import "dotenv/config";
import {app} from "./app";
import {getIndex} from "./handlers/getIndex";
import {uploadImage} from "./handlers/uploadImage";

const PORT = process.env.PORT;

app()
  .get("/", getIndex)
  .post("/", uploadImage)
  .listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });