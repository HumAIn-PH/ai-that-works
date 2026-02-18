import { motion } from "framer-motion";
import { FileText, Rocket, Globe, MessageSquare, Cpu } from "lucide-react";

const benefits = [
  { icon: FileText, text: "Replace 10+ hours of manual work weekly" },
  { icon: Cpu, text: "Create AI Chatbots (Custom GPT's / Custom Gems)" },
  { icon: Globe, text: "Generate 30 Days of Social Media Content" },
  { icon: MessageSquare, text: "Build your own Departmental SOP's" },
  { icon: Rocket, text: "Design Custom AI Business Workflows" },
];

const BenefitsSection = () => {
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
            What You'll Be Able to <span className="text-gradient-gold">Do</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-gradient-card border border-border rounded-xl p-6 flex items-start gap-4 hover:glow-gold transition-shadow"
            >
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center shrink-0">
                <b.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className="text-foreground font-medium">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
