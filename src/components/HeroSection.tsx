import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-5 py-2 mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">4-Hour Hands-On AI Workshop</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            The AI{" "}
            <span className="text-gradient-gold">Business Accelerator</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Stop watching AI tutorials. Start building AI systems that actually run your business — 
            in just <span className="text-foreground font-semibold">4 hours</span>.
          </p>

          {/* Key benefits quick list */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Save 10+ Hrs/Week",
              "30 Days of Content in 1 Hour",
              "AI Chatbots + SOP's Built Live",
            ].map((item) => (
              <span
                key={item}
                className="bg-secondary/80 border border-border text-sm text-secondary-foreground px-4 py-2 rounded-full"
              >
                ✅ {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-gold text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg inline-flex items-center gap-2 glow-gold animate-pulse-gold"
            >
              Reserve Your Seat <ArrowRight className="w-5 h-5" />
            </motion.a>
            <p className="text-muted-foreground text-sm">
              Only <span className="text-primary font-bold">20 seats</span> available · Feb 28, 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
