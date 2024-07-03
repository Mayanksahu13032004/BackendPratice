import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { Patient } from "../models/health.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const PatientHealthRegister=asyncHandler(async(req,res)=>{
 
console.log("register patient");
console.log("The patient is reigistred is successfully:-");


const {diagonsedWith,lion,tiger}=req.body
console.log("diagonsedwith:-",diagonsedWith);
console.log("lion:-",lion);
console.log("tiger:-",tiger);
console.log(req.body);

if(
   [diagonsedWith,lion,tiger].some((field)=>
   field?.trim()==="")
)
{
   throw new ApiError(400,"All fields are required")
}


const existeduser=await Patient.findOne({
   $or:[{diagonsedWith},{lion}]
})


if (existeduser) {
    throw new ApiError(409,"user with email or username already exits")
}

const patient=await Patient.create({
   diagonsedWith,
   lion,
   tiger
})

const createPatient=await Patient.findById(patient._id).select("")


if (!createPatient) {
   throw new ApiError(500,"Something went wrong  while register Patient")
}

return res.status(201).json(
   new ApiResponse(200,createPatient,"patient register sucessfully:-")
)
})





const HealthLogin=asyncHandler(async(req,res)=>{
console.log("health login")

const {lion,tiger}=req.body
console.log("lion is :-",lion)
console.log("tiger is :-",tiger)
})


export {PatientHealthRegister,HealthLogin}
