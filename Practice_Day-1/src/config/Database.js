const { default: mongoose } = require("mongoose")


const connectDB = async()=>{
   try {
     await mongoose.connect("mongodb+srv://pj7389780_db_user:pARAS_JAIN_123@cluster0.lytmavi.mongodb.net/")
     console.log("Database Connected")
   } catch (error) {
    console.log("Error while connecting Database ",error)
   }
}


module.exports = connectDB