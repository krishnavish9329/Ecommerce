import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    let { Name, Email, Password, Phone, Address ,Answer} = req.body;
    console.log(req.body)

    if (Email) {
      Email = Email.toLowerCase().trim();
    }

    //validations
    if (!Name) {
      return res.send({ message: "Name is Required" });
    }
    if (!Email) {
      return res.send({ message: "Email is Required" });
    }
    if (!Password) {
      return res.send({ message: "Password is Required" });
    }
    if (!Phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!Address) {
      return res.send({ message: "Address is Required" });
    }
    if  (!Answer) {
      return res.send({ message: "Address is Required" });
    }
    //check user
    console.log(Name)
    console.log(Email)
    console.log(Password)
    console.log(Phone)
    console.log(Answer)
    const exisitingUser = await userModel.findOne({ Email });
    //exisiting user
    console.log("kkdebug" +"----")
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(Password);
    //save
    const user = await new userModel({
      Name,
      Email,
      Phone,
      Address,
      Password: hashedPassword,
      Answer,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }
};

//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    //validation
    console.log(Email, Password)
    if (!Email || !Password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    console.log(Email, Password)
    //check user
    const user = await userModel.findOne({ Email });
    console.log(user)
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(Password, user.Password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        Name: user.Name,
        Email: user.Email,
        Phone: user.Phone,
        Address: user.Address,
        role:user.Role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

// Forgot Password Controler

 export const forgotPasswordController = async(req,res)=>{
  
  try{
      const {Email, Answer, NewPassword } = req.body

      if(!Email){
        res.status(400).send({message:"Email is required"})
      }
      if(!NewPassword){
        res.status(400).send({message:"newPassword is required"})
      }
      if(!Answer){
        res.status(400).send({message:"Answer is required"})
      }

      //check 
      console.log(Email, Answer, NewPassword )
      const  user = await userModel.findOne({Email:Email,Address:Answer})
      
      // validation
      if(!user)
        {
          console.log("user not found ");
          return res.status(404).send({
            success:false,
            message:"wrong Email Or Answer",
          })
        }
        
      // console.log(user+ " - after");

      const hashedPassword = await hashPassword(NewPassword);
      console.log(hashedPassword)
      await userModel.findByIdAndUpdate(user._id, { Password: hashedPassword });
      console.log(userModel)
      res.status(200).send({
        success:true,
        message:"password Reset Successfully",
      });
  }
  catch(e)
  {
    console.log("ERROR -----"+ e);
    res.status(500).send({
      success:false,
      message:"something is wrong",
      e,
    })
  }

}

//test controller
export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
