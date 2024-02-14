import User from "../models/User"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body

        if (!name && !email && !password) {
            return res.status(420).json({ message: "all fields are required" })
        }

        const newEmail = email.toLowerCase()
        const emailExits = await User.findOne({ email: newEmail })

        if (emailExits) {
            return res.status(422).json({ message: "Email already exits" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({ name, email: newEmail, password: hashedPassword })
        res.status(201).json(newUser)

    } catch (err) {
        return res.status(420).json({ message: err.message })
    }
}


//login user
export const loginUser = async(req,res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(422).json({message:"Fill in all fields"})
        }

        const newEmail = email.toLowerCase()
        const user = await User.findOne({ email: newEmail })

        if (!user) {
            return res.status(422).json({message:"Invalid credentials"})
        }

        const comparePassword = await bcrypt.compare(password, user.password)
        if (!comparePassword) {
            return res.status(422).json({message:"Invalid password"})
        }

        const { _id: id, name } = user
        const token = jwt.sign({ id, name }, process.env.JWT_SECRET, { expiresIn: "1d" })

        return res.status(200).json({ token, id, name })

    } catch (error) {
        return res.status(422).json({message:"Login failed check your credentials"})
    }
}


//update a user
export const updateUser = async(req,res) => {

    try{
        const { name, email, password } = req.body

        if(!name && !email && !password){
            return res.status(422).json({message:"all fields are required"})
        }

        const user = await User.findById(req.user.id)
        if(!user){
            return res.status(422).json({message:"User not found"})
        } 

        const emailExits = await User.findOne({email})

        if(emailExits && (emailExits._id != req.user.id)){
            return res.status(422).json({message:"email already exits"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        const updatedUser = await User.findByIdAndUpdate(req.user.id,{name,email,password:hashPassword},{new:true})
        return res.status(200).json(updatedUser)

    }catch(err){
        return res.status(422).json({message:"error updating user"})
    }
}