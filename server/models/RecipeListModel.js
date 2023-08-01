import mongoose from "mongoose";
import Recipe from "./RecipeModel";

const recipeListSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        required
    },
    recipes: [Recipe]
})

const RecipeList = mongoose.model("RecipeList", recipeListSchema);
export default RecipeList;