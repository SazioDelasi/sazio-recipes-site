import { Link } from 'react-router-dom';
import recipes from '../data/recipes';
import bannerImg from '../assets/images/banner.jpg';

export default function Home() {
  const featuredRecipes = recipes.slice(0, 3);

  const stats = [
    { number: '50+', label: 'Traditional Recipes' },
    { number: '10+', label: 'Ghanaian Regions' },
    { number: '4.8', label: 'Average Rating' },
    { number: '25K+', label: 'Happy Cooks' }
  ];

  const features = [
    {
      icon: '🍽️',
      title: 'Authentic Ghanaian Cuisine',
      description: 'Discover traditional recipes passed down through generations, from coastal seafood to northern specialties.'
    },
    {
      icon: '👨‍🍳',
      title: 'Family Tested',
      description: 'Every recipe is carefully tested by Ghanaian families to ensure authentic taste and perfect results every time.'
    },
    {
      icon: '📖',
      title: 'Step by Step',
      description: 'Detailed instructions with traditional cooking methods make Ghanaian cooking accessible for everyone.'
    },
    {
      icon: '⭐',
      title: 'Community Rated',
      description: 'Read reviews and ratings from our community of passionate Ghanaian home cooks.'
    }
  ];

  const categories = [
    {
      name: 'Main Dishes',
      icon: '🍽️',
      description: 'Traditional staples like Banku, Fufu, and Jollof Rice',
      count: 25
    },
    {
      name: 'Breakfast',
      icon: '🥗',
      description: 'Morning favorites including Koko and Koose',
      count: 15
    },
    {
      name: 'Soups & Stews',
      icon: '🍲',
      description: 'Rich and flavorful soups with palm oil and fresh ingredients',
      count: 20
    },
    {
      name: 'Street Food',
      icon: '🌽',
      description: 'Popular snacks and quick bites from Ghanaian markets',
      count: 18
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="main-content">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-icon">⭐</span>
                <span className="badge-text">Authentic Ghanaian Cuisine</span>
              </div>
              <h1 className="hero-title">
                Discover <span className="highlight">Traditional</span> Ghanaian Recipes from <span className="highlight">Every Region</span>
              </h1>
              <p className="hero-subtitle">
                Welcome to Sazio Recipes, your gateway to traditional Ghanaian cuisine! 
                Explore authentic recipes from the coast to the savanna, preserving the rich culinary heritage of Ghana.
              </p>
              <div className="hero-buttons">
                <Link to="/recipes" className="btn-primary">Explore All Recipes</Link>
                <Link to="/about" className="btn-secondary">Learn More</Link>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Traditional Recipes</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Ghanaian Regions</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4.8</span>
                  <span className="stat-label">Average Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="main-content">
          <div className="section-header">
            <h2 className="section-title">Why Choose Sazio Recipes</h2>
            <p className="section-subtitle">Discover what makes our Ghanaian recipe collection special</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="main-content">
          <div className="section-header">
            <h2 className="section-title">Explore Ghanaian Recipe Categories</h2>
            <p className="section-subtitle">Find the perfect traditional recipe for any occasion</p>
          </div>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to={`/recipes?category=${category.name.toLowerCase()}`} 
                className="category-card"
              >
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
                <div className="category-count">{category.count} recipes</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="featured-section">
        <div className="main-content">
          <div className="section-header">
            <h2 className="section-title">Featured Ghanaian Recipes</h2>
            <p className="section-subtitle">Try these popular traditional dishes loved by our community</p>
          </div>
          <div className="featured-grid">
            {featuredRecipes.map((recipe) => (
              <div key={recipe.id} className="featured-card">
                <div className="featured-image">
                  <img 
                    src={recipe.img} 
                    alt={recipe.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="image-fallback" style={{display: 'none'}}>
                    🍽️
                  </div>
                </div>
                <div className="featured-content">
                  <div className="featured-meta">
                    <span className="recipe-time">⏱️ {recipe.cookTime || '30 mins'}</span>
                    <span className="recipe-difficulty">📊 {recipe.difficulty || 'Medium'}</span>
                    <span className="recipe-rating">⭐ {recipe.rating || '4.8'}</span>
                  </div>
                  <h3 className="featured-title">{recipe.title}</h3>
                  <p className="featured-desc">{recipe.desc}</p>
                  <div className="featured-actions">
                    <Link to={`/recipes/${recipe.id}`} className="featured-btn primary">
                      View Recipe
                    </Link>
                    <button className="featured-btn secondary">
                      🤍 Save
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/recipes" className="view-all-btn">View All Recipes</Link>
          </div>
        </div>
      </section>
    </div>
  );
}