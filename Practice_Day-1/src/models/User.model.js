const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        maxLength:3,
    }
})

UserModel = mongoose.model("User",UserSchema)
module.exports = UserModel;




