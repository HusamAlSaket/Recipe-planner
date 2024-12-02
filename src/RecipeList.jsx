import React from "react";

export default function RecipeList({ ingredients }) {
    return (
        <div className="recipe-list">
            <h3>Recipe Ingredients</h3>
            <ul>
                {ingredients.length > 0 ? (
                    ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient.name} - {ingredient.quantity} units - $
                            {ingredient.cost.toFixed(2)}
                        </li>
                    ))
                ) : (
                    <p>No ingredients added yet.</p>
                )}
            </ul>
        </div>
    );
}
