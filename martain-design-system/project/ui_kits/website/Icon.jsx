// Lucide icon wrapper. Each icon upgrades its own <i data-lucide> to an <svg>
// on mount, so icons added by later state changes (not just the first render)
// are always converted.
function Icon({ name, size, style, className }) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [name]);
  return (
    <i
      data-lucide={name}
      className={className}
      style={{ display: 'inline-flex', width: size, height: size, ...style }}
    ></i>
  );
}
window.Icon = Icon;
