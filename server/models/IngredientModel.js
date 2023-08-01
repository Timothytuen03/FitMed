import { Double } from "mongodb";
import mongoose from "mongoose";

const ingredientSchema = mongoose.Schema({
    name: {
        type: String,
        required
    },
    unit: {
        type: String,
        required
    },
    amount: {
        type: Double,
        required
    }
})

const Ingredient = mongoose.model("Ingredient", ingredientSchema);
export default Ingredient;