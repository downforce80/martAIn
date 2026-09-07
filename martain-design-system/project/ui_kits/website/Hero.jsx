function Hero({ onNav }) {
  return (
    <section className="hero" id="top" style={{ paddingTop: 78 }}>
      <div className="wrap hero-grid">
        <div className="reveal">
          <span className="eyebrow">Voor het mkb</span>
          <h1>Minder handwerk, <span className="ds-grad-text">meer gedaan krijgen.</span></h1>
          <p className="lead">
            Ik neem terugkerend werk uit handen: offertes, e-mail, administratie, klantvragen,
            planning en rapportages. Zodat jij en je team tijd overhouden voor klanten en het echte werk.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => onNav('contact')}>
              Plan een kennismaking <Icon name="arrow-right" />
            </button>
            <button className="btn btn-ghost" onClick={() => onNav('services')}>
              Bekijk welk werk slimmer kan
            </button>
          </div>
          <p className="hero-sign">"Geen ruis. Gewoon minder werk op je bord." <span className="hero-sign-by">Martijn</span></p>
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
            <div><div className="ft">Jij houdt controle</div><div className="fs">inzicht en een menselijke check</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
