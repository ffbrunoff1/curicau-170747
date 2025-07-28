import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  const aboutImageUrl =
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop';

  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: 'Nossa Missão',
      description:
        'Entregar projetos de construção com a máxima qualidade, superando as expectativas dos clientes através da inovação e da excelência operacional.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: 'Nossa Visão',
      description:
        'Ser a empresa de construção mais confiável e respeitada da região, reconhecida pelo nosso compromisso com a segurança, sustentabilidade e integridade.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Nossos Valores',
      description:
        'Compromisso, transparência, trabalho em equipe e paixão por construir. Estes são os pilares que sustentam cada projeto que realizamos.',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
            Seu parceiro confiável para projetos de sucesso
          </h2>
          <p className="mt-4 text-lg text-dark/70 max-w-3xl mx-auto">
            Na Curicau, combinamos experiência, tecnologia e uma equipe dedicada
            para garantir que cada obra seja um marco de qualidade e
            durabilidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={aboutImageUrl}
              alt="Interior de uma construção moderna e iluminada"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                variants={sectionVariants}
              >
                <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-dark/80">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
