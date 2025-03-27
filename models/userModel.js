import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true
    },
    Email: {
      type: String,
      required: true
      //unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true
    },
    Address: {
      type: String,
      required: true
    },
    Answer:{
      type:String,
      require:true
    },
    Role: {
      type: Number,
      default: 0
    },
  },
  { timestamps: true }
);
// console.log(userSchema)
export default mongoose.model("users", userSchema);
