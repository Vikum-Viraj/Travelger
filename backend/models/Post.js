import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
    place:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:false
    },
})

export default mongoose.model("Post",postSchema);