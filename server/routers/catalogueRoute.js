import express from 'express';
import {createcatalogue, deletecatalogue, getAllcatalogue, getOnecatalogue, updatecatalogue} from "../controllers/catalogueController.js";
const route=express.Router();
route.post("/create",createcatalogue);
route.get("/get",getAllcatalogue);
route.get("/getOne/:id",getOnecatalogue);
route.put("/update/:id",updatecatalogue);
route.delete("/delete/:id",deletecatalogue)
export default route;

