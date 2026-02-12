import { motion } from "framer-motion";
import { Clock, Users, DollarSign, Brain } from "lucide-react";

const pains = [
  {
    icon: Clock,
    title: "Wearing Too Many Hats",
    description: "You're the CEO, marketer, HR, and customer service — all at once.",
  },
  {
    icon: DollarSign,
    title: "Limited Hiring Budget",
    description: "You can't afford a full team, but you need one yesterday.",
  },
  {
    icon: Users,
    title: "No Tech Team",
    description: "AI sounds great, but you don't know where to start or who to ask.",
  },
  {
    icon: Brain,
    title: "Information Overload",
    description: "Endless tutorials, zero results. You need something that works NOW.",
  },
];

const PainSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Sound <span className="text-gradient-gold">Familiar</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            If you're a business owner doing ₱100K-₱5M in revenue, you're probably dealing with this every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-card border border-border rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <pain.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">{pain.title}</h3>
              <p className="text-muted-foreground text-sm">{pain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
