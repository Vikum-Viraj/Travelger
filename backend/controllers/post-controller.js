import Post from '../models/Post'
import HttpError from '../models/errorModel'
import moment from "moment";

//add place
export const addPlace = async (req, res, next) => {

    try {
        const { place, location, description, price, img } = req.body
        if (!place && !location && !description && !price && !img) {
            return res.status(422).json({message:"all fields are required"})
        }
        const dateCreated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
        const post = new Post({
            place, location, description, price, img, dateCreated
        })
        await post.save()
        res.status(200).json(post)
    } catch (err) {
        return res.status(420).json({message:err})
    }

}


//update place
export const updatePlace = async (req, res,next) => {

    try {
        const { id } = req.params
        const { place, location, description, price, img } = req.body

        const dateUpdated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

        if (!place && !location && !description && !price && !img) {
            return res.status(422).json({message:"all fields are required"})
        }

        const updatedPost = await Post.findByIdAndUpdate(
            { _id: id },
            { place, location, description, price, img,dateUpdated },
            { new: true }
        )

        await updatedPost.save()
        res.status(200).json(updatedPost)

    } catch (err) {
        return res.status(420).json({message:err})
    }

}


//get all places
export const getAllPlaces = async (req, res,next) => {

    let places;

    try {
        places = await Post.find()

        if (!places) {
            return res.status(422).json({message:"No places found"})
        }

        return res.status(201).json(places)

    } catch (err) {
        return res.status(420).json({message:err})
    }
}


//get place By Id
export const getPlaceById = async (req, res,next) => {
    const { id } = req.params
    let place;
    
    try {

        place = await Post.findById(id)

        if (!place) {
             res.status(422).json({message:"No place found with id"})
        }

        return res.status(201).json(place)

    } catch (err) {
        return res.status(420).json({message:err})
    }

}   

//delete place by id
export const deletePlaceById = async(req,res,next) => {

    const { id } = req.params
    let place;
    
    try {

        place = await Post.findByIdAndDelete({_id:id})

        if (!place) {
            return res.status(422).json({message:"error deleting this post"})
        }

        return res.status(201).json({message:"Successfully deleted post"})

    } catch (err) {
        return next(new HttpError(err))
    }

}