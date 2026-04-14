const pillars = [
  {
    title: "Technology",
    description:
      "Enterprise software, AI infrastructure, and platforms reshaping how businesses operate.",
  },
  {
    title: "Innovation",
    description:
      "Breakthrough solutions in health, sustainability, and frontier technologies.",
  },
  {
    title: "Growth",
    description:
      "Scaling proven models with operational rigor and strategic capital deployment.",
  },
];

const StrategySection = () => {
  return (
    <section id="strategy" className="py-32 md:py-40 px-6 bg-section-alt">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-6">
          Strategy
        </p>
        <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-tight max-w-3xl mb-20">
          Focused conviction across{" "}
          <span className="font-medium">three pillars.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {pillars.map((pillar, i) => (
            <div key={i} className="border-t border-foreground/10 pt-8">
              <h3 className="text-xl font-medium mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
