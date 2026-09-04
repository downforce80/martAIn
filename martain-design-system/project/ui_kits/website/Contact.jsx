function Contact() {
  // status: idle | sending | sent | error
  const [status, setStatus] = React.useState('idle');
  const [form, setForm] = React.useState({ naam: '', email: '', bericht: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Netlify Forms: POST de velden url-encoded naar de eigen pagina.
  // Het verborgen statische formulier in index.html zorgt dat Netlify het
  // formulier 'contact' bij deploy registreert. Lokaal (file:// of zonder
  // Netlify) mislukt het versturen en verschijnt de foutmelding.
  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.target);
    try {
      const res = await fetch(window.location.pathname, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      setStatus('sent');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="cta reveal">
          <div className="traces"></div>
          <div className="cta-l">
            <span className="eyebrow" style={{ color: 'var(--brand-sky)' }}>Contact</span>
            <h2 style={{ marginTop: 14 }}>Welk werk kan bij jou slimmer of automatisch?</h2>
            <p>Plan een vrijblijvende kennismaking. We lopen samen door wat jij en je team elke week doen en kiezen wat als eerste uit handen kan.</p>
          </div>

          {status === 'sent' ? (
            <div className="form-success">
              <div className="ok"><Icon name="check" /></div>
              <h3>Bedankt, {form.naam || 'tot snel'}!</h3>
              <p>Je bericht is verstuurd. Ik neem snel contact met je op om kennis te maken.</p>
            </div>
          ) : (
            <form
              className="form"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={submit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="bot-field" aria-hidden="true">
                <label>Niet invullen: <input name="bot-field" tabIndex="-1" autoComplete="off" /></label>
              </p>
              <div className="field">
                <label htmlFor="c-naam">Naam</label>
                <input id="c-naam" name="naam" value={form.naam} onChange={set('naam')} placeholder="Je naam" required />
              </div>
              <div className="field">
                <label htmlFor="c-email">E-mailadres</label>
                <input id="c-email" type="email" name="email" value={form.email} onChange={set('email')} placeholder="jij@bedrijf.nl" required />
              </div>
              <div className="field">
                <label htmlFor="c-bericht">Welk werk kost nu de meeste tijd?</label>
                <textarea id="c-bericht" name="bericht" value={form.bericht} onChange={set('bericht')} placeholder="Vertel kort welk werk nu veel tijd kost…"></textarea>
              </div>
              {status === 'error' && (
                <p className="form-error" role="alert">
                  Versturen is niet gelukt. Probeer het nog eens of stuur je bericht later opnieuw.
                </p>
              )}
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Versturen…' : 'Verstuur'} <Icon name="send" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
