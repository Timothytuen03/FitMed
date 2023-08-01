import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

let Schema = mongoose.Schema;

let userSchema = new Schema( {
    email: {
        type: String,
        unique: true,
        required
    }
})