import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <span className="footer__logo">SZ Sazio Recipes</span>
          </div>
          <div className="footer__social">
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">📷</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">📺</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2024 Sazio Recipes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
