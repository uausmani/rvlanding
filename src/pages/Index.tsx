import { useState } from "react";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="flex justify-end px-6 md:px-12 py-6">
        <button
          onClick={() => setOpen(true)}
          className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          Contact Us
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center px-6">
        <img
          src="/assets/rv-logo.png"
          alt="Rock Vntrs"
          className="w-64 md:w-80 lg:w-96"
        />
      </main>

      <footer className="py-6 text-center">
        <p className="text-xs text-muted-foreground/50 tracking-wide">
          © 2026 Rock Vntrs GmbH
        </p>
      </footer>

      <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); else setOpen(true); }}>
        <DialogContent className="bg-background border-border max-w-md p-8 rounded-none sm:rounded-sm">
          <VisuallyHidden><DialogTitle>Contact Us</DialogTitle></VisuallyHidden>
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-foreground text-lg font-light mb-2">Thank you.</p>
              <p className="text-muted-foreground text-sm">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-lg tracking-widest uppercase text-foreground font-light">
                Get in Touch
              </h2>
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors text-sm"
              />
              <input
                type="email"
                placeholder="Work Email"
                required
                className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors text-sm"
              />
              <textarea
                placeholder="Message"
                rows={3}
                required
                className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors text-sm resize-none"
              />
              <button
                type="submit"
                className="text-xs tracking-widest uppercase bg-foreground text-background px-6 py-3 hover:opacity-90 transition-opacity duration-300"
              >
                Send
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
