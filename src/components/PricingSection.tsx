import { motion } from "framer-motion";
import { ArrowRight, Check, MapPin, Calendar, Clock, Users } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Invest in <span className="text-gradient-gold">Your Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Less than the cost of one freelancer hour — but the ROI lasts forever.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Early Bird */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-card border-2 border-primary rounded-2xl p-8 glow-gold"
          >
            <div className="absolute -top-3 left-6 bg-gradient-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              BEST VALUE
            </div>
            <p className="text-muted-foreground font-medium mb-2">Early Bird</p>
            <p className="text-xs text-muted-foreground mb-4">On or before Feb 25, 2026</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-bold text-gradient-gold">₱2,500</span>
            </div>
            <ul className="space-y-3 mb-8">
              {["4-hour hands-on workshop", "Custom AI workflows", "Small group (20 max)", "Onsite premium experience", "Bring your laptop & build"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <motion.a
              href="https://forms.gle/EcEK3MBDShnfXejD6"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full bg-gradient-gold text-primary-foreground font-bold text-center py-3.5 rounded-lg"
            >
              Get Early Bird Price <ArrowRight className="w-4 h-4 inline ml-1" />
            </motion.a>
          </motion.div>

          {/* Regular */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-card border border-border rounded-2xl p-8"
          >
            <p className="text-muted-foreground font-medium mb-2">Regular</p>
            <p className="text-xs text-muted-foreground mb-4">After Feb 25, 2026</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-bold text-foreground">₱3,500</span>
            </div>
            <ul className="space-y-3 mb-8">
              {["4-hour hands-on workshop", "Custom AI workflows", "Small group (20 max)", "Onsite premium experience", "Bring your laptop & build"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <motion.a
              href="#register"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full bg-secondary text-secondary-foreground font-bold text-center py-3.5 rounded-lg border border-border hover:border-primary/40 transition-colors"
            >
              Reserve Your Seat <ArrowRight className="w-4 h-4 inline ml-1" />
            </motion.a>
          </motion.div>
        </div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto bg-gradient-card border border-border rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Workshop Details</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Calendar, label: "Date", value: "February 28, 2026" },
              { icon: Clock, label: "Time", value: "1:00 PM - 5:00 PM" },
              { icon: MapPin, label: "Venue", value: "KMC Solutions Training Room, 15th Floor SM North Tower" },
              { icon: Users, label: "Group Size", value: "20 participants max" },
            ].map((d) => (
              <div key={d.label} className="flex items-start gap-3">
                <d.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground">{d.label}</p>
                  <p className="text-sm text-foreground font-medium">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground text-center">
            📌 30% teaching + 70% hands-on building · Bring laptop + ChatGPT/Gemini account ready
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
