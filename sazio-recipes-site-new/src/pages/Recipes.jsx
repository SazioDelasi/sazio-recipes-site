import { useState } from 'react';
import { Link } from 'react-router-dom';
import recipes from '../data/recipes';
import Breadcrumbs from '../components/Breadcrumbs';
import Card from '../components/Card';

export default function Recipes() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [searchTerm, setSearchTerm] = useState('');

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Recipes', path: '/recipes' }
  ];

  const categories = [
    { id: 'all', name: 'All Recipes', count: recipes.length },
    { id: 'main-dishes', name: 'Main Dishes', count: recipes.filter(recipe => recipe.category === 'main-dishes').length },
    { id: 'breakfast', name: 'Breakfast', count: recipes.filter(recipe => recipe.category === 'breakfast').length }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'time':
        return parseInt(a.cookTime) - parseInt(b.cookTime);
      case 'name':
        return a.title.localeCompare(b.title);
      case 'difficulty':
        const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      default:
        return 0;
    }
  });

  return (
    <div className="recipes-page">
      <div className="main-content">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Ghanaian Recipe Collection</h1>
          <p className="page-subtitle">
            Discover authentic Ghanaian recipes passed down through generations. From traditional staples to regional specialties.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="recipes-controls">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-controls">
            <div className="sort-control">
              <label htmlFor="sort">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="time">Quickest</option>
                <option value="name">Alphabetical</option>
                <option value="difficulty">Difficulty</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          <h3>Categories</h3>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
                <span className="category-count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="results-info">
          <h3>
            {filteredRecipes.length === 0 
              ? 'No recipes found' 
              : `${filteredRecipes.length} recipe${filteredRecipes.length !== 1 ? 's' : ''} found`
            }
          </h3>
          {searchTerm && (
            <p>Search results for: "<strong>{searchTerm}</strong>"</p>
          )}
        </div>

        {/* Recipe Grid */}
        <div className="recipes-grid">
          {sortedRecipes.length > 0 ? (
            sortedRecipes.map((recipe) => (
              <Card key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🍽️</div>
              <h3>No recipes found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
              <button 
                className="clear-filters-btn"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSortBy('popular');
                }}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Load More Section (if needed) */}
        {sortedRecipes.length > 12 && (
          <div className="load-more-section">
            <button className="load-more-btn">Load More Recipes</button>
          </div>
        )}
      </div>
    </div>
  );
}