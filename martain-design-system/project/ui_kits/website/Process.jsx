function Process() {
  const steps = [
    ['Kennismaken', 'We bespreken je bedrijf, je werk en waar de tijd weglekt. Vrijblijvend.'],
    ['Analyse', 'Ik breng in kaart welke standaardklussen zich lenen voor slimme automatisering.'],
    ['Bouwen', 'Samen zetten we de eerste werkende oplossing live — klein beginnen, snel resultaat.'],
    ['Begeleiden', 'Ik train je team en blijf bijsturen, zodat het beklijft en meegroeit.'],
  ];
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Werkwijze</span>
          <h2>Van kennismaking tot resultaat</h2>
          <p>Een rustige, stapsgewijze aanpak. Geen grote IT-trajecten — wel snel iets dat werkt.</p>
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
