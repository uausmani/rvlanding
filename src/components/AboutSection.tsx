const AboutSection = () => {
  return (
    <section id="about" className="py-32 md:py-40 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-6">
          About
        </p>
        <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-tight max-w-3xl">
          We invest in visionary teams solving{" "}
          <span className="font-medium">meaningful problems.</span>
        </h2>
        <div className="mt-16 grid md:grid-cols-2 gap-16">
          <p className="text-muted-foreground leading-relaxed text-lg font-light">
            Rock Vntrs is a venture firm that provides capital, strategic
            guidance, and operational expertise to early and growth-stage
            companies. We focus on founders who demonstrate clarity of vision
            and relentless execution.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg font-light">
            Our approach is rooted in deep partnership. We work alongside
            management teams to build scalable, resilient businesses that
            deliver long-term value across cycles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
