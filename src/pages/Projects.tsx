import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'food-pos-system',
    title: 'Food Establishment POS',
    description: 'Comprehensive Point of Sale application engineered to optimize operational efficiency for food service businesses.',
    tags: ['Windows', 'Desktop App', 'Management'],
    image: '/pos-hero.png'
  },
  {
    id: 'bionic-robotic-arm',
    title: 'Bionic Robotic Arm',
    description: 'Advanced robotic platform engineered to mimic human-like motion for high-precision tasks such as controlled drawing.',
    tags: ['Arduino', 'C++', 'Robotics', '3D Printing'],
    image: '/bionic-hero.png'
  }
];

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

export default function Projects() {
  return (
    <div className="w-full min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">All Projects</h1>
            <p className="text-slate-400 text-lg max-w-xl">
              A collection of technical experiments, production applications, and open source contributions.
            </p>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <Link
              to={
                project.id === 'bionic-robotic-arm' ? '/project/bionic-robotic-arm' :
                  project.id === 'food-pos-system' ? '/project/food-pos-system' :
                    '#'
              }
              key={project.id}
            >
              <motion.div
                className="group bg-card-dark border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all h-full flex flex-col"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="aspect-video bg-slate-900 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-white/5 rounded text-[10px] font-medium text-slate-300 uppercase tracking-wider border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
