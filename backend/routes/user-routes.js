import express from "express"
import { loginUser, registerUser, updateUser } from "../controllers/user-controller";
import { authMiddleware } from "../middleware/authMiddleware";


const userRoute = express.Router();

userRoute.post("/register",registerUser)
userRoute.post("/login",loginUser)
userRoute.put("/update/:id",authMiddleware,updateUser)

export default userRoute