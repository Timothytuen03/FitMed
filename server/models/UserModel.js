import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

let Schema = mongoose.Schema;

let userSchema = new Schema( {
    email: {
        type: String,
        unique: true,
        required
    },
    username: {
        type: String,
        unique: true,
        required
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    // profilePicture: 
})

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);
export default User;