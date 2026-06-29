import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Porvide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide a email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email address'
        ]
    },
    password: {
        type: String,
        requred:[true, 'Please provide a password'],
        minlength: 6,
        select: false,
    },
},
{
    timestamps: true,
}
);

const user = mongoose.model("user", userSchema);
export default user;
