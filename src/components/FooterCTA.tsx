import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FooterCTA = () => {
  return (
    <section id="register" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient-gold">10x Your Productivity</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Only 20 seats. Once they're gone, they're gone. 
            Secure your spot for the most practical AI workshop in Metro Manila.
          </p>
          <motion.a
            href="https://forms.gle/EcEK3MBDShnfXejD6"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-bold text-lg px-10 py-4 rounded-lg glow-gold-lg animate-pulse-gold"
          >
            Register Now <ArrowRight className="w-5 h-5" />
          </motion.a>
          <p className="text-muted-foreground text-sm mt-6">
            Questions? Message us on <a href="https://www.facebook.com/HumAInPH" target="_blank" rel="noopener noreferrer" className="text-gradient-gold hover:underline">Facebook</a>.
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 AI That Works. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default FooterCTA;
