import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguageStore } from "../store/languageStore";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  const { t } = useLanguageStore();
  const [activeTab, setActiveTab] = useState("story");

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Fondatrice & Directrice Créative",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face",
      bio: "Avec 15 ans d'expérience dans la mode, Sarah apporte un leadership visionnaire à L'Elegance Intemporelle. Diplômée de l'École de la Chambre Syndicale de la Couture Parisienne, elle a travaillé avec des maisons de couture prestigieuses avant de créer sa propre vision de la mode éthique et luxueuse.",
      expertise: ["Design Strategy", "Brand Vision", "Sustainable Fashion"],
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Marcus Chen",
      role: "Directeur du Design",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      bio: "Designer primé spécialisé dans la mode durable et innovante. Marcus a remporté le Prix International du Design Durable en 2023 et ses créations ont été présentées dans les plus grands défilés de mode européens.",
      expertise: ["Pattern Making", "Sustainable Materials", "Innovation"],
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Elena Rodriguez",
      role: "Responsable Qualité",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
      bio: "Elena s'assure que chaque pièce respecte nos standards exceptionnels d'artisanat. Avec une formation en ingénierie textile et 12 ans d'expérience dans le contrôle qualité, elle supervise tous les aspects de la production.",
      expertise: [
        "Quality Control",
        "Textile Engineering",
        "Production Management",
      ],
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Ahmed Benali",
      role: "Directeur de la Durabilité",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      bio: "Ahmed dirige nos initiatives environnementales et sociales. Expert en développement durable avec un doctorat en sciences environnementales, il garantit que nos pratiques respectent les plus hauts standards écologiques.",
      expertise: [
        "Environmental Impact",
        "Supply Chain Ethics",
        "Carbon Footprint",
      ],
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Léa Dubois",
      role: "Directrice Marketing",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
      bio: "Léa orchestre notre présence mondiale et nos campagnes créatives. Ancienne directrice marketing chez des marques de L'Elegance Intemporelle internationales, elle apporte une expertise unique en stratégie de marque et communication digitale.",
      expertise: ["Brand Strategy", "Digital Marketing", "Global Campaigns"],
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Thomas Müller",
      role: "Directeur Technique",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
      bio: "Thomas supervise notre infrastructure technologique et nos innovations digitales. Ingénieur logiciel passionné par l'intersection entre mode et technologie, il développe nos outils de personnalisation et notre plateforme e-commerce.",
      expertise: [
        "E-commerce Platform",
        "AI Integration",
        "Digital Innovation",
      ],
      linkedin: "#",
      instagram: "#",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Fondation de L'Elegance Intemporelle",
      description:
        "Sarah Johnson lance L'Elegance Intemporelle avec une vision claire : créer une mode luxueuse et responsable. Première collection de 50 pièces.",
      icon: "🚀",
    },
    {
      year: "2021",
      title: "Expansion Européenne",
      description:
        "Ouverture de notre atelier à Paris et lancement des livraisons dans toute l'Europe. Première collaboration avec des artisans locaux.",
      icon: "🌍",
    },
    {
      year: "2022",
      title: "Certification B-Corp",
      description:
        "L'Elegance Intemporelle obtient la certification B-Corporation, reconnaissant nos standards élevés en matière sociale et environnementale.",
      icon: "🏆",
    },
    {
      year: "2023",
      title: "Innovation Durable",
      description:
        "Lancement de notre ligne 'Eco-L'Elegance Intemporelle' utilisant 100% de matériaux recyclés et biologiques. Prix de l'Innovation Durable.",
      icon: "🌱",
    },
    {
      year: "2024",
      title: "Présence Mondiale",
      description:
        "Ouverture de boutiques à New York, Londres et Tokyo. Partenariat avec des ONG pour des projets sociaux.",
      icon: "🌟",
    },
    {
      year: "2025",
      title: "Avenir Digital",
      description:
        "Lancement de notre plateforme de personnalisation IA et de notre programme de circularité textile.",
      icon: "🔮",
    },
  ];

  const values = [
    {
      title: "Durabilité",
      description:
        "Nous nous engageons à minimiser notre impact environnemental à chaque étape de notre processus de production.",
      details: [
        "Matériaux 100% biologiques et recyclés",
        "Production locale pour réduire l'empreinte carbone",
        "Emballages biodégradables et réutilisables",
        "Programme de recyclage des vêtements usagés",
      ],
      icon: "🌿",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Qualité Exceptionnelle",
      description:
        "Chaque pièce est conçue pour durer, avec des matériaux premium et un savoir-faire artisanal incomparable.",
      details: [
        "Contrôle qualité à 15 points de vérification",
        "Collaboration avec des artisans experts",
        "Matériaux sourcés éthiquement",
        "Garantie à vie sur nos pièces signature",
      ],
      icon: "💎",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Innovation Continue",
      description:
        "Nous repoussons constamment les limites pour créer une mode qui anticipe les tendances futures.",
      details: [
        "Recherche et développement de nouveaux matériaux",
        "Techniques de production révolutionnaires",
        "Intégration de technologies smart textiles",
        "Collaboration avec des universités de mode",
      ],
      icon: "🚀",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Éthique Sociale",
      description:
        "Nous garantissons des conditions de travail équitables et soutenons les communautés locales.",
      details: [
        "Salaires équitables pour tous nos partenaires",
        "Programmes de formation et développement",
        "Soutien aux communautés d'artisans",
        "Transparence totale de notre chaîne d'approvisionnement",
      ],
      icon: "🤝",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const awards = [
    {
      year: "2025",
      title: "Prix de la Mode Durable",
      organization: "Fashion Revolution",
      description:
        "Reconnaissance pour notre leadership en matière de mode éthique et durable.",
    },
    {
      year: "2024",
      title: "Marque de l'Année",
      organization: "Luxury Fashion Awards",
      description:
        "Élue meilleure marque émergente de L'Elegance Intemporelle pour notre innovation et qualité.",
    },
    {
      year: "2023",
      title: "Certification B-Corp",
      organization: "B Lab",
      description:
        "Certification des plus hauts standards sociaux et environnementaux.",
    },
    {
      year: "2023",
      title: "Innovation Award",
      organization: "Sustainable Fashion Forum",
      description:
        "Prix pour notre approche révolutionnaire des matériaux recyclés.",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Clients Satisfaits", icon: "👥" },
    { number: "500+", label: "Pièces Uniques", icon: "👗" },
    { number: "25", label: "Pays Desservis", icon: "🌍" },
    { number: "95%", label: "Matériaux Durables", icon: "🌱" },
    { number: "100+", label: "Artisans Partenaires", icon: "🎨" },
    { number: "5", label: "Années d'Excellence", icon: "⭐" },
  ];

  const sustainability = [
    {
      title: "Matériaux Éco-Responsables",
      description:
        "95% de nos matériaux sont biologiques, recyclés ou upcyclés",
      impact:
        "Réduction de 70% de l'impact environnemental par rapport aux matériaux conventionnels",
      icon: "🌾",
    },
    {
      title: "Production Locale",
      description:
        "80% de notre production se fait dans un rayon de 500km de nos centres",
      impact: "Réduction de 60% des émissions de transport",
      icon: "🏭",
    },
    {
      title: "Emballage Zéro Déchet",
      description: "Emballages 100% biodégradables et réutilisables",
      impact: "Élimination complète des plastiques à usage unique",
      icon: "📦",
    },
    {
      title: "Programme de Circularité",
      description: "Reprise et recyclage de vos anciens vêtements L'Elegance Intemporelle",
      impact: "Détournement de plus de 5 tonnes de textiles des décharges",
      icon: "♻️",
    },
  ];

  return (
  <div className="!min-h-screen !bg-[var(--color-background)] !font-[var(--font-playfair)]">
    <Navbar />

    {/* Hero Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="!pt-20 !relative !bg-[var(--color-background)] !text-white !overflow-hidden"
    >
      <div className="!absolute !inset-0 !bg-[var(--color-background-secondary)] !opacity-20"></div>
      <div className="!relative !max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-24">
        <div className="!text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="!text-5xl md:!text-7xl !font-[var(--font-playfair)] !font-bold !mb-6 !text-[var(--color-text)]"
          >
           
            <span className="!text-accent">
              L'Elegance Intemporelle
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="!text-xl md:!text-2xl !text-[var(--color-secondary)] !max-w-4xl !mx-auto !leading-relaxed"
          >
            Depuis 2020, L'Elegance Intemporelle redéfinit l'élégance moderne en alliant L'Elegance Intemporelle
            intemporel, innovation durable et responsabilité sociale. Nous
            créons bien plus que des vêtements - nous façonnons l'avenir de la
            mode éthique.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="!mt-10 !flex !flex-wrap !justify-center !gap-6"
          >
            {stats.slice(0, 3).map((stat, index) => (
              <div key={index} className="!text-center">
                <div className="!text-4xl !mb-2">{stat.icon}</div>
                <div className="!text-3xl !font-bold !text-[var(--color-accent)]">
                  {stat.number}
                </div>
                <div className="!text-[var(--color-secondary)]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>

    {/* Navigation Tabs */}
    <div className="!bg-white !shadow-[var(--color-shadow)] !sticky !top-16 !z-40">
      <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8">
        <div className="!flex !flex-wrap !justify-center !space-x-8 !py-4">
          {[
            { key: "story", label: "Notre Histoire" },
            { key: "values", label: "Nos Valeurs" },
            { key: "team", label: "Notre Équipe" },
            { key: "sustainability", label: "Durabilité" },
            { key: "timeline", label: "Chronologie" },
            { key: "awards", label: "Récompenses" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`!px-4 !py-2 !rounded-lg !font-[var(--font-playfair)] !font-medium !transition-colors ${
                activeTab === tab.key
                  ? "!bg-[var(--color-primary)] !text-white"
                  : "!text-[var(--color-text)] !hover:text-[var(--color-accent)] !hover:bg-[var(--color-secondary)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* Statistics Section */}
    <div className="!bg-white !py-16">
      <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8">
        <div className="!grid !grid-cols-2 md:!grid-cols-3 lg:!grid-cols-6 !gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="!text-center"
            >
              <div className="!text-4xl !mb-3">{stat.icon}</div>
              <div className="!text-3xl !font-bold !text-[var(--color-primary)] !mb-1">
                {stat.number}
              </div>
              <div className="!text-[var(--color-text)] !font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* Content Sections */}
    <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-16">
      {/* Notre Histoire */}
      {activeTab === "story" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-16 !items-center !mb-16">
            <div>
              <h2 className="!text-4xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-6">
                Notre Histoire
              </h2>
              <div className="!space-y-6 !text-lg !text-[var(--color-text)]">
                <p>
                  L'Elegance Intemporelle est née d'une vision audacieuse : prouver que L'Elegance Intemporelle et
                  responsabilité peuvent coexister harmonieusement. En 2020,
                  dans un monde en pleine transformation, Sarah Johnson a
                  imaginé une marque qui transcenderait les conventions de
                  l'industrie de la mode.
                </p>
                <p>
                  Inspirée par les ateliers de couture traditionnels parisiens
                  et guidée par les principes du développement durable, L'Elegance Intemporelle a
                  rapidement évolué d'une start-up passionnée vers une
                  référence mondiale en matière de mode éthique et luxueuse.
                </p>
                <p>
                  Aujourd'hui, nous collaborons avec plus de 100 artisans dans
                  15 pays, chacun partageant notre engagement pour
                  l'excellence et la durabilité. Chaque pièce L'Elegance Intemporelle raconte une
                  histoire - celle de mains expertes, de matériaux nobles et
                  d'un avenir plus responsable.
                </p>
              </div>
            </div>
            <div className="!relative">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop"
                alt="Atelier L'Elegance Intemporelle"
                className="!rounded-lg !shadow-[var(--color-shadow)]"
              />
              <div className="!absolute !-bottom-6 !-right-6 !bg-[var(--color-primary)] !text-white !p-6 !rounded-lg !shadow-[var(--color-shadow)]">
                <div className="!text-2xl !font-bold">5 ans</div>
                <div className="!text-sm">d'innovation continue</div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="!grid !grid-cols-1 md:!grid-cols-3 !gap-8 !mb-16">
            <div className="!bg-[var(--color-secondary)] !p-8 !rounded-lg !shadow-[var(--color-shadow)]">
              <div className="!w-12 !h-12 !bg-[var(--color-primary)] !rounded-lg !flex !items-center !justify-center !mb-4">
                <span className="!text-2xl">🎯</span>
              </div>
              <h3 className="!text-xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-4">
                Notre Mission
              </h3>
              <p className="!text-[var(--color-text)]">
                Créer une mode luxueuse et accessible qui respecte notre
                planète et valorise l'artisanat traditionnel, tout en innovant
                pour l'avenir.
              </p>
            </div>
            <div className="!bg-[var(--color-secondary)] !p-8 !rounded-lg !shadow-[var(--color-shadow)]">
              <div className="!w-12 !h-12 !bg-[var(--color-primary)] !rounded-lg !flex !items-center !justify-center !mb-4">
                <span className="!text-2xl">👁️</span>
              </div>
              <h3 className="!text-xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-4">
                Notre Vision
              </h3>
              <p className="!text-[var(--color-text)]">
                Devenir la référence mondiale de la mode durable et luxueuse,
                inspirant une nouvelle génération de consommateurs conscients.
              </p>
            </div>
            <div className="!bg-[var(--color-secondary)] !p-8 !rounded-lg !shadow-[var(--color-shadow)]">
              <div className="!w-12 !h-12 !bg-[var(--color-primary)] !rounded-lg !flex !items-center !justify-center !mb-4">
                <span className="!text-2xl">💚</span>
              </div>
              <h3 className="!text-xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-4">
                Nos Engagements
              </h3>
              <p className="!text-[var(--color-text)]">
                Transparence totale, production éthique, innovation constante
                et impact positif sur les communautés que nous servons.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Nos Valeurs */}
      {activeTab === "values" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="!text-center !mb-16">
            <h2 className="!text-4xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="!text-xl !text-[var(--color-text)] !max-w-3xl !mx-auto">
              Les principes qui guident chacune de nos décisions et
              définissent notre identité unique dans l'industrie de la mode.
            </p>
          </div>

          <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="!bg-white !rounded-lg !shadow-[var(--color-shadow)] !p-8 !hover:shadow-[var(--color-shadow)] !transition-shadow"
              >
                <div
                  className={`!w-16 !h-16 !bg-[var(--color-primary)] !rounded-lg !flex !items-center !justify-center !mb-6`}
                >
                  <span className="!text-3xl !text-white">{value.icon}</span>
                </div>
                <h3 className="!text-2xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-4">
                  {value.title}
                </h3>
                <p className="!text-[var(--color-text)] !mb-6 !leading-relaxed">
                  {value.description}
                </p>
                <ul className="!space-y-3">
                  {value.details.map((detail, idx) => (
                    <li key={idx} className="!flex !items-start">
                      <span className="!text-[var(--color-accent)] !mr-3 !mt-1">✓</span>
                      <span className="!text-[var(--color-text)]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Notre Équipe */}
      {activeTab === "team" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="!text-center !mb-16">
            <h2 className="!text-4xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-4">
              Notre Équipe Exceptionnelle
            </h2>
            <p className="!text-xl !text-[var(--color-text)] !max-w-3xl !mx-auto">
              Rencontrez les visionnaires, créateurs et experts qui donnent
              vie à la philosophie L'Elegance Intemporelle chaque jour.
            </p>
          </div>

          <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="!bg-white !rounded-lg !shadow-[var(--color-shadow)] !overflow-hidden !hover:shadow-[var(--color-shadow)] !transition-all !duration-300"
              >
                <div className="!relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="!w-full !h-80 !object-cover"
                  />
                  <div className="!absolute !top-4 !right-4 !flex !space-x-2">
                    <a
                      href={member.linkedin}
                      className="!w-8 !h-8 !bg-[var(--color-primary)] !rounded-full !flex !items-center !justify-center !text-white !text-sm !hover:bg-[var(--color-background-secondary)]"
                    >
                      in
                    </a>
                    <a
                      href={member.instagram}
                      className="!w-8 !h-8 !bg-[var(--color-primary)] !rounded-full !flex !items-center !justify-center !text-white !text-sm !hover:bg-[var(--color-background-secondary)]"
                    >
                      ig
                    </a>
                  </div>
                </div>
                <div className="!p-6">
                  <h3 className="!text-xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-1">
                    {member.name}
                  </h3>
                  <p className="!text-[var(--color-primary)] !font-semibold !mb-4">
                    {member.role}
                  </p>
                  <p className="!text-[var(--color-text)] !mb-4 !leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="!flex !flex-wrap !gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="!px-3 !py-1 !bg-[var(--color-secondary)] !text-[var(--color-text)] !rounded-full !text-sm !font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Durabilité */}
      {activeTab === "sustainability" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="!text-center !mb-16">
            <h2 className="!text-4xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-4">
              Notre Engagement Environnemental
            </h2>
            <p className="!text-xl !text-[var(--color-text)] !max-w-3xl !mx-auto">
              La durabilité n'est pas qu'un concept pour nous - c'est le cœur
              de notre modèle d'affaires et de notre identité.
            </p>
          </div>

          <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-8 !mb-16">
            {sustainability.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="!bg-white !rounded-lg !shadow-[var(--color-shadow)] !p-8 !hover:shadow-[var(--color-shadow)] !transition-shadow"
              >
                <div className="!flex !items-start !mb-6">
                  <div className="!w-12 !h-12 !bg-[var(--color-secondary)] !rounded-lg !flex !items-center !justify-center !mr-4">
                    <span className="!text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="!text-xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-2">
                      {item.title}
                    </h3>
                    <p className="!text-[var(--color-text)] !mb-4">{item.description}</p>
                    <div className="!bg-[var(--color-secondary)] !p-4 !rounded-lg">
                      <p className="!text-[var(--color-background-secondary)] !font-semibold">
                        Impact: {item.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Environmental Impact Chart */}
          <div className="!bg-[var(--color-primary)] !rounded-lg !p-8 !text-white">
            <h3 className="!text-2xl !font-[var(--font-playfair)] !font-bold !mb-6 !text-center">
              Notre Impact Environnemental en Chiffres
            </h3>
            <div className="!grid !grid-cols-2 md:!grid-cols-4 !gap-6 !text-center">
              <div>
                <div className="!text-3xl !font-bold !mb-2">-70%</div>
                <div className="!text-sm !opacity-90">Émissions CO2</div>
              </div>
              <div>
                <div className="!text-3xl !font-bold !mb-2">-85%</div>
                <div className="!text-sm !opacity-90">Consommation d'eau</div>
              </div>
              <div>
                <div className="!text-3xl !font-bold !mb-2">95%</div>
                <div className="!text-sm !opacity-90">Matériaux durables</div>
              </div>
              <div>
                <div className="!text-3xl !font-bold !mb-2">100%</div>
                <div className="!text-sm !opacity-90">Énergie renouvelable</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Chronologie */}
      {activeTab === "timeline" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="!text-center !mb-16">
            <h2 className="!text-4xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-4">
              Notre Parcours
            </h2>
            <p className="!text-xl !text-[var(--color-text)] !max-w-3xl !mx-auto">
              Découvrez les moments clés qui ont façonné l'histoire de L'Elegance Intemporelle et
              notre vision pour l'avenir.
            </p>
          </div>

          <div className="!relative">
            <div className="!absolute !left-1/2 !transform !-translate-x-px !h-full !w-0.5 !bg-[var(--color-border)]"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`!relative !flex !items-center !mb-16 ${
                  index % 2 === 0 ? "!flex-row" : "!flex-row-reverse"
                }`}
              >
                <div
                  className={`!w-1/2 ${
                    index % 2 === 0 ? "!pr-8 !text-right" : "!pl-8 !text-left"
                  }`}
                >
                  <div className="!bg-white !rounded-lg !shadow-[var(--color-shadow)] !p-6 !hover:shadow-[var(--color-shadow)] !transition-shadow">
                    <div className="!text-4xl !mb-4">{milestone.icon}</div>
                    <div className="!text-2xl !font-bold !text-[var(--color-primary)] !mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="!text-xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-3">
                      {milestone.title}
                    </h3>
                    <p className="!text-[var(--color-text)] !leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="!absolute !left-1/2 !transform !-translate-x-1/2 !w-4 !h-4 !bg-[var(--color-primary)] !rounded-full !border-4 !border-white !shadow-[var(--color-shadow)]"></div>

                <div className="!w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Récompenses */}
      {activeTab === "awards" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="!text-center !mb-16">
            <h2 className="!text-4xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-4">
              Nos Récompenses et Certifications
            </h2>
            <p className="!text-xl !text-[var(--color-text)] !max-w-3xl !mx-auto">
              La reconnaissance de nos pairs et institutions valide notre
              engagement pour l'excellence et la durabilité.
            </p>
          </div>

          <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="!bg-[var(--color-secondary)] !rounded-lg !p-8 !border-l-4 !border-[var(--color-accent)] !hover:shadow-[var(--color-shadow)] !transition-shadow"
              >
                <div className="!flex !items-center !mb-4">
                  <span className="!text-3xl !mr-4 !text-[var(--color-accent)]">🏆</span>
                  <div className="!text-2xl !font-bold !text-[var(--color-accent)]">
                    {award.year}
                  </div>
                </div>
                <h3 className="!text-xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-2">
                  {award.title}
                </h3>
                <p className="!text-[var(--color-text)] !font-semibold !mb-3">
                  {award.organization}
                </p>
                <p className="!text-[var(--color-text)] !leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="!mt-16 !bg-white !rounded-lg !shadow-[var(--color-shadow)] !p-8">
            <h3 className="!text-2xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-8 !text-center">
              Nos Certifications
            </h3>
            <div className="!grid !grid-cols-2 md:!grid-cols-4 !gap-8 !text-center">
              {[
                { name: "B-Corp", desc: "Entreprise à mission" },
                { name: "GOTS", desc: "Textile biologique" },
                { name: "Fair Trade", desc: "Commerce équitable" },
                { name: "Carbon Neutral", desc: "Neutralité carbone" },
              ].map((cert, index) => (
                <div key={index} className="!p-4">
                  <div className="!w-16 !h-16 !bg-[var(--color-secondary)] !rounded-full !flex !items-center !justify-center !mx-auto !mb-3">
                    <span className="!text-2xl !text-[var(--color-primary)]">✓</span>
                  </div>
                  <h4 className="!font-[var(--font-playfair)] !font-bold !text-[var(--color-text)]">{cert.name}</h4>
                  <p className="!text-sm !text-[var(--color-text)]">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Call to Action */}
      <div className="!bg-[var(--color-background)] !py-20">
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="!text-4xl !font-[var(--font-playfair)] !font-bold !text-[var(--color-text)] !mb-6">
              Rejoignez la Révolution L'Elegance Intemporelle
            </h2>
            <p className="!text-xl !text-[var(--color-text)] !mb-10 !max-w-3xl !mx-auto">
              Découvrez une mode qui respecte vos valeurs, valorise l'artisanat
              et préserve notre planète. Chaque achat contribue à un avenir plus
              durable et équitable.
            </p>
            <div className="!flex !flex-col sm:!flex-row !gap-4 !justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="!bg-[var(--color-primary)] !text-white !px-8 !py-4 !rounded-lg !text-lg !font-[var(--font-playfair)] !font-bold !hover:bg-[var(--color-background-secondary)] !transition-all !duration-300 !shadow-[var(--color-shadow)]"
              >
                Découvrir la Collection
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="!border-2 !border-[var(--color-border)] !text-[var(--color-text)] !px-8 !py-4 !rounded-lg !text-lg !font-[var(--font-playfair)] !font-bold !hover:bg-[var(--color-secondary)] !transition-all !duration-300"
              >
                Nous Contacter
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
    </div>
  );
};

export default AboutUs;
