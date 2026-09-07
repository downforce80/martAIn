function Footer({ onNav }) {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <img src="../../assets/logo-full-white.png" alt="MartAIn" />
            <p>Praktische AI voor ondernemers. Slimme automatisering, advies en training door Martijn.</p>
          </div>
          <div className="foot-col">
            <h5>Diensten</h5>
            <a onClick={() => onNav('services')}>Automatisering</a>
            <a onClick={() => onNav('services')}>AI-advies</a>
            <a onClick={() => onNav('services')}>Training</a>
          </div>
          <div className="foot-col">
            <h5>Bedrijf</h5>
            <a onClick={() => onNav('process')}>Werkwijze</a>
            <a onClick={() => onNav('proof')}>Resultaat</a>
            <a onClick={() => onNav('contact')}>Contact</a>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <a onClick={() => onNav('contact')}>Stuur een bericht</a>
            <a>Nederland</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} MartAIn. Alle rechten voorbehouden.</span>
          <span>Praktisch en verantwoord: jij houdt inzicht en controle.</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
