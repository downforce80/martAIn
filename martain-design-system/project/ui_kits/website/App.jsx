function App() {
  const navTo = (id) => {
    if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  // Initial icon upgrade (each Icon also self-upgrades on mount).
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);

  return (
    <React.Fragment>
      <Header onNav={navTo} />
      <main>
        <Hero onNav={navTo} />
        <Services />
        <Process />
        <Proof />
        <Contact />
      </main>
      <Footer onNav={navTo} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
