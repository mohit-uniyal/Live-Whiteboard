const mongoose=require('mongoose');
const {Schema}=mongoose;

const boardSchema=new Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    users: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
},
{
    timestamps: true
});

const Board=mongoose.model('Board',boardSchema);
module.exports = Board;