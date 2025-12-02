import {Router} from "express";
import { todo } from "../controllers/todo.controller";

const router = Router();

router.post("/create",todo);

export default router;