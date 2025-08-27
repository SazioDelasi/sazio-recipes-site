import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipes from '../data/recipes';
import Breadcrumbs from '../components/Breadcrumbs';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [servings, setServings] = useState(4);
  const [savedRecipe, setSavedRecipe] = useState(false);

  useEffect(() => {
    const foundRecipe = recipes.find(r => r.id === parseInt(id));
    if (foundRecipe) {
      setRecipe(foundRecipe);
      setServings(foundRecipe.servings);
    }
  }, [id]);

  if (!recipe) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">🍽️</div>
        <p>Loading delicious recipe...</p>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Recipes', path: '/recipes' },
    { label: recipe.title, path: `/recipes/${recipe.id}` }
  ];

  const adjustIngredients = (amount, originalServings, newServings) => {
    if (amount === 'to taste' || amount.includes('whole') || amount.includes('as needed')) {
      return amount;
    }
    const ratio = newServings / originalServings;
    const numericPart = amount.match(/[\d.]+/);
    if (numericPart) {
      const adjustedAmount = (parseFloat(numericPart[0]) * ratio).toFixed(1);
      return amount.replace(numericPart[0], adjustedAmount);
    }
    return amount;
  };

  const handleSaveRecipe = () => {
    setSavedRecipe(!savedRecipe);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="recipe-detail-page">
      <div className="main-content">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Recipe Header */}
        <div className="recipe-header">
          <div className="recipe-hero">
            <div className="recipe-image-container">
              <img 
                src={recipe.img} 
                alt={recipe.title}
                className="recipe-hero-image"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600";
                }}
              />
              <div className="recipe-image-overlay">
                <div className="recipe-badges">
                  <span className="difficulty-badge">{recipe.difficulty}</span>
                  {recipe.category && <span className="category-badge">{recipe.category}</span>}
                </div>
              </div>
            </div>
            
            <div className="recipe-hero-content">
              <h1 className="recipe-title traditional-heading">{recipe.title}</h1>
              <p className="recipe-description">{recipe.desc}</p>
              
              <div className="recipe-meta-info">
                <div className="meta-item">
                  <span className="meta-icon">⏱️</span>
                  <div>
                    <span className="meta-label">Total Time</span>
                    <span className="meta-value">{recipe.totalTime}</span>
                  </div>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">👥</span>
                  <div>
                    <span className="meta-label">Serves</span>
                    <span className="meta-value">{recipe.servings}</span>
                  </div>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">⭐</span>
                  <div>
                    <span className="meta-label">Rating</span>
                    <span className="meta-value">{recipe.rating}/5</span>
                  </div>
                </div>
                {recipe.region && (
                  <div className="meta-item">
                    <span className="meta-icon">📍</span>
                    <div>
                      <span className="meta-label">Region</span>
                      <span className="meta-value">{recipe.region}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="recipe-actions">
                <button 
                  className={`action-btn save-btn ${savedRecipe ? 'saved' : ''}`}
                  onClick={handleSaveRecipe}
                >
                  {savedRecipe ? '❤️ Saved' : '🤍 Save Recipe'}
                </button>
                <button className="action-btn print-btn" onClick={handlePrint}>
                  🖨️ Print Recipe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Tabs */}
        <div className="recipe-tabs">
          <div className="tab-navigation">
            <button 
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-button ${activeTab === 'ingredients' ? 'active' : ''}`}
              onClick={() => setActiveTab('ingredients')}
            >
              Ingredients
            </button>
            <button 
              className={`tab-button ${activeTab === 'instructions' ? 'active' : ''}`}
              onClick={() => setActiveTab('instructions')}
            >
              Instructions
            </button>
            {recipe.culturalNotes && (
              <button 
                className={`tab-button ${activeTab === 'culture' ? 'active' : ''}`}
                onClick={() => setActiveTab('culture')}
              >
                Cultural Notes
              </button>
            )}
            {recipe.nutrition && (
              <button 
                className={`tab-button ${activeTab === 'nutrition' ? 'active' : ''}`}
                onClick={() => setActiveTab('nutrition')}
              >
                Nutrition
              </button>
            )}
          </div>

          <div className="tab-content">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="tab-panel overview-panel">
                <div className="overview-grid">
                  <div className="overview-section">
                    <h3>Quick Info</h3>
                    <div className="quick-info-grid">
                      <div className="info-card">
                        <span className="info-icon">⏰</span>
                        <div>
                          <h4>Prep Time</h4>
                          <p>{recipe.prepTime || '15 mins'}</p>
                        </div>
                      </div>
                      <div className="info-card">
                        <span className="info-icon">🔥</span>
                        <div>
                          <h4>Cook Time</h4>
                          <p>{recipe.cookTime || '30 mins'}</p>
                        </div>
                      </div>
                      <div className="info-card">
                        <span className="info-icon">📊</span>
                        <div>
                          <h4>Difficulty</h4>
                          <p>{recipe.difficulty}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="overview-section">
                    <h3>About This Dish</h3>
                    <p className="dish-description">
                      {recipe.longDesc || recipe.desc}
                    </p>
                    {recipe.tags && (
                      <div className="recipe-tags">
                        <h4>Tags:</h4>
                        <div className="tags-list">
                          {recipe.tags.map((tag, index) => (
                            <span key={index} className="recipe-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Ingredients Tab */}
            {activeTab === 'ingredients' && (
              <div className="tab-panel ingredients-panel">
                <div className="servings-adjuster">
                  <h3>Ingredients</h3>
                  <div className="serving-controls">
                    <label htmlFor="servings">Servings:</label>
                    <div className="serving-input-group">
                      <button 
                        className="serving-btn decrease"
                        onClick={() => setServings(Math.max(1, servings - 1))}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        id="servings"
                        value={servings}
                        onChange={(e) => setServings(Math.max(1, parseInt(e.target.value) || 1))}
                        min="1"
                        max="20"
                      />
                      <button 
                        className="serving-btn increase"
                        onClick={() => setServings(servings + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="ingredients-list">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="ingredient-item">
                      <div className="ingredient-checkbox">
                        <input type="checkbox" id={`ingredient-${index}`} />
                        <label htmlFor={`ingredient-${index}`} className="checkbox-custom"></label>
                      </div>
                      <span className="ingredient-text">
                        {adjustIngredients(ingredient, recipe.servings, servings)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Instructions Tab */}
            {activeTab === 'instructions' && (
              <div className="tab-panel instructions-panel">
                <h3>Cooking Instructions</h3>
                <div className="instructions-list">
                  {recipe.instructions.map((instruction, index) => (
                    <div key={index} className="instruction-item">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">
                        <p>{instruction}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cultural Notes Tab */}
            {activeTab === 'culture' && recipe.culturalNotes && (
              <div className="tab-panel culture-panel">
                <h3>Cultural Heritage</h3>
                <div className="cultural-content">
                  <div className="culture-section">
                    <h4>Traditional Significance</h4>
                    <p>{recipe.culturalNotes}</p>
                  </div>
                  
                  {recipe.region && (
                    <div className="culture-section">
                      <h4>Regional Origin</h4>
                      <p>This dish originates from the <strong>{recipe.region}</strong> region of Ghana, where it holds special cultural significance in local celebrations and daily life.</p>
                    </div>
                  )}

                  <div className="culture-section">
                    <h4>Cooking Tips from Tradition</h4>
                    <ul className="tradition-tips">
                      <li>🔥 Traditional cooking methods often use clay pots for enhanced flavor</li>
                      <li>🌿 Fresh ingredients from local markets are preferred</li>
                      <li>👨‍👩‍👧‍👦 This dish is often prepared communally during family gatherings</li>
                      <li>🎉 Commonly served during celebrations and special occasions</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Nutrition Tab */}
            {activeTab === 'nutrition' && recipe.nutrition && (
              <div className="tab-panel nutrition-panel">
                <h3>Nutritional Information</h3>
                <div className="nutrition-grid">
                  <div className="nutrition-card">
                    <h4>Calories</h4>
                    <span className="nutrition-value">{recipe.nutrition.calories}</span>
                    <span className="nutrition-unit">per serving</span>
                  </div>
                  <div className="nutrition-card">
                    <h4>Protein</h4>
                    <span className="nutrition-value">{recipe.nutrition.protein}</span>
                    <span className="nutrition-unit">grams</span>
                  </div>
                  <div className="nutrition-card">
                    <h4>Carbohydrates</h4>
                    <span className="nutrition-value">{recipe.nutrition.carbs}</span>
                    <span className="nutrition-unit">grams</span>
                  </div>
                  <div className="nutrition-card">
                    <h4>Fat</h4>
                    <span className="nutrition-value">{recipe.nutrition.fat}</span>
                    <span className="nutrition-unit">grams</span>
                  </div>
                </div>
                
                <div className="nutrition-notes">
                  <p><em>Nutritional values are approximate and may vary based on specific ingredients and preparation methods.</em></p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Recipes */}
        <div className="related-recipes-section">
          <h3>More Great Recipes</h3>
          <div className="related-recipes-grid">
            {(() => {
              // First try to get recipes from the same category
              let relatedRecipes = recipes.filter(r => r.id !== recipe.id && r.category === recipe.category);
              
              // If we don't have enough from the same category, add more from other categories
              if (relatedRecipes.length < 3) {
                const additionalRecipes = recipes
                  .filter(r => r.id !== recipe.id && r.category !== recipe.category)
                  .slice(0, 3 - relatedRecipes.length);
                relatedRecipes = [...relatedRecipes, ...additionalRecipes];
              }
              
              // Limit to 3 recipes total
              return relatedRecipes.slice(0, 3).map(relatedRecipe => (
                <Link 
                  key={relatedRecipe.id}
                  to={`/recipes/${relatedRecipe.id}`}
                  className="related-recipe-card"
                >
                  <img 
                    src={relatedRecipe.img} 
                    alt={relatedRecipe.title}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300";
                    }}
                  />
                  <div className="related-recipe-info">
                    <h4>{relatedRecipe.title}</h4>
                    <p>{relatedRecipe.cookTime || '30 mins'} • {relatedRecipe.difficulty || 'Medium'}</p>
                    {relatedRecipe.rating && (
                      <div className="related-recipe-rating">
                        <span className="rating-stars">⭐</span>
                        <span className="rating-value">{relatedRecipe.rating}</span>
                      </div>
                    )}
                  </div>
                </Link>
              ));
            })()
            }
          </div>
          {recipes.filter(r => r.id !== recipe.id).length === 0 && (
            <div className="no-related-recipes">
              <p>🍽️ More delicious recipes coming soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}