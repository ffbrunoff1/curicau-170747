import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroImageUrl =
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-light pt-24 md:pt-0"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-secondary leading-tight mb-4"
              variants={itemVariants}
            >
              Construa o futuro com a{' '}
              <span className="text-primary">Curicau</span>!
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-dark/80 mb-8"
              variants={itemVariants}
            >
              Qualidade e inovação em cada projeto de construção. Transformamos
              suas ideias em realidade com excelência e compromisso.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-primary text-light px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                Entre em contato
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-lg blur-xl opacity-25"></div>
            <motion.img
              src={heroImageUrl}
              alt="Equipe de construção trabalhando em um projeto"
              className="relative w-full h-auto rounded-lg shadow-2xl object-cover max-h-[500px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
