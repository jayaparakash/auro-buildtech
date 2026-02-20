export default function ServicesSideMenu({ items }) {
    const scrollToSection = (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  
    return (
      <aside className="services-menu">
        {items.map((it) => (
          <button
            key={it.id}
            className="menu-item"
            onClick={() => scrollToSection(it.id)}
          >
            {it.menuTitle}
          </button>
        ))}
      </aside>
    );
  }