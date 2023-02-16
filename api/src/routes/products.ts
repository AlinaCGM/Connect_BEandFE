// create product routes here
import { Router } from "express";
import { getAllProducts } from "../controllers/products";
import { createItem } from "../controllers/products";
import { deleteItem } from "../controllers/products";

const router = Router();

router.get("/", getAllProducts);
router.post("/", createItem);
router.delete("/:id", deleteItem);

export default router;
