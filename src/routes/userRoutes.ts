import express from "express";
import {
  addUser,
  deleteSingleUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
} from "../controllers/userController";

const router = express.Router();

router.route("/").get(getAllUsers).post(addUser);
router
  .route("/:id")
  .get(getSingleUser)
  .delete(deleteSingleUser)
  .put(updateSingleUser);

export default router;
