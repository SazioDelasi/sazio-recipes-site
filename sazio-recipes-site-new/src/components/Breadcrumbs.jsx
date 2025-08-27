import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="breadcrumbs">
      {items.map((item, index) => (
        <div key={index} className="breadcrumb-item">
          {index < items.length - 1 ? (
            <>
              <Link to={item.path} className="breadcrumb-link">
                {item.label}
              </Link>
              <span className="breadcrumb-separator">/</span>
            </>
          ) : (
            <span className="breadcrumb-current">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}