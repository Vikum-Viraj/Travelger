import express from "express"
const postRoute = express.Router();
import {addPlace, deletePlaceById, getAllPlaces, getPlaceById, updatePlace} from '../controllers/post-controller'

postRoute.post('/add',addPlace)
postRoute.put("/update/:id",updatePlace)
postRoute.get("/all",getAllPlaces)
postRoute.get("/getone/:id",getPlaceById)
postRoute.delete("/delete/:id",deletePlaceById)

export default postRoute