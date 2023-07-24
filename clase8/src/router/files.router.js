import { Router } from "express";
import { uploader } from "../utils.js";
import multer from "multer";

const router = Router();
const files = [];

router.get("/", (req, res) => {
  res.json({ message: "success", data: files });
});

router.post("/", uploader, (req, res) => {
  console.log(req.file);

  files.push(req.body);
  res.json({ message: "usuario agregado", data: req.body });
});
router.post(
  "/upload",
  multer({ dest: "uploads/" }).single("file"),
  (req, res) => {
    console.log(req.file);

    files.push(req.body);
    res.json({ message: "usuario agregado", data: req.body });
  }
);

export default router;
