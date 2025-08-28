import express from "express";
import { getAllRecipes, getRecipeById } from "../controllers/recipesController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, banner, description, view_count, search_count FROM recipes ORDER BY id ASC"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Recipe info
    const recipeRes = await pool.query("SELECT * FROM recipes WHERE id=$1", [id]);
    if (recipeRes.rows.length === 0) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    const recipe = recipeRes.rows[0];

    // Ingredients
    const ingredientsRes = await pool.query(
      "SELECT ingredient FROM ingredients WHERE recipe_id=$1 ORDER BY id ASC",
      [id]
    );

    // Steps
    const stepsRes = await pool.query(
      "SELECT step_number, instruction FROM steps WHERE recipe_id=$1 ORDER BY step_number ASC",
      [id]
    );

    recipe.ingredients = ingredientsRes.rows.map(r => r.ingredient);
    recipe.steps = stepsRes.rows.map(r => r.instruction);

    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
