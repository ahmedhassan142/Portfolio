"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FiGithub, FiLinkedin, FiMail, FiSun, FiMoon, FiX } from 'react-icons/fi';
import { useTheme } from 'next-themes';

// Animation variants
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Urdu Sentiment Analysis',
    description: 'BERT model for Urdu sentiment classification (deployed on huggingface)',
    tags: ['NLP', 'TensorFlow', 'Hugging Face','Gradio'],
    link: 'https://huggingface.co/spaces/Ahmedhassan54/Nlp-chatbot'
  },
  {
    id: '2',
    title: 'Image-Classifier',
    description: 'Image Classification on Cat vs Dog (deployed on huggingface) ',
    tags: ['CV', 'DL','Tensorflow','Numpy','Pandas','Huggingface', 'Gradio'],
    link: 'https://huggingface.co/spaces/Ahmedhassan54/Image-Classification'
  },
  {
    id: '3',
    title: 'Customer Churn Predictor',
    description: 'Developed a Customer Churn Predictor Model using Machine elarning Algorithm (deployed on huggingface)',
    tags: ['ML', 'Scikit-Learn', 'Numpy','Pandas','Hugging Face','Gradio'],
    link: 'https://huggingface.co/spaces/Ahmedhassan54/Customer-Churn-Predictor'
  },
  {
    id: '4',
    title: 'Spam-Ham-Classification',
    description: 'Spam-Detection using Machine learning ALgorithm by using scikit-learn for imbalance class i have use smote (deployed on huggingface)',
    tags: ['ML', 'Scikit-learn','Numpy','Pandas', 'Hugging Face','Gradio'],
    link: 'https://huggingface.co/spaces/Ahmedhassan54/Spam-Ham-Classification'
  },
  {
    id: '5',
    title: 'Demand-Forecating',
    description: 'Developed a DemandForecasting usnig Machine learning Algorithm (deployed on huggingface) ',
    tags: ['ML', 'Scikit-learn','Numpy','Pandas','XGboost','Hugging Face','Gradio'],
    link: 'https://huggingface.co/spaces/Ahmedhassan54/Demand-Forecasting'
  },
   {
    id: '6',
    title: 'Defect-Detection',
    description: 'Defect Detectoin in Metal Surface using Deeplearning CV (deployed on huggingface)',
    tags: ['DL', 'CV','TensorFlow', 'Hugging Face','Gradio'],
    link: 'https://huggingface.co/spaces/Ahmedhassan54/Defect-Detection'
  },
    {
    id: '7',
    title: 'Travel-Blog-Website',
    description: 'Built a Travel BLog Website using NEXTjs for proper SEO SSR,CSR (deployed on vercel)',
    tags: [ 'Nextjs','Mongdb', 'Node.js','React.js'],
    link: 'https://travel-blog-website-git-72d31b-ahmed-hassans-projects-96c42d63.vercel.app/'
  },
   {
    id: '8',
    title: 'Microservice-Ecommerce-Website',
    description: 'Built a Microservice Ecommerce Website using MERN Stack and NextJs for proper SEO SSR,CSR (deployed on vercel and backend on render)',
    tags: [ 'Nextjs','Mongdb', 'Node.js','React.js','Exoress'],
    link: 'https://ecommerce-frontend-git-main-ahmed-hassans-projects-96c42d63.vercel.app/'
  },
   {
    id: '9',
    title: 'RealTime-ChatApplication',
    description: 'Built a Real Time Chat Application using MERN Stack and NextJs for proper SEO SSR,CSR also use redis fro caching purpose and bull for message queue (deployed on vercel and backend on render) ',
    tags: [ 'Nextjs','Mongdb', 'Node.js','React.js','Exoress'],
    link: 'https://the-chafrontend-git-main-ahmed-hassans-projects-96c42d63.vercel.app'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const SkillCloud = ({ title, skills, color }: { title: string; skills: { name: string; level: number }[]; color: string }) => {
  return (
    <motion.div 
      variants={item}
      className="skill-card fade-in"
    >
      <h3 className="skill-title">{title}</h3>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-name">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="skill-progress"
                style={{ backgroundColor: color }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const ContactFormPopup = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Contact Form Submission from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = `mailto:ah7770643@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="contact-popup-overlay">
      <div className="contact-popup-container">
        <button 
          onClick={onClose}
          className="contact-popup-close"
          aria-label="Close contact form"
        >
          <FiX />
        </button>
        
        <h3 className="contact-popup-title">Get in Touch</h3>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-group floating">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
              className="contact-form-input"
            />
            <label htmlFor="name" className="contact-form-label">
              Your Name
            </label>
          </div>
          
          <div className="contact-form-group floating">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="contact-form-input"
            />
            <label htmlFor="email" className="contact-form-label">
              Email Address
            </label>
          </div>
          
          <div className="contact-form-group">
            <label htmlFor="message" className="contact-form-label">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-form-input contact-form-textarea"
            />
          </div>
          
          <button
            type="submit"
            className="contact-form-submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const skills = {
    ml: [
      { name: 'TensorFlow', level: 85 },
      { name: 'Keras', level: 80 },
      { name: 'Scikit-learn', level: 75 },
      { name: 'TF Serving', level: 70 },
      {name:'Pandas',level:75},
      {name:'Numpy',level:78},
      {name:"Mtplotlib",level:80}
    ],
    devops: [
      { name: 'Docker', level: 80 },
      { name: 'CI/CD', level: 75 },
      { name: 'Huggingface', level: 75 },
      {name:'Git',level:80},
      {name:'Vercel',level:90}
    ],
    mern: [
      { name: 'MongoDB', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 75 },
      {name:'Next.js',level:80},
      { name: 'MessageQueues : RabbitMQ', level: 70 }
    ]
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowContactForm(true);
  };

  return (
    <>
      <Head>
        <title>AI Engineer | MERN Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div>
        {/* Header */}
        <header className="header container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="logo"
          >
            AH.dev
          </motion.div>
          
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="theme-toggle"
          >
            {mounted && (theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />)}
          </button>
        </header>

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero container"
        >
          <h1 className="hero-title">
            Ahmed Hassan
          </h1>
          <p className="hero-subtitle">
            AI/Machine Learning Engineer • Full Stack Developer
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#"
              onClick={handleContactClick}
              className="btn btn-gradient"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          variants={container}
          initial="hidden"
          animate="show"
          className="section container"
        >
          <motion.h2 
            variants={item}
            className="section-title"
          >
            Technical Expertise
          </motion.h2>

          <div className="skills-grid">
            <SkillCloud title="AI/Machine Learning" skills={skills.ml} color="#10B981" />
            <SkillCloud title="MERN Stack/NEXTJS" skills={skills.mern} color="#F59E0B" />
            <SkillCloud title="DevOps/MLOps" skills={skills.devops} color="#EC4899" />
          </div>
        </motion.section>

        {/* Projects Section */}
        <section className="section container">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            PROJECTS
          </motion.h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="project-card"
              >
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-container">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank"   
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    View Project
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="contact-section"
          >
            <h2 className="section-title">Let's Work Together</h2>
            <p className="hero-subtitle max-w-2xl mx-auto">
              Interested in collaborating on an AI or web project? Reach out for consulting, freelance work, or full-time opportunities.
            </p>
            <div className="contact-buttons">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                onClick={handleContactClick}
                className="btn btn-outline"
              >
                <FiMail size={20} />
                Email Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/ahmed-hassan-7a3a90212/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FiLinkedin size={20} />
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/ahmedhassan142"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FiGithub size={20} />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Contact Form Popup */}
        {showContactForm && (
          <ContactFormPopup onClose={() => setShowContactForm(false)} />
        )}
      </div>
    </>
  );
};

export default Home;
