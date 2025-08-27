import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    name: 'John Smith',
    email: 'john.smith@example.com',
    joinDate: 'January 2024',
    bio: 'Passionate home cook and food enthusiast. Love sharing family recipes and discovering new flavors from around the world.',
    favoriteRecipes: 12,
    sharedRecipes: 8,
    followers: 156,
    following: 89,
    location: 'San Francisco, CA',
    website: 'www.johnscooking.com',
    profileImage: null
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user.name,
    bio: user.bio,
    location: user.location,
    website: user.website
  });

  const handleLogout = () => {
    // Clear any stored user data (localStorage, sessionStorage, etc.)
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    sessionStorage.clear();
    
    // Redirect to login page
    navigate('/login');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser(prev => ({ ...prev, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setUser(prev => ({ ...prev, ...editForm }));
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const recentRecipes = [
    { id: 1, title: 'Mediterranean Quinoa Bowl', image: '🥗', time: '2 days ago' },
    { id: 2, title: 'Chocolate Lava Cake', image: '🍰', time: '1 week ago' },
    { id: 3, title: 'Asian Fusion Stir-Fry', image: '🥘', time: '2 weeks ago' }
  ];

  const achievements = [
    { icon: '🏆', title: 'Recipe Master', description: 'Shared 5+ recipes' },
    { icon: '❤️', title: 'Community Favorite', description: '100+ recipe likes' },
    { icon: '👨‍🍳', title: 'Cooking Enthusiast', description: 'Active for 6+ months' },
    { icon: '⭐', title: 'Top Contributor', description: 'Featured recipe creator' }
  ];

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Breadcrumbs */}
        <nav className="breadcrumbs">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Profile</span>
        </nav>

        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-image-section">
            <div className="profile-image-wrapper">
              {user.profileImage ? (
                <img src={user.profileImage} alt={user.name} className="profile-image-large" />
              ) : (
                <div className="profile-image-placeholder">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
              <label className="image-upload-btn">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="image-upload-input"
                />
                📷
              </label>
            </div>
          </div>

          <div className="profile-info">
            {!isEditing ? (
              <>
                <h1 className="profile-name">{user.name}</h1>
                <p className="profile-email">{user.email}</p>
                <p className="profile-bio">{user.bio}</p>
                <div className="profile-details">
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span>{user.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">🌐</span>
                    <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="website-link">
                      {user.website}
                    </a>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📅</span>
                    <span>Joined {user.joinDate}</span>
                  </div>
                </div>
                <div className="profile-actions">
                  <button className="edit-profile-btn" onClick={() => setIsEditing(true)}>
                    ✏️ Edit Profile
                  </button>
                  <button className="logout-btn" onClick={handleLogout}>
                    🚪 Logout
                  </button>
                </div>
              </>
            ) : (
              <form className="edit-profile-form" onSubmit={handleEditSubmit}>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleInputChange}
                  className="edit-input"
                  placeholder="Your name"
                />
                <textarea
                  name="bio"
                  value={editForm.bio}
                  onChange={handleInputChange}
                  className="edit-textarea"
                  placeholder="Tell us about yourself"
                  rows="3"
                />
                <input
                  type="text"
                  name="location"
                  value={editForm.location}
                  onChange={handleInputChange}
                  className="edit-input"
                  placeholder="Your location"
                />
                <input
                  type="text"
                  name="website"
                  value={editForm.website}
                  onChange={handleInputChange}
                  className="edit-input"
                  placeholder="Your website"
                />
                <div className="edit-actions">
                  <button type="submit" className="save-btn">Save Changes</button>
                  <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="profile-stats">
          <div className="stat-card">
            <div className="stat-number">{user.favoriteRecipes}</div>
            <div className="stat-label">Favorite Recipes</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{user.sharedRecipes}</div>
            <div className="stat-label">Shared Recipes</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{user.followers}</div>
            <div className="stat-label">Followers</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{user.following}</div>
            <div className="stat-label">Following</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="profile-content">
          {/* Recent Recipes */}
          <div className="content-section">
            <div className="section-header">
              <h2 className="section-title">Recent Recipes</h2>
              <Link to="/recipes" className="view-all-link">View All</Link>
            </div>
            <div className="recipes-grid">
              {recentRecipes.map(recipe => (
                <div key={recipe.id} className="recipe-card-mini">
                  <div className="recipe-image-mini">{recipe.image}</div>
                  <div className="recipe-info-mini">
                    <h3 className="recipe-title-mini">{recipe.title}</h3>
                    <p className="recipe-time">{recipe.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="content-section">
            <div className="section-header">
              <h2 className="section-title">Achievements</h2>
            </div>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-info">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="content-section">
            <div className="section-header">
              <h2 className="section-title">Recent Activity</h2>
            </div>
            <div className="activity-feed">
              <div className="activity-item">
                <div className="activity-icon">❤️</div>
                <div className="activity-text">
                  <span className="activity-action">Liked</span>
                  <Link to="/recipes/1" className="activity-link">Mediterranean Quinoa Bowl</Link>
                  <span className="activity-time">2 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">💬</div>
                <div className="activity-text">
                  <span className="activity-action">Commented on</span>
                  <Link to="/recipes/2" className="activity-link">Chocolate Lava Cake</Link>
                  <span className="activity-time">1 day ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">📤</div>
                <div className="activity-text">
                  <span className="activity-action">Shared</span>
                  <Link to="/recipes/3" className="activity-link">Asian Fusion Stir-Fry</Link>
                  <span className="activity-time">3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}