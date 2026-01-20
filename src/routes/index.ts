import { Router } from "express";
import { createUser, getUser, updateUser, deleteUser, getAllUsers } from "../controllers/index";

const router = Router();

router.post("/users", createUser);
router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/users", getAllUsers);

export default router;