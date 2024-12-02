import React, { useState, useId, useCallback } from "react";

export default function IngredientForm({ onAddIngredient }) {
    const nameId = useId();
    const quantityId = useId();
    const costId = useId();

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [cost, setCost] = useState("");

    const handleAddIngredient = useCallback(() => {
        if (name && quantity && cost) {
            onAddIngredient({ name, quantity: Number(quantity), cost: Number(cost) });
            setName("");
            setQuantity("");
            setCost("");
        }
    }, [name, quantity, cost, onAddIngredient]);

    return (
        <div className="ingredient-form">
            <h2>Add Ingredient</h2>
            <div>
                <label htmlFor={nameId}>Name:</label>
                <input
                    type="text"
                    id={nameId}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor={quantityId}>Quantity:</label>
                <input
                    type="number"
                    id={quantityId}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor={costId}>Cost:</label>
                <input
                    type="number"
                    id={costId}
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
            </div>
            <button onClick={handleAddIngredient}>Add Ingredient</button>
        </div>
    );
}
