const mongoose=require('mongoose');
const {Schema} = mongoose;
const bcrypt=require('bcryptjs');

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

userSchema.pre('save', async function(next){
    if(this.isModified(password)){
        this.password=await bcrypt.hash(password, 10);
    }
    next();
})

const User=mongoose.model("User", userSchema);
module.exports=User;