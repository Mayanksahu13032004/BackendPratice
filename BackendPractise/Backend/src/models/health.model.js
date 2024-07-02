import mongoose,{Schema} from "mongoose";
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"


const patientSchema=new Schema(
  {
  lion:{
    type:String,
    required:true
  },
  diagonsedWith:{
    type:String,
    required:true
  },
  tiger:{
    type:String,
    required:true
  },
  
},{timestamps:true});

export const Patient=mongoose.model("Patient",patientSchema);