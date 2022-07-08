import mongoose from "mongoose"


const Schema = mongoose.Schema;

const fileSchema = new Schema({
    fileName :{
        type: String,
        required: true,
    },
    secure_url:{
        type: String,
        required: true,
    },
    format:{
        type: String,
        required: true,
    },
    sizeByByte:{
        type: String,
        required: true,
    },
    sender:{
        type: String,
    },
    recever:{
        type: String,
    }
},{timestamps: true})

export default mongoose.model('File',fileSchema)