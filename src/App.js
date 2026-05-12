import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdCode, MdLayers, MdVideoLibrary, MdMessage } from 'react-icons/md';
import { FiChevronRight } from 'react-icons/fi';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500/30">
      
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-white">
          MOSTAFA<span className="text-blue-500">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#services" className="hover:text-blue-400 transition">Services</a>
          <a href="#projects" className="hover:text-blue-400 transition">Portfolio</a>
          <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Contact Me</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-20 pb-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Digital <span className="text-blue-500">Masterpieces.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            From Alexandria to the world. A creative developer specialized in Programming, Design, and Video Editing. 
            I turn your ideas into tangible digital reality.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2">
              Start a Project <FiChevronRight size={20} />
            </a>
            <div className="flex items-center gap-4 px-6">
              <a href="https://github.com/mostafa-1010ashraf0101" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/mostafa-ashraf-b29210315/" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              I'm Mostafa, a 16-year-old Frontend Developer from Alexandria, Egypt. 
              I help small businesses and startups turn their ideas into fast, modern websites using React & Tailwind.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              My focus is clean code, pixel-perfect design, and shipping on time. 
              When I'm not coding, I'm learning new tech or building personal projects to sharpen my skills.
            </p>
          </div>
          <div className="flex justify-center relative">
            {/* الدايرة الزرقة اللي ورا */}
            <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
            
            {/* صورتي */}
            <img 
              src="/mostafa.jpg" 
              alt="Mostafa" 
              className="relative rounded-2xl w-80 h-80 object-cover border-2 border-slate-700 z-10"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<MdCode className="text-blue-500" size={32} />} 
            title="Programming" 
            desc="Web & Automation tools built with React, Node.js, and modern frameworks" 
          />
          <ServiceCard 
            icon={<MdLayers className="text-purple-500" size={32} />} 
            title="Graphic Design" 
            desc="Branding and UI/UX that stands out from the crowd and converts users" 
          />
          <ServiceCard 
            icon={<MdVideoLibrary className="text-red-500" size={32} />} 
            title="Video Montage" 
            desc="Professional editing that tells your story and engages your audience" 
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
    <ProjectCard 
      title="Stanley Café ☕" 
      desc="Responsive website for a coffee shop. Built with React + Tailwind CSS, deployed on Vercel."
      img="/stanleycafe.png"
      demo="https://stanley-cafe.vercel.app/"
      github="https://github.com/mostafa-1010ashraf0101/stanley-cafe"
    />
          <ProjectCard 
            title="Store Dashboard UI" 
            desc="Admin panel for managing products & orders with charts."
            img="https://placehold.co/600x400/1e293b/a855f7?text=Dashboard+UI"
            demo="#"
            github="#"
          />
          <ProjectCard 
            title="Personal Portfolio" 
            desc="This website. Clean code, dark mode, fully responsive."
            img="https://placehold.co/600x400/1e293b/ffffff?text=Portfolio"
            demo="#"
            github="#"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Let's Build Something Great</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Available for freelance work. Have a project in mind? Send me the details and let's make it happen.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mostafadeova@gmail.com" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all inline-flex items-center gap-2">
            <MdEmail size={20} /> mostafadeova@gmail.com
          </a>
          <a href="https://wa.me/201115592972" target="_blank" rel="noreferrer" className="px-8 py-4 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-600 transition-all inline-flex items-center gap-2">
            <MdMessage size={20} /> WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        © 2026 Mostafa. Built with React & Tailwind. From Alexandria to the world.
      </footer>

    </div>
  );
}

// Service Card Component
function ServiceCard({ icon, title, desc }) {
  return (
    <div className="p-8 bg-slate-800/40 border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all group">
      <div className="mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

// Project Card Component
function ProjectCard({ title, desc, img, demo, github }) {
  return (
    <div className="bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all group">
      <img src={img} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 mb-4">{desc}</p>
        <div className="flex gap-4">
          <a href={demo} className="text-blue-500 font-medium flex items-center gap-1 hover:gap-2 transition-all">
            Live Demo <FiChevronRight size={16} />
          </a>
          <a href={github} className="text-slate-400 font-medium flex items-center gap-1 hover:text-white transition-all">
            <FaGithub size={16} /> Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
