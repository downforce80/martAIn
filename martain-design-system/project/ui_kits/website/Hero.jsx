function Hero({ onNav }) {
  return (
    <section className="hero" id="top" style={{ paddingTop: 78 }}>
      <div className="wrap hero-grid">
        <div className="reveal">
          <span className="eyebrow">Voor het mkb</span>
          <h1>AI die gewoon je werk <span className="ds-grad-text">uit handen neemt.</span></h1>
          <p className="lead">
            Ik help je de standaardklussen slim automatiseren — praktisch en verantwoord.
            Zodat jij en je team tijd overhouden voor klant, proces en product.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => onNav('contact')}>
              Plan een kennismaking <Icon name="arrow-right" />
            </button>
            <button className="btn btn-ghost" onClick={() => onNav('services')}>
              Bekijk wat ik doe
            </button>
          </div>
          <p className="hero-sign">"Geen ruis. Gewoon AI die je dag lichter maakt." — Martijn</p>
        </div>

        <div className="visual reveal">
          <div className="traces"></div>
          <div className="markwrap">
            <img src="../../assets/logo-mark-white.png" alt="MartAIn mark" />
          </div>
          <div className="float f1">
            <div className="fi" style={{ background: 'var(--grad-sky)' }}><Icon name="mail-check" /></div>
            <div><div className="ft">Offerte verstuurd</div><div className="fs">automatisch · 0 min werk</div></div>
          </div>
          <div className="float f2">
            <div className="fi" style={{ background: 'var(--grad-brand)' }}><Icon name="clock" /></div>
            <div><div className="ft">8 uur p/week</div><div className="fs">terug bij het team</div></div>
          </div>
          <div className="float f3">
            <div className="fi" style={{ background: 'var(--brand-violet)' }}><Icon name="shield-check" /></div>
            <div><div className="ft">Verantwoord</div><div className="fs">geen black box</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
