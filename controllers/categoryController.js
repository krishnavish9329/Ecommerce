import categoryModal from "../models/categoryModal.js";
import slugify from "slugify";

export const createCategoryController = async(req, res)=>{
    try{
        const {name}= req.body
        if(!name){
            return res.status(401).send({message:"Name is required"})
        }
        const exisitingCategory = await categoryModal.findOne({name});
        if(exisitingCategory){
            return res.status(200).send({
                success:true,
                message:'Category Already exisits'
            })
        }

        const category =  await new categoryModal({name,slug:slugify(name)}).save()

        res.status(201).send({
            success:true,
            message:'new Category Created',
            category
        })

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in Category"
        })

    }

}

//update category

export const updateCategoryController = async (req, res )=>{
    try{
        const {name} = req.body
        const {id} =req.params
        console.log(name, id)
        const category = await categoryModal.findByIdAndUpdate(
            id,
            {name,slug:slugify(name)},
            {new: true}
        );
        console.log(category);
        res.status(200).send({
            success:true,
            message:"category updated successfully",
            category
        })

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error while updateting Category"
        })

    }
}
// get all category
export const categoryControler = async (req,res)=>{
    try{
        const category = await categoryModal.find({})
        console.log(category);
        res.status(200).send({
            success:true,
            message:" All category list",
            category
        })

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting all Category"
        })

    }
}
//single category
export const singleCategoryControler = async(req,res)=>{
    try{
        const category = await categoryModal.findOne({slug:req.params.slug})
        console.log(category);
        res.status(200).send({
            success:true,
            message:"Get single category successfully",
            category
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting single Category"
        })
    }
}

//delete category 

export const deleteCategoryControler =async(req,res)=>{
    try{
        const category = await categoryModal.findByIdAndDelete({id:req.params.id})
        console.log(category);
        res.status(200).send({
            success:true,
            message:"deleted category successfully",
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error while deleteing Category"
        })

    }
}