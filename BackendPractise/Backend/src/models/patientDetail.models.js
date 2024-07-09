import mongoose,{Schema} from "mongoose";
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"


const patientDetailSchema=new Schema(
  {
    OPDNo:{
      type:Number,
      required:true
    },
  fullname:{
    type:String,
    required:true
  },
  fathername:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  mobilenumber:{
    type:Number,
    required:true
  },
  disease:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    required:true
  },
},{timestamps:true});

export const PatientDetail=mongoose.model("PatientDetail",patientDetailSchema);