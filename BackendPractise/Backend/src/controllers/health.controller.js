import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { Patient } from "../models/health.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const PatientHealthRegister=asyncHandler(async(req,res)=>{
 
console.log("register patient");
console.log("The patient is reigistred is successfully:-");


const {name,email,Password}=req.body
console.log("name:-",name);
console.log("email:-",email);
console.log("password:-",Password);
console.log(req.body);

if(
   [name,email,Password].some((field)=>
   field?.trim()==="")
)
{
   throw new ApiError(400,"All fields are required")
}


const existeduser=await Patient.findOne({
   $or:[{email},{Password}]
})


if (existeduser) {
    throw new ApiError(409,"user with email or name already exits")
}

const patient=await Patient.create({
   name,
   email,
   Password
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

const {email,Password}=req.body
console.log("email is :-",email)
console.log("passwoerd is :-",Password)
})


export {PatientHealthRegister,HealthLogin}
