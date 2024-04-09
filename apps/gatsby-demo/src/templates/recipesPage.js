import React from "react"

export default function RecipePage({pageContext}) {
  const recipe = pageContext.node;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", padding:"2em" }}>
      <h1>{recipe.recipe_name}</h1>
      <img src={recipe.img_src} alt={recipe.recipe_name} style={{ maxWidth: "100%" }} />
      <p><strong>Preparation Time:</strong> {recipe.prep_time}</p>
      <p><strong>Cook Time:</strong> {recipe.cook_time}</p>
      <p><strong>Total Time:</strong> {recipe.total_time}</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <h2>Ingredients</h2>
      <p>{recipe.ingredients}</p>
      <h2>Directions</h2>
      <p>{recipe.directions}</p>
      <p><strong>Rating:</strong> {recipe.rating} / 5</p>
      <p>For more details, visit the <a href={recipe.url}>original recipe</a>.</p>
      <p><strong>Nutrition Information:</strong> {recipe.nutrition}</p>
    </div>
  )
}
