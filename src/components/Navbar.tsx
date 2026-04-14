import logo from "@/assets/rv-logo.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Strategy", href: "#strategy" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Rock Vntrs" className="h-8" />
        </a>
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm tracking-wide bg-primary text-primary-foreground px-5 py-2 rounded-sm hover:opacity-90 transition-opacity duration-300"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
