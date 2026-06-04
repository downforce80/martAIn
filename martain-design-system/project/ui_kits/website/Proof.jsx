function Proof() {
  const stats = [
    ['8 uur', 'p/week terug bij het team', 'var(--brand-blue)'],
    ['3', 'workflows live in week 1', 'var(--brand-violet)'],
    ['100%', 'op maat van het mkb', 'var(--brand-sky)'],
  ];
  return (
    <section className="proof" id="proof">
      <div className="wrap">
        <p className="quote reveal">
          "Martijn maakte AI ineens <span className="hl">concreet</span>. Geen verhaal over de
          toekomst — gewoon iets dat vandaag al werk uit handen neemt."
        </p>
        <p className="by reveal">— Voorbeeldquote · mkb-ondernemer</p>
        <div className="stats">
          {stats.map(([n, l, c], i) => (
            <div className="stat reveal" key={i} style={{ transitionDelay: (i * 80) + 'ms' }}>
              <div className="n" style={{ color: c }}>{n}</div>
              <div className="l">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Proof = Proof;
