import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 md:py-40 px-6 bg-hero text-hero-foreground">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-hero-foreground/50 mb-6">
          Contact
        </p>
        <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-tight mb-16">
          Let's start a conversation.
        </h2>

        {submitted ? (
          <p className="text-hero-foreground/70 text-lg font-light">
            Thank you for reaching out. We'll be in touch shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Name"
                required
                className="bg-transparent border-b border-hero-foreground/20 pb-3 text-hero-foreground placeholder:text-hero-foreground/30 focus:outline-none focus:border-hero-foreground/60 transition-colors w-full"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="bg-transparent border-b border-hero-foreground/20 pb-3 text-hero-foreground placeholder:text-hero-foreground/30 focus:outline-none focus:border-hero-foreground/60 transition-colors w-full"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              required
              className="bg-transparent border-b border-hero-foreground/20 pb-3 text-hero-foreground placeholder:text-hero-foreground/30 focus:outline-none focus:border-hero-foreground/60 transition-colors w-full resize-none"
            />
            <button
              type="submit"
              className="text-sm tracking-widest uppercase bg-hero-foreground text-hero px-8 py-3 rounded-sm hover:opacity-90 transition-opacity duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
