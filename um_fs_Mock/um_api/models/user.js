import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema =new Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
    unique: true
  },
  role:{
    type:String,
    default: 'Customer'
  },
},{timestamps:true});

export default mongoose.model('User',UserSchema,'users');