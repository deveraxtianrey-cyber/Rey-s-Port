import { MapPin, Terminal, Code, Cpu, FileJson, Database, Flame, Rocket, ChevronRight, Mail, GitBranch, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import React, { useState, useRef } from 'react';
import { useMotionValue, useSpring, useTransform } from 'motion/react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion Values for Mouse Position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth Springs for Rotation
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Map mouse position to rotation values (-15 to 15 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await addDoc(collection(db, "messages"), {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        timestamp: serverTimestamp()
      });

      setIsSubmitted(true);
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col gap-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white"
            variants={fadeInUp}
          >
            Architecting <span className="text-primary">scalable systems</span> & pushing boundaries of performance.
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed"
            variants={fadeInUp}
          >
            Bridging the gap between complex infrastructure and seamless user experiences with technical precision.
          </motion.p>

        </motion.div>

        {/* Profile Card */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative perspective-1000 group cursor-default"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
          <div
            className="relative bg-card-dark border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center gap-6"
            style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="size-56 rounded-full border-4 border-primary/20 p-1 shadow-2xl"
              style={{ transform: "translateZ(30px)" }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="size-full rounded-full bg-cover bg-center"
                style={{ backgroundImage: "url('/profile.png')" }}
              />
            </motion.div>
            <div style={{ transform: "translateZ(20px)" }}>
              <h3 className="text-2xl font-bold text-white">Christian Rey M. De Vera</h3>
              <p className="text-primary font-medium mt-1">Full stack Developer & Freelance Engineer</p>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm" style={{ transform: "translateZ(10px)" }}>
              <MapPin className="size-4" />
              <span>San Carlos City, Pangasinan</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 max-w-7xl mx-auto px-6" id="skills">
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Terminal className="text-primary size-8" />
          <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            { name: 'Python', icon: Code },
            { name: 'C++', icon: Cpu },
            { name: 'React', icon: FileJson },
            { name: 'JavaScript', icon: Code },
            { name: 'Firebase', icon: Flame },
            { name: 'MySQL', icon: Database },
          ].map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              whileHover={{ y: -5, borderColor: 'rgba(0, 122, 255, 0.5)' }}
              className="bg-card-dark border border-white/5 p-6 rounded-xl transition-colors group cursor-default"
            >
              <skill.icon className="size-8 mb-4 text-slate-400 group-hover:text-primary transition-colors" />
              <h4 className="font-bold text-white">{skill.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 max-w-7xl mx-auto px-6" id="projects">
        <motion.div
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Rocket className="text-primary size-8" />
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <Link to="/projects" className="text-primary font-bold flex items-center gap-1 hover:underline">
            View All <ChevronRight className="size-5" />
          </Link>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <Link to="/project/food-pos-system">
            <motion.div
              className="group bg-card-dark border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all block h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="aspect-video bg-slate-900 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: "url('/pos-hero.png')" }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">Food Establishment POS</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Comprehensive Point of Sale application engineered to optimize operational efficiency for food service businesses.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded text-xs font-medium text-slate-300">Windows</span>
                  <span className="px-3 py-1 bg-white/5 rounded text-xs font-medium text-slate-300">Desktop App</span>
                  <span className="px-3 py-1 bg-white/5 rounded text-xs font-medium text-slate-300">Management</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Project 2 */}
          <Link to="/project/bionic-robotic-arm">
            <motion.div
              className="group bg-card-dark border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all cursor-pointer h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="aspect-video bg-slate-900 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: "url('/bionic-hero.png')" }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">Bionic Robotic Arm</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Advanced robotic platform engineered to mimic human-like motion for high-precision tasks such as controlled drawing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded text-xs font-medium text-slate-300">Arduino</span>
                  <span className="px-3 py-1 bg-white/5 rounded text-xs font-medium text-slate-300">C++</span>
                  <span className="px-3 py-1 bg-white/5 rounded text-xs font-medium text-slate-300">Robotics</span>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 mb-20 max-w-7xl mx-auto px-6" id="contact">
        <motion.div
          className="bg-card-dark border border-white/5 rounded-3xl p-8 lg:p-16 grid lg:grid-cols-2 gap-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Let's Connect</h2>
            <p className="text-slate-400 mb-10 text-lg">
              Have a project in mind or looking to hire a dedicated architect for your next big thing? Drop me a message.
            </p>
            <div className="flex flex-col gap-6">
              {[
                { icon: Mail, label: 'Email Address', value: 'deveraxtianrey@gmail.com' },
                { icon: GitBranch, label: 'GitHub', value: 'github.com/deveraxtianrey-cyber' },
                { icon: MapPin, label: 'Location', value: 'San Carlos City, Pangasinan' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="size-6" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">{item.label}</p>
                    <p className="font-bold text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-400">Full Name</label>
                <input name="name" className="bg-white/5 border border-white/10 rounded-lg p-4 focus:border-primary outline-none transition-colors text-white" placeholder="John Doe" type="text" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-400">Email Address</label>
                <input name="email" className="bg-white/5 border border-white/10 rounded-lg p-4 focus:border-primary outline-none transition-colors text-white" placeholder="john@company.com" type="email" required />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-400">Message</label>
              <textarea name="message" className="bg-white/5 border border-white/10 rounded-lg p-4 focus:border-primary outline-none transition-colors resize-none text-white" placeholder="Tell me about your project..." rows={5} required></textarea>
            </div>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-sm font-bold flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="size-5" />
                Message sent successfully!
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Send Message <ChevronRight className="size-5" />
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
