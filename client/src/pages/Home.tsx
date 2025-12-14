import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Bot, Brain, Shield, Zap, MessageSquare, Code, Database, Sparkles, Send, Cpu } from "lucide-react";
import heroImage from "@assets/generated_images/abstract_ai_data_network_visualization_in_deep_blue_and_black.png";
import creatorLogo from "@assets/creator_logo.png";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hello. I am WatsonX, an enterprise-grade AI assistant. How can I help you analyze your data today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: 'user', content: input }]);
    setInput("");

    // Simulate AI typing
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', content: "I've analyzed that request. Based on the current dataset, I can confirm that this implementation meets all enterprise security standards while delivering optimal performance." }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-wider uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                System Operational
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                Enterprise AI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent text-glow">
                  Reimagined
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Experience the power of IBM WatsonX in a custom conversational interface designed for the next generation of business intelligence.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:scale-105">
                  Start Conversation <MessageSquare className="ml-2 h-4 w-4" />
                </Button>
                <a href="#architecture">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/10 hover:bg-white/5 backdrop-blur-sm">
                    View Architecture <Code className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="text-sm text-muted-foreground font-mono mb-4">ENGINEERED BY</p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-bold">AK</div>
                  <div>
                    <p className="font-medium text-foreground">Ambuj Kumar Tripathi</p>
                    <p className="text-xs text-muted-foreground">Full Stack AI Developer</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl glass-card group">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 pointer-events-none" />
                <img
                  src={heroImage}
                  alt="AI Visualization"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />

                {/* Floating UI Elements */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex items-start gap-4 transform transition-all hover:-translate-y-1">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                      <Bot className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-primary font-mono mb-1">WATSONX.AI RESPONSE</p>
                      <p className="text-sm text-foreground/90 leading-relaxed">
                        Analyzing 4.2TB of enterprise data. Confidence score: 98.7%. Predictive model suggests a 15% efficiency increase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Logo Strip */}
      <div className="border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Abstract Logo Placeholders */}
            {["IBM Cloud", "WatsonX", "RedHat", "OpenShift"].map((brand) => (
              <div key={brand} className="flex items-center justify-center gap-2 text-xl font-bold font-mono">
                <div className="h-3 w-3 bg-current rounded-full" /> {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Next-Level Intelligence</h2>
            <p className="text-muted-foreground text-lg">
              Built on a foundation of trust, transparency, and advanced machine learning capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "Deep Learning",
                desc: "Utilizing advanced neural networks to understand complex queries and context."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Bank-grade encryption and data privacy protocols built into the core."
              },
              {
                icon: Zap,
                title: "Real-time Processing",
                desc: "Micro-second latency responses for high-frequency trading environments."
              },
              {
                icon: Database,
                title: "Data Integration",
                desc: "Seamlessly connects with DB2, PostgreSQL, and hybrid cloud storage."
              },
              {
                icon: Sparkles,
                title: "Generative AI",
                desc: "Content creation and code generation powered by granite models."
              },
              {
                icon: Cpu,
                title: "Scalable Architecture",
                desc: "Kubernetes-native design ready for massive horizontal scaling."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card/50 border-white/5 hover:border-primary/50 transition-all hover:bg-card/80 group h-full">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">System Architecture</h2>
            <p className="text-muted-foreground text-lg">
              A robust, enterprise-grade flow powered by IBM Cloud and WatsonX.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 hidden md:block" />

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1: User */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="h-20 w-20 rounded-2xl bg-card border border-white/10 flex items-center justify-center shadow-lg relative group hover:border-primary/50 transition-all">
                  <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">User Query</h3>
                  <p className="text-sm text-muted-foreground">Natural Language Input</p>
                </div>
              </motion.div>

              {/* Step 2: WatsonX */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="h-20 w-20 rounded-2xl bg-blue-950/50 border border-blue-500/30 flex items-center justify-center shadow-lg relative group hover:border-blue-500 transition-all">
                  <div className="absolute -inset-2 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Bot className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">WatsonX Assistant</h3>
                  <p className="text-sm text-muted-foreground">Intent Recognition</p>
                </div>
              </motion.div>

              {/* Step 3: Dialogflow / Logic */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="h-20 w-20 rounded-2xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center shadow-lg relative group hover:border-purple-500 transition-all">
                  <div className="absolute -inset-2 bg-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Brain className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Dialog Engine</h3>
                  <p className="text-sm text-muted-foreground">Context & Logic Processing</p>
                </div>
              </motion.div>

              {/* Step 4: Response */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="h-20 w-20 rounded-2xl bg-green-950/50 border border-green-500/30 flex items-center justify-center shadow-lg relative group hover:border-green-500 transition-all">
                  <div className="absolute -inset-2 bg-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Sparkles className="h-8 w-8 text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">AI Response</h3>
                  <p className="text-sm text-muted-foreground">Generative Output</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section id="about" className="py-24 container mx-auto px-6 border-t border-white/5">
        <div className="bg-gradient-to-br from-card to-background border border-white/5 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="text-3xl font-bold">Meet the Creator</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Ambuj Kumar Tripathi</span> is a visionary developer specializing in enterprise AI solutions.
                With a deep understanding of LLMs and cloud infrastructure, he bridges the gap between complex data science and intuitive user experience.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {["React", "Node.js", "Python", "TensorFlow", "IBM Cloud", "Docker"].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 relative">
              <div className="h-40 w-40 rounded-2xl border-2 border-primary p-2">
                <div className="h-full w-full rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                  <img src={creatorLogo} alt="Ambuj Kumar Tripathi" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground border-4 border-card">
                <Code className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 font-mono text-xl font-bold tracking-tighter text-primary mb-8">
            <Cpu className="h-6 w-6" />
            <span>WatsonX<span className="text-white">.AI</span></span>
          </div>
          <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
            A concept project showcasing the potential of enterprise AI interfaces.
            Designed for the future of work.
          </p>
          <div className="text-xs text-muted-foreground/50 font-mono">
            © 2024 Ambuj Kumar Tripathi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
