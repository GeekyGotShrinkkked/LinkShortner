import mongoose, { mongo } from "mongoose";

const urlSchema = new mongoose.Schema({
    urlCode:{
        type: String,
        required: true,
    },
    shortURL:{
        type: String,
        required: true,
    },
    clicks: {
        type: Number, 
        reuired: true,
        default:0,
    },
    date:{
        type: Date,
        default: Date.now,
    },

});

const url = mongoose.model("url", urlSchema);

export default url;
