function Contact() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ naam: '', email: '', bericht: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="cta reveal">
          <div className="traces"></div>
          <div className="cta-l">
            <span className="eyebrow" style={{ color: 'var(--brand-sky)' }}>Contact</span>
            <h2 style={{ marginTop: 14 }}>Klaar om tijd terug te winnen?</h2>
            <p>Plan een vrijblijvende kennismaking. We kijken samen waar AI jouw bedrijf vandaag al verder helpt — praktisch en verantwoord.</p>
          </div>

          {sent ? (
            <div className="form-success">
              <div className="ok"><Icon name="check" /></div>
              <h3>Bedankt, {form.naam || 'tot snel'}!</h3>
              <p>Je bericht is verstuurd. Ik neem snel contact met je op om kennis te maken.</p>
            </div>
          ) : (
            <form className="form" onSubmit={submit}>
              <div className="field">
                <label>Naam</label>
                <input value={form.naam} onChange={set('naam')} placeholder="Je naam" required />
              </div>
              <div className="field">
                <label>E-mailadres</label>
                <input type="email" value={form.email} onChange={set('email')} placeholder="jij@bedrijf.nl" required />
              </div>
              <div className="field">
                <label>Waar kan ik mee helpen?</label>
                <textarea value={form.bericht} onChange={set('bericht')} placeholder="Vertel kort over je bedrijf en waar de tijd weglekt…"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Verstuur <Icon name="send" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
