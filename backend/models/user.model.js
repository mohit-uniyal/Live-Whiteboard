const mongoose=require('mongoose');
const {Schema} = mongoose;

const userSchema=new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verifyCode: {
        type: String
    },
    boards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Board"
        }
    ]
},
{
    timestamps: true
});

const User=mongoose.model("User", userSchema);
module.exports=User;