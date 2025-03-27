import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};




// const connectDB = ()=>  // seconde way to connect mongoDb database
//   {
//     mongoose.connect(process.env.MONGO_URL)
//     .then(()=>{console.log(`connected data base`)})
//     .catch((e)=>{console.log(`Error in mongoDb ${e}`)})
//   }

  export default connectDB;