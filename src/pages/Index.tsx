const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top bar */}
      <header className="flex justify-end px-6 md:px-12 py-6">
        <a
          href="mailto:contact@rockvntrs.com"
          className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          Contact Us
        </a>
      </header>

      {/* Centered logo */}
      <main className="flex-1 flex items-center justify-center px-6">
        <img
          src="/assets/rv-logo.png"
          alt="Rock Vntrs"
          className="w-64 md:w-80 lg:w-96"
        />
      </main>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="text-xs text-muted-foreground/50 tracking-wide">
          © 2026 Rock Vntrs GmbH
        </p>
      </footer>
    </div>
  );
};

export default Index;
