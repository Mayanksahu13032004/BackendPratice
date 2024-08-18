import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {PatientDetail} from "../models/patientDetail.models.js" 
import { ApiResponse } from "../utils/ApiResponse.js";


const patientdetailform=asyncHandler(async(req,res)=>{
    console.log("The patient detail form");

const {fullname,OPDNo,age,disease,gender,fathername,mobilenumber}=req.body
console.log("fullname:",fullname);
console.log("age:",age);

console.log("disease:",disease);

console.log("gender:",gender);

console.log("fathername:",fathername);
console.log("mobilenumber:",mobilenumber);
console.log("OPDNo",OPDNo);

if(
    [fullname,age,disease,gender,fathername,mobilenumber,OPDNo].some((field)=>
    field?.trim()==="")
 )
 {
    throw new ApiError(400,"All fields are required")
 }

 
const patientdetailsuccess=await PatientDetail.create({
    OPDNo,
    fullname,
    age,
    disease,
    gender,
    fathername,
    mobilenumber
   
})
const createpatientdetailsuccess=await PatientDetail.findById(patientdetailsuccess._id)
if (!createpatientdetailsuccess) {
    throw new ApiError(500,"Something went wrong  while register Patient detail")
 }






 return res.status(201).json(
        new ApiResponse(200,createpatientdetailsuccess,"Patient Detail Save Sucessfully:-")
     )
})


 
const searchPatientByOPD=asyncHandler(async(req,res)=>{


    const {OPDNo}=req.body
    console.log("opd no. has",OPDNo);
    const opdsearch=await PatientDetail.findOne({OPDNo : OPDNo})

console.log("opdsearch",opdsearch);

if(opdsearch==null){
// throw new ApiError(201,"Invalid OPDNo.")
return res.status(201).json(
    new ApiResponse(400,"Invalid OPDNo.")
)
}


else{
    return res.status(201).json(
        new ApiResponse(200,opdsearch,"Patient serach is Sucessfully:-")
     )
}



    
 })
export {patientdetailform,searchPatientByOPD}