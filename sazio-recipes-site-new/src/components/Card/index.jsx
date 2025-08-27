import { Link } from "react-router-dom";

export default function Card({ recipe }) {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img 
          src={recipe.img} 
          alt={recipe.title}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="image-fallback" style={{ display: 'none' }}>
          🍽️
        </div>
        <div className="recipe-overlay">
          <div className="recipe-meta">
            <span className="recipe-time">{recipe.cookTime || '30 mins'}</span>
            <span className="recipe-difficulty">{recipe.difficulty || 'Medium'}</span>
            {recipe.rating && <span className="recipe-rating">⭐ {recipe.rating}</span>}
          </div>
        </div>
      </div>
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        <p className="recipe-desc">{recipe.desc}</p>
        <div className="recipe-actions">
          <Link 
            to={`/recipes/${recipe.id}`} 
            className="recipe-btn primary"
          >
            View Recipe
          </Link>
          <button className="recipe-btn secondary">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
