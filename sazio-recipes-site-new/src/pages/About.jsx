import { Link } from 'react-router-dom';

export default function About() {
  const teamMembers = [
    {
      name: 'Ama Osei',
      role: 'Head Chef & Founder',
      bio: 'With over 20 years of experience in traditional Ghanaian cuisine, Ama founded Sazio Recipes to preserve and share authentic Ghanaian recipes.',
      image: '👩‍🍳'
    },
    {
      name: 'Kwame Addo',
      role: 'Recipe Developer',
      bio: 'Kwame specializes in regional Ghanaian dishes and brings traditional cooking methods to modern kitchens.',
      image: '👨‍🍳'
    },
    {
      name: 'Efua Mensah',
      role: 'Cultural Heritage Specialist',
      bio: 'Efua ensures our recipes maintain their cultural authenticity and traditional significance.',
      image: '🥗'
    }
  ];

  const values = [
    {
      icon: '❤️',
      title: 'Cultural Preservation',
      description: 'We are passionate about preserving Ghanaian culinary heritage and sharing authentic recipes with the world.'
    },
    {
      icon: '🌍',
      title: 'Authenticity',
      description: 'We honor traditional Ghanaian recipes while maintaining their cultural significance and authentic flavors.'
    },
    {
      icon: '👥',
      title: 'Community',
      description: 'We believe food brings families together and strive to build a supportive Ghanaian cooking community.'
    },
    {
      icon: '🌱',
      title: 'Traditional Methods',
      description: 'We promote traditional cooking practices and encourage the use of authentic Ghanaian ingredients and techniques.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero & Mission Section */}
      <section className="about-hero-mission">
        <div className="main-content">
          <div className="hero-mission-content">
            <div className="hero-section">
              <h1 className="page-title">About Sazio Recipes</h1>
              <p className="page-subtitle">
                Where Ghanaian culinary heritage meets modern cooking. We're dedicated to preserving and sharing 
                authentic Ghanaian recipes, expertly crafted and beautifully presented.
              </p>
            </div>
            <div className="mission-section">
              <h2 className="section-title">Our Mission</h2>
              <div className="mission-content">
                <p className="mission-text">
                  At Sazio Recipes, our mission is to preserve and celebrate Ghanaian culinary heritage while 
                  inspiring people to cook traditional dishes at home with confidence. We believe that authentic 
                  Ghanaian food has the power to bring families together, create lasting memories, and nourish 
                  both body and soul.
                </p>
                <p className="mission-text">
                  We offer a carefully curated collection of traditional Ghanaian recipes, from coastal seafood 
                  dishes to northern specialties. Each recipe is carefully tested by Ghanaian families, beautifully 
                  photographed, and accompanied by step-by-step instructions that make traditional cooking accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="main-content">
          <h2 className="section-title centered">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="main-content">
          <h2 className="section-title centered">Meet Our Team</h2>
          <p className="section-subtitle">
            Our passionate team of Ghanaian culinary experts, recipe developers, and cultural heritage specialists work 
            tirelessly to bring you authentic Ghanaian cooking experiences.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">{member.image}</div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="main-content">
          <div className="vision-content">
            <h2 className="section-title">Our Vision</h2>
            <p className="vision-text">
              We envision a world where Ghanaian cuisine is celebrated globally, where traditional recipes are 
              preserved for future generations, and where families can connect through authentic Ghanaian cooking. 
              Our goal is to become the most trusted platform for Ghanaian recipes, fostering a community where 
              food lovers can discover, share, and celebrate the rich culinary heritage of Ghana.
            </p>
            <div className="vision-features">
              <div className="feature-item">
                <span className="feature-icon">✨</span>
                <span>Preserving Ghanaian culinary traditions</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌍</span>
                <span>Sharing Ghanaian culture through food</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📚</span>
                <span>Teaching traditional cooking techniques</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="main-content">
          <div className="cta-content">
            <h2 className="cta-title">Join Our Ghanaian Culinary Community</h2>
            <p className="cta-text">
              Ready to explore authentic Ghanaian cuisine? Discover our traditional recipe collection 
              and learn to cook like a Ghanaian grandmother.
            </p>
            <div className="cta-buttons">
              <Link to="/recipes" className="btn-primary">Explore Recipes</Link>
              <Link to="/login" className="btn-secondary">Join Us Today</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}