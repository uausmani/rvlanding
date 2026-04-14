const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero text-hero-foreground px-6">
      <div className="max-w-4xl text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-balance">
          Building the future,
          <br />
          <span className="font-medium">one venture at a time.</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-hero-foreground/60 max-w-2xl mx-auto font-light leading-relaxed">
          Rock Vntrs partners with exceptional founders to create enduring
          companies across technology and innovation.
        </p>
        <a
          href="#about"
          className="inline-block mt-12 text-sm tracking-widest uppercase text-hero-foreground/50 hover:text-hero-foreground transition-colors duration-300 border-b border-hero-foreground/20 pb-1"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
