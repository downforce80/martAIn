function Services() {
  const items = [
    {
      icon: 'workflow', grad: 'var(--grad-mark)', title: 'Slimme automatisering',
      desc: 'Standaardwerk zoals offertes, facturen, e-mail en planning automatiseren — betrouwbaar en zonder gedoe.',
      bullets: ['Koppelingen met je eigen tools', 'Minder handwerk en fouten', 'Tijdwinst die je terugziet'],
    },
    {
      icon: 'compass', grad: 'var(--grad-brand)', title: 'AI-advies',
      desc: 'Praktisch advies over waar AI écht waarde toevoegt in jouw bedrijf — en waar (nog) niet.',
      bullets: ['Heldere kansenanalyse', 'Realistisch stappenplan', 'Verantwoord en veilig'],
    },
    {
      icon: 'graduation-cap', grad: 'linear-gradient(120deg,#7A2BD6,#3A1FB8)', title: 'Training',
      desc: 'Je team leren AI met vertrouwen te gebruiken in het dagelijkse werk, op jullie eigen niveau.',
      bullets: ['Hands-on workshops', 'Op maat voor je team', 'Direct toepasbaar'],
    },
  ];
  return (
    <section id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Wat ik doe</span>
          <h2>Drie manieren om slimmer te werken</h2>
          <p>Van het automatiseren van saaie klussen tot het opleiden van je team — altijd praktisch en op maat van het mkb.</p>
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
