import React from 'react';
import { motion } from 'framer-motion';
import { Building, HardHat, Paintbrush, Wrench } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: 'Construção Residencial',
      description:
        'Projetamos e construímos residências personalizadas que combinam conforto, estilo e funcionalidade para você e sua família.',
    },
    {
      icon: <HardHat className="h-10 w-10 text-primary" />,
      title: 'Construção Comercial',
      description:
        'Soluções completas para edifícios comerciais, lojas e escritórios, focadas em otimizar espaços e impulsionar seu negócio.',
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: 'Reformas e Renovações',
      description:
        'Modernizamos e revitalizamos ambientes, realizando desde pequenas reformas até grandes renovações com o mínimo de transtorno.',
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-primary" />,
      title: 'Planejamento e Gestão',
      description:
        'Gerenciamos todas as etapas do seu projeto, do planejamento inicial à entrega final, garantindo prazos, custos e qualidade.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-light">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
            Nossas Soluções em Construção
          </h2>
          <p className="mt-4 text-lg text-dark/70 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços para atender a todas as
            suas necessidades de construção, sempre com o selo de qualidade
            Curicau.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-center items-center"
              variants={cardVariants}
            >
              <div className="bg-primary/10 p-5 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-dark/70 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
