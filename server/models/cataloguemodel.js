import mongoose from "mongoose";

const catalogueSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    number_of_copies:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },

});
export default mongoose.model("cataloguerr",catalogueSchema);
