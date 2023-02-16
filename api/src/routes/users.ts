import { Router } from "express";
import { createUser, logInUser, getUser } from "../controllers/users";

const router = Router();

router.post("/", createUser);
router.post("/login", logInUser);
router.get("/:id", getUser);

export default router;
