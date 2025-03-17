import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth";

const authRouter = Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser)

export {authRouter};