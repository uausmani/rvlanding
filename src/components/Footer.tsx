const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs text-muted-foreground/50 tracking-wide">
          © {new Date().getFullYear()} Rock Vntrs GmbH
        </p>
      </div>
    </footer>
  );
};

export default Footer;
