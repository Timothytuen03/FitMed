import mongoose from "mongoose";
import Ingredient from "./IngredientModel";

const recipeSchema = new mongoose.Schema ({
    name: {
        type: String,
        required
    },
    ingredients: {
        type: Array,
        required
    },
    numUsed: {
        type: Number,
        required
    },
    macros: {
        type: [Ingredient],
        required
    }
})

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;