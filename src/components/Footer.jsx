import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753738042356_0.png';

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Instagram />, href: '#' },
    { icon: <Facebook />, href: '#' },
    { icon: <Linkedin />, href: '#' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-secondary text-light"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logoUrl}
              alt="Curicau Logo"
              className="h-14 w-auto mb-4 bg-white p-2 rounded"
            />
            <p className="max-w-xs text-light/70">
              Construindo o futuro com qualidade, inovação e compromisso em cada
              projeto.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-light/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Siga-nos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-light/70 hover:text-primary hover:scale-110 transition-all"
                  aria-label={`Link para ${social.icon.type.displayName}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6 text-light/70">
              <p>+55 44 99104-0774</p>
              <p>ffbrunoff@yahoo.com.br</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-light/20 text-center text-sm text-light/50">
          <p>
            &copy; {new Date().getFullYear()} Curicau. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
