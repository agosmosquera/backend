import fs from "fs";
import multer from "multer";

import { fileURLToPath } from "url";
import { dirname } from "path";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

async function readFile(file) {
  try {
    let readfilename = __dirname + "/" + file;
    console.log("readfile", readfilename);
    let result = await fs.promises.readFile(__dirname + "/" + file, "utf-8");
    let data = await JSON.parse(result);
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function writeFile(file, data) {
  try {
    await fs.promises.writeFile(__dirname + "/" + file, JSON.stringify(data));
    return true;
  } catch (err) {
    console.log(err);
  }
}

async function deleteFile(file) {
  try {
    await fs.promises.unlink(__dirname + "/" + file);
    return true;
  } catch (err) {
    console.log(err);
  }
}

/// multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/../public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const uploader = multer({ storage }).single("file");

export default { readFile, writeFile, deleteFile };
