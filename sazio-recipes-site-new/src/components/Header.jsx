import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({
    name: 'Kwame Addo',
    profileImage: null
  });

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const isLoginPage = location.pathname === '/login';
  const isProfilePage = location.pathname === '/profile';

  return (
    <header className="header">
      <div className="header__container">
        {/* Left Section - Logo */}
        <div className="header__left">
          <Logo />
        </div>

        {/* Center Section - Navigation */}
        <div className="header__center">
          {!isLoginPage && <Navbar />}
        </div>

        {/* Right Section - Search & Profile */}
        <div className="header__right">
          {/* Search Bar - hide on login and profile pages */}
          {!isLoginPage && !isProfilePage && (
            <div className="header__search">
              <SearchBar />
            </div>
          )}

          {/* Profile Section */}
          <div className="header__profile">
            {!isLoginPage ? (
              <>
                <div className="profile-info">
                  <span className="profile-greeting">Hello, {user.name.split(' ')[0]}!</span>
                </div>
                <div 
                  className="profile-avatar" 
                  onClick={handleProfileClick}
                  title="View Profile"
                >
                  {user.profileImage ? (
                    <img src={user.profileImage} alt={user.name} />
                  ) : (
                    <span className="profile-initials">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
              </>
            ) : (
              <Link to="/" className="back-home-link">
                <button className="btn-ghost">← Back to Home</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
