import express from "express";
import {
  addUser,
  getAllUsers,
  getSingleUser,
} from "../controllers/userController";

const router = express.Router();

router.route("/").get(getAllUsers).post(addUser);
router.route("/:id").get(getSingleUser);

export default router;
