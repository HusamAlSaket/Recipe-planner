import React, { useState, createContext } from "react";
import IngredientForm from "./IngredientForm";
import RecipeList from "./RecipeList";
import StopWatch from "./StopWatch";

// Create ThemeContext
export const ThemeContext = createContext();

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [ingredients, setIngredients] = useState([]);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    const theme = {
        background: isDarkTheme ? "#333" : "#fff",
        color: isDarkTheme ? "#fff" : "#000",
    };

    const handleAddIngredient = (ingredient) => {
        setIngredients((i) => [...i, ingredient]);
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ ...theme, height: "100vh", padding: "20px" }}>
                <button
                    onClick={toggleTheme}
                    style={{
                        border: "none",
                        background: "transparent",
                        color: theme.color,
                        fontSize: "1rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <i
                        className={`bi ${isDarkTheme ? "bi-sun" : "bi-moon"}`}
                        style={{ fontSize: "1.5rem" }}
                    ></i>
                    Switch to {isDarkTheme ? "Light" : "Dark"} Theme
                </button>
                <StopWatch />
                <IngredientForm onAddIngredient={handleAddIngredient} />
                <RecipeList ingredients={ingredients} />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
