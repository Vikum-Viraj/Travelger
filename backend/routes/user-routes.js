import express from "express"
import { loginUser, registerUser, updateUser } from "../controllers/user-controller";
const userRoute = express.Router();

userRoute.post("/register",registerUser)
userRoute.patch("/update/:id",updateUser)
userRoute.post("/login",loginUser)

export default userRoute