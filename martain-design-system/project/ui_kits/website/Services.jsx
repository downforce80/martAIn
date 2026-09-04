function Services() {
  const items = [
    {
      icon: 'workflow', grad: 'var(--grad-mark)', title: 'Slimme automatisering',
      desc: 'Terugkerend werk dat nu handmatig gaat, laat ik automatisch lopen. Bijvoorbeeld:',
      bullets: ['Offertes en facturen opstellen en versturen', 'Binnenkomende e-mail en klantvragen sorteren en beantwoorden', 'Planning en administratie bijhouden', 'Rapportages die zichzelf bijwerken'],
    },
    {
      icon: 'compass', grad: 'var(--grad-brand)', title: 'AI-advies',
      desc: 'Niet overal zomaar AI op plakken. Ik kijk eerst waar het écht tijd scheelt, en waar je het beter laat.',
      bullets: ['Overzicht van werk dat zich leent voor automatisering', 'Eerlijk advies over wat (nog) niet werkt', 'Stappenplan dat past bij je bedrijf en budget'],
    },
    {
      icon: 'graduation-cap', grad: 'linear-gradient(120deg,#7A2BD6,#3A1FB8)', title: 'Training',
      desc: 'Je team leert AI gebruiken voor hun eigen werk: de mails, offertes en vragen die ze elke dag al doen.',
      bullets: ['Oefenen met jullie eigen taken en voorbeelden', 'Duidelijke afspraken over wat wel en niet met AI', 'De volgende dag direct toepasbaar'],
    },
  ];
  return (
    <section id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Wat ik doe</span>
          <h2>Drie manieren om werk uit handen te geven</h2>
          <p>Van klussen automatiseren tot je team leren werken met AI. Altijd praktisch en op maat van je bedrijf.</p>
        </div>
        <div className="cards3">
          {items.map((it, i) => (
            <div className="scard reveal" key={i} style={{ transitionDelay: (i * 80) + 'ms' }}>
              <div className="ic" style={{ background: it.grad }}><Icon name={it.icon} /></div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
              <ul>
                {it.bullets.map((b, j) => (
                  <li key={j}><Icon name="check" /> {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
