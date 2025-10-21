import React, { useState } from 'react';
import { DESIGN } from '../config/constants';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      style={{
        backgroundColor: DESIGN.COLORS.CARD_BG,
        borderRadius: DESIGN.RADIUS,
        boxShadow: DESIGN.SHADOW_SOFT,
        overflow: 'hidden',
        marginBottom: '20px',
        transition: 'all 0.3s ease'
      }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
      >
        <h3 
          className="font-extralight text-lg tracking-wider uppercase pr-4"
          style={{ color: '#000000' }}
        >
          {question}
        </h3>
        <div
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-300"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      
      <div
        style={{
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0,
          transition: 'all 0.4s ease',
          overflow: 'hidden'
        }}
      >
        <div className="px-8 pb-6">
          <p
            className="font-light text-base leading-relaxed"
            style={{ color: '#333333' }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quels types de programmes proposez-vous ?",
      answer: "Nous proposons une gamme complète de programmes adaptés à tous les niveaux : musculation, cours collectifs (Body Pump, Body Combat, Zumba...), Pilates, Yoga, et Self-défense. Chaque programme est personnalisable selon vos besoins et objectifs."
    },
    {
      question: "Comment se déroule la mise en place d'un espace bien-être ?",
      answer: "Nous accompagnons votre entreprise de A à Z : audit de vos besoins, conception et aménagement de l'espace, installation du matériel, recrutement des coachs, et gestion opérationnelle. Notre équipe s'occupe de tout pour vous offrir une solution clé en main."
    },
    {
      question: "Vos coachs sont-ils certifiés ?",
      answer: "Absolument ! Tous nos coachs sont diplômés d'État et possèdent des certifications reconnues dans leurs domaines respectifs. Ils suivent également des formations continues pour vous garantir un accompagnement de qualité et à jour avec les dernières méthodes."
    },
    {
      question: "Proposez-vous des services à distance ?",
      answer: "Oui, nous proposons des programmes complets en distanciel : cours en visio, coaching personnalisé, plans d'entraînement sur-mesure, et suivi nutritionnel. Idéal pour les équipes en télétravail ou les entreprises multi-sites."
    },
    {
      question: "Quels sont les bénéfices pour mon entreprise ?",
      answer: "Les bénéfices sont multiples : amélioration de la santé et du bien-être des collaborateurs, réduction de l'absentéisme, renforcement de la cohésion d'équipe, augmentation de la productivité, et amélioration de votre marque employeur. Un investissement rentable sur le long terme."
    },
    {
      question: "Comment puis-je obtenir un devis personnalisé ?",
      answer: "Contactez-nous directement via notre formulaire ou par téléphone. Nous organiserons un rendez-vous pour comprendre vos besoins spécifiques et vous proposer une solution sur-mesure avec un devis détaillé."
    }
  ];

  return (
    <section
      style={{
        paddingTop: DESIGN.SECTION_SPACING,
        paddingBottom: DESIGN.SECTION_SPACING,
        position: 'relative'
      }}
      className="px-8 max-w-6xl mx-auto"
    >
      {/* Titre */}
      <div className="text-center mb-16">
        <h2
          className="font-extralight tracking-ultra-wide uppercase mb-6"
          style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: DESIGN.COLORS.PURE_BLACK
          }}
        >
          Questions Fréquentes
        </h2>
        
        {/* Ligne décorative */}
        <div
          className="mx-auto"
          style={{
            width: '80px',
            height: '1px',
            backgroundColor: '#D3D3D3'
          }}
        />
      </div>

      {/* Questions */}
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;

