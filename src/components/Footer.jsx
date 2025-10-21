import React from 'react';
import { DESIGN } from '../config/constants';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mx-8"
      style={{
        backgroundColor: DESIGN.COLORS.PURE_BLACK,
        color: '#FFFFFF',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTopLeftRadius: DESIGN.RADIUS,
        borderTopRightRadius: DESIGN.RADIUS,
        marginTop: DESIGN.SECTION_SPACING,
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Contenu principal du footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <Logo size="md" className="mb-6" />
            <p
              className="font-light text-sm leading-relaxed"
              style={{ color: DESIGN.COLORS.TEXT_GRAY_LIGHT }}
            >
              Créateur de bien-être depuis 2021. Des solutions sur-mesure pour votre entreprise.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-extralight text-base tracking-wider uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Création d\'espaces',
                'Gestion & exploitation',
                'Programmes Body & Mind',
                'Services à distance'
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-light text-sm transition-colors duration-300"
                    style={{ color: DESIGN.COLORS.TEXT_GRAY_LIGHT }}
                    onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                    onMouseLeave={(e) => e.target.style.color = DESIGN.COLORS.TEXT_GRAY_LIGHT}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cours */}
          <div>
            <h4 className="font-extralight text-base tracking-wider uppercase mb-6">
              Nos Cours
            </h4>
            <ul className="space-y-3">
              {[
                'Musculation',
                'Cours collectifs',
                'Pilates',
                'Yoga',
                'Self-défense'
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-light text-sm transition-colors duration-300"
                    style={{ color: DESIGN.COLORS.TEXT_GRAY_LIGHT }}
                    onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                    onMouseLeave={(e) => e.target.style.color = DESIGN.COLORS.TEXT_GRAY_LIGHT}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-extralight text-base tracking-wider uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@formebodyconcept.fr"
                  className="font-light text-sm transition-colors duration-300"
                  style={{ color: DESIGN.COLORS.TEXT_GRAY_LIGHT }}
                  onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.target.style.color = DESIGN.COLORS.TEXT_GRAY_LIGHT}
                >
                  contact@formebodyconcept.fr
                </a>
              </li>
              <li>
                <a
                  href="tel:+33777961244"
                  className="font-light text-sm transition-colors duration-300"
                  style={{ color: DESIGN.COLORS.TEXT_GRAY_LIGHT }}
                  onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.target.style.color = DESIGN.COLORS.TEXT_GRAY_LIGHT}
                >
                  07 77 96 12 44
                </a>
              </li>
              <li>
                <p
                  className="font-light text-sm"
                  style={{ color: DESIGN.COLORS.TEXT_GRAY_LIGHT }}
                >
                  29 Rue Louis Blériot<br />
                  Le Blanc-Mesnil 93150
                </p>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-6">
              {[
                {
                  name: 'Instagram',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="18" cy="6" r="1" fill="currentColor"/>
                    </svg>
                  )
                },
                {
                  name: 'Facebook',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  name: 'LinkedIn',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  )
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="transition-all duration-300"
                  style={{ color: DESIGN.COLORS.TEXT_GRAY_LIGHT }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = DESIGN.COLORS.TEXT_GRAY_LIGHT;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            marginTop: '40px',
            marginBottom: '30px'
          }}
        />

        {/* Copyright et liens légaux */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p
            className="font-light text-sm"
            style={{ color: DESIGN.COLORS.TEXT_GRAY_LIGHT }}
          >
            © {currentYear} Forme Body Concept. Tous droits réservés.
          </p>
          
          <div className="flex space-x-6">
            {['Mentions légales', 'Politique de confidentialité', 'CGV'].map((item, index) => (
              <a
                key={index}
                href="#"
                className="font-light text-sm transition-colors duration-300"
                style={{ color: DESIGN.COLORS.TEXT_GRAY_LIGHT }}
                onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.target.style.color = DESIGN.COLORS.TEXT_GRAY_LIGHT}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

