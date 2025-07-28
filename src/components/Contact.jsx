import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar a mensagem. Tente novamente.');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erro no envio do formulário:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      text: '+55 44 99104-0774',
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      text: 'ffbrunoff@yahoo.com.br',
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      text: 'Padre Lebret 801, G05 Bloco 03',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
            Vamos Construir Algo Incrível Juntos
          </h2>
          <p className="mt-4 text-lg text-dark/70 max-w-3xl mx-auto">
            Tem uma ideia ou projeto em mente? Entre em contato conosco. Nossa
            equipe está pronta para ajudar a transformar sua visão em realidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-lg shadow-xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Informações de Contato
            </h3>
            <p className="text-dark/80 mb-8">
              Estamos disponíveis para atendê-lo. Escolha a melhor forma de nos
              contatar.
            </p>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <span className="text-dark/90 text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark/80 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-md border-transparent focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark/80 mb-1"
                >
                  Seu E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-md border-transparent focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark/80 mb-1"
                >
                  Sua Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-md border-transparent focus:ring-2 focus:ring-primary focus:border-transparent transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-primary text-light px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary hover:shadow-glow transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin h-6 w-6" />
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" /> Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
              {submitStatus === 'success' && (
                <div className="flex items-center text-green-600 bg-green-100 p-3 rounded-md">
                  <CheckCircle className="mr-2 h-5 w-5" /> Mensagem enviada com
                  sucesso!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center text-red-600 bg-red-100 p-3 rounded-md">
                  <AlertTriangle className="mr-2 h-5 w-5" /> Erro ao enviar.
                  Tente novamente.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
