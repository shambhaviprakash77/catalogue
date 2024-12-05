import cataloguerr from "../models/cataloguemodel.js";
export const createcatalogue=async(req,res)=>{
    try{
        const catalogueData= cataloguerr(req.body);
        if(!catalogueData){
            return req.status(404).json({msg:"catalogue not found"});
        }
        await catalogueData.save();
        res.status(200).json({msg:"catalogue created successfully"});
           }
    catch(err){
        res.status(500).json({error:err.message});
    }

}

 export const getAllcatalogue= async(req,res)=>{
    try{
        const catalogueData = await cataloguerr.find();
        if(!catalogueData){
            return res.status(404).json({msg:"catalogueData is not found"});
        }
        res.status(200).json(catalogueData);
    }
    
    catch(err){
        res.staus(500).json({error:err.message});

    }
}
export const getOnecatalogue=async(req,res)=>{
    try{
        const id = req.params.id;
        const catalogueData=await cataloguerr.findById(id);
        if(!catalogueData){
            return res.status(404).json({msg:"catalogueData is not found"});
        }
        res.status(200).json(catalogueData);
    }
    
    catch(err){
        res.staus(500).json({error:err.message});

    }
}
export const updatecatalogue=async(req,res)=>{
    try{
        const id = req.params.id;
        const catalogueData=await cataloguerr.findById(id);
        if(!catalogueData){
            return res.status(404).json({msg:"catalogueData is not found"});
        }
        await cataloguerr.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({msg:"catalogue updated successfully"});
    }

    
    catch(err){
        res.staus(500).json({error:err.message});

    }
}
export const deletecatalogue=async(req,res)=>{
    try{
        const id = req.params.id;
        const catalogueData=await cataloguerr.findById(id);
        if(!catalogueData){
            return res.status(404).json({msg:"catalogueData is not found"});
        }
        await cataloguerr.findByIdAndDelete(id,req.body,{new:true})
        res.status(200).json({msg:"catalogue deleted successfully"});
    }

    
    catch(err){
        res.staus(500).json({error:err.message});

    }
}

 
 

 
 