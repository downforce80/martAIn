function Process() {
  const steps = [
    ['Kennismaken', 'We bespreken je bedrijf en waar de tijd naartoe gaat. Vrijblijvend.'],
    ['Kansen bepalen', 'Samen kiezen we welk werk het meest oplevert om slimmer of automatisch te doen.'],
    ['Bouwen', 'Ik bouw de eerste oplossing en zet hem live. Jij ziet meteen wat het scheelt.'],
    ['Uitbreiden', 'Werkt het? Dan pakken we de volgende taak. Je team leert onderweg mee.'],
  ];
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Werkwijze</span>
          <h2>Zo werkt het</h2>
          <p>Vier stappen. Klein beginnen, snel resultaat, daarna uitbreiden.</p>
        </div>
        <div className="steps">
          {steps.map(([t, d], i) => (
            <div className="step reveal" key={i} style={{ transitionDelay: (i * 80) + 'ms' }}>
              <div className="num">{i + 1}</div>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Process = Process;
