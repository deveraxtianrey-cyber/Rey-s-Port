import { Rocket, Code, Info, Puzzle, List, Gauge, TrendingUp, ShieldCheck, Workflow, Cpu, Move, Layers, PenTool, Brain, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

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

export default function ProjectBionicArm() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full px-6 md:px-20 py-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="group relative aspect-[21/9] w-full overflow-hidden rounded-xl shadow-2xl border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
            <motion.img
              className="h-full w-full object-cover"
              src="/bionic-hero.png"
              alt="Bionic Robotic Arm Project"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider border border-primary/30">Robotics</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider border border-white/20">C++</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider border border-white/20">3D Printing</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">Bionic Robotic Arm</h1>
                  <p className="text-slate-300 max-w-2xl text-lg">Advanced robotic platform engineered to mimic human-like motion for high-precision tasks.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Content Grid */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-16">
            {/* About Section */}
            <motion.div
              className="space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3">
                <Info className="text-primary size-7" />
                <h2 className="text-3xl font-bold tracking-tight text-white">Project Overview</h2>
              </div>
              <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed text-lg">
                <p>
                  The Bionic Robotic Arm is an advanced robotic platform engineered to mimic human-like motion for high-precision tasks such as controlled drawing and complex mechanical manipulation. Developed as a versatile tool for both technical application and STEM education, the project integrates hardware engineering with software control to provide a hands-on experience in electronics, robotics, and programming.
                </p>
                <p className="mt-4">
                  By utilizing a 3D-printed lightweight frame and a multi-axis control system, this project serves as a practical exploration of physics principles like torque, force, and mechanical motion.
                </p>
              </div>
            </motion.div>

            {/* Key Features List */}
            <div className="space-y-8">
              <motion.h2
                className="text-2xl font-bold flex items-center gap-3 text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <List className="text-primary size-7" />
                Key Features
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  { icon: Move, title: 'Multi-Axis Precision', desc: 'Dual servo and stepper motors enable smooth, accurate drawing strokes with fine-tuned control.' },
                  { icon: Gauge, title: 'Real-Time Control', desc: 'Intuitive Joystick Shield allows users to direct the arm along X–Y–Z axes with immediate feedback.' },
                  { icon: Layers, title: 'Durable Design', desc: 'Lightweight 3D-printed mechanical frame with a vibration-resistant stable base.' },
                  { icon: Code, title: 'Programmable', desc: 'Supports custom Arduino sketches for automated routines and specific movements.' },
                  { icon: Brain, title: 'Human-Centric', desc: 'Engineered to replicate the natural movement of a human arm for fluid interactions.' },
                  { icon: PenTool, title: 'STEM Platform', desc: 'Bridges mathematics, science, and creative design for educational activities.' }
                ].map((feature) => (
                  <motion.div
                    key={feature.title}
                    className="flex gap-4 p-5 rounded-lg border border-white/5 bg-card-dark hover:border-primary/50 transition-colors"
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                  >
                    <feature.icon className="text-primary shrink-0 size-6" />
                    <div>
                      <h4 className="font-bold mb-1 text-white">{feature.title}</h4>
                      <p className="text-sm text-slate-400">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column: Metadata */}
          <div className="space-y-10">
            <motion.div
              className="p-8 rounded-xl bg-card-dark border border-white/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-6 border-b border-white/5 pb-4 uppercase tracking-widest text-primary">Technical Specifications</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">Microcontroller</span>
                  <span className="font-medium text-white">Arduino Uno</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">Actuators</span>
                  <span className="font-medium text-white">Dual Servo & Stepper</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">Control</span>
                  <span className="font-medium text-white">Joystick Shield</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">Language</span>
                  <span className="font-medium text-white">C++ (Arduino)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">Construction</span>
                  <span className="font-medium text-white">3D-Printed</span>
                </li>
              </ul>
            </motion.div>

            {/* Gallery Teaser */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-bold text-white">Project Snapshots</h3>
              <div className="grid grid-cols-2 gap-3">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg object-cover aspect-video border border-slate-800 cursor-pointer"
                  src="/bionic-snapshot-1.png"
                  alt="Robotic arm detail"
                  onClick={() => setSelectedImage('/bionic-snapshot-1.png')}
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg object-cover aspect-video border border-slate-800 cursor-pointer"
                  src="/bionic-snapshot-2.png"
                  alt="Robotic arm in action"
                  onClick={() => setSelectedImage('/bionic-snapshot-2.png')}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-[-50px] md:top-0 right-0 md:right-[-50px] text-white hover:text-primary transition-colors p-2 cursor-pointer"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged project snapshot"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
