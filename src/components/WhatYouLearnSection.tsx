import { motion } from "framer-motion";
import { Megaphone, Mail, Bot, BarChart3, Sparkles } from "lucide-react";

const modules = [
  {
    icon: BarChart3,
    title: "Manual Work Efficiency",
    detail: "Replace 10+ hours of manual work weekly",
  },
  {
    icon: Bot,
    title: "AI Chatbot Creation",
    detail: "Create AI Chatbots (Custom GPTs / Custom Gems)",
  },
  {
    icon: Megaphone,
    title: "Social Media Strategy",
    detail: "Generate 30 days of social media content",
  },
  {
    icon: Mail,
    title: "Departmental SOPs",
    detail: "Build your own departmental standard operating procedures",
  },
  {
    icon: Sparkles,
    title: "Custom AI Workflows",
    detail: "Design custom AI business workflows",
  },
];

const WhatYouLearnSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Walk Out With <span className="text-gradient-gold">Working AI Systems</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            This isn't theory. By 5:00 PM, you'll have real tools running for your business.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-gradient-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <mod.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{mod.title}</h3>
                <p className="text-muted-foreground text-sm">{mod.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
