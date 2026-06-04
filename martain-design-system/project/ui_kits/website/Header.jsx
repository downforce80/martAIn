function Header({ onNav }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Wat ik doe', 'services'],
    ['Werkwijze', 'process'],
    ['Resultaat', 'proof'],
    ['Contact', 'contact'],
  ];

  const go = (id) => { setOpen(false); onNav(id); };

  return (
    <header className={'site' + (scrolled ? ' scrolled' : '')}>
      <div className="wrap nav">
        <div className="brand" onClick={() => go('top')}>
          <img src="../../assets/logo-mark.png" alt="MartAIn" />
          <span className="wm ds-grad-text">MartAIn</span>
        </div>
        <nav className="nav-links">
          {links.map(([label, id]) => (
            <a key={id} onClick={() => go(id)}>{label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="btn btn-primary" onClick={() => go('contact')}>
            Plan een kennismaking
          </button>
          <button className="menu-btn" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <Icon name={open ? 'x' : 'menu'} />
          </button>
        </div>
      </div>
      <div className={'mobile-menu' + (open ? ' open' : '')}>
        {links.map(([label, id]) => (
          <a key={id} onClick={() => go(id)}>{label}</a>
        ))}
      </div>
    </header>
  );
}
window.Header = Header;
