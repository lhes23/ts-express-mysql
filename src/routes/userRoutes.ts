import express from "express";
import {
  addUser,
  deleteSingleUser,
  getAllUsers,
  getSingleUser,
} from "../controllers/userController";

const router = express.Router();

router.route("/").get(getAllUsers).post(addUser);
router.route("/:id").get(getSingleUser).delete(deleteSingleUser);

export default router;
