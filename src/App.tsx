import React, { useState, useEffect } from 'react';
import { 
  User, 
  GraduationCap, 
  Stethoscope, 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Activity,
  BookOpen,
  Users,
  Award,
  Calendar,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'skills', 'experience', 'research', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu when navigating
    }
  };

  const skills = [
    { name: 'Vital Signs Assessment', level: 85, icon: Activity },
    { name: 'Drug Administration (I.M & I.V)', level: 80, icon: Heart },
    { name: 'Patient Communication', level: 90, icon: Users },
    { name: 'Clinical Observation', level: 85, icon: Stethoscope },
    { name: 'Patient Education', level: 88, icon: BookOpen },
    { name: 'Health Outreach', level: 92, icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-200 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Stethoscope size={20} className="text-white" />
              </div>
              <div className="font-bold text-xl text-blue-900">Alianda Rollins</div>
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'education', 'skills', 'experience', 'research', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-200 capitalize px-3 py-2 rounded-lg ${
                    activeSection === section 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-slate-600 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></div>
                <div className={`w-full h-0.5 bg-slate-600 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-full h-0.5 bg-slate-600 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></div>
              </div>
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-2 border-t border-blue-100 mt-4">
              {['hero', 'about', 'education', 'skills', 'experience', 'research', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 capitalize ${
                    activeSection === section 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mx-auto mb-8 flex items-center justify-center text-white shadow-2xl">
            <Stethoscope size={48} />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 leading-tight">
            Alianda Rollins <span className="text-blue-600">Maloba</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-6 font-light">
            Student Nurse | Aspiring Clinical Researcher
          </p>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-xl border border-blue-100">
            <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
              "Compassionate, committed, and curious — I am pursuing a future in advanced nursing 
              and clinical research, focused on improving patient outcomes through science and empathy."
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-500" />
                <span>Juja, Kiambu County</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-500" />
                <span>0115 288 203</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-500" />
                <span>rollinsace11534@gmail.com</span>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Learn More <ChevronDown size={20} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-100">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <User size={28} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">My Journey</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  I am a Bachelor of Science in Nursing student at Jomo Kenyatta University of Agriculture 
                  and Technology (JKUAT), currently in my first year, third trimester. My academic interests 
                  focus on pediatric nursing, surgical pathology, and clinical research.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  I am driven by a desire to make healthcare more accessible, evidence-driven, and patient-centered. 
                  With a growing foundation in clinical practice and health communication, I aim to contribute to 
                  innovative solutions in Kenya's healthcare system through research and community engagement.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-2xl">
                <Heart size={32} className="text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-800 mb-2">Pediatric Focus</h4>
                <p className="text-sm text-slate-600">Specialized interest in pediatric nursing care</p>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-2xl">
                <Activity size={32} className="text-indigo-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-800 mb-2">Surgical Pathology</h4>
                <p className="text-sm text-slate-600">Understanding disease processes and treatments</p>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-2xl">
                <BookOpen size={32} className="text-teal-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-800 mb-2">Clinical Research</h4>
                <p className="text-sm text-slate-600">Evidence-based healthcare solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 transform hover:-translate-y-2 transition-all duration-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={28} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-slate-800">Bachelor of Science in Nursing</h3>
                    <span className="text-blue-600 font-medium text-sm bg-blue-50 px-3 py-1 rounded-full mt-2 md:mt-0">2024 - Present</span>
                  </div>
                  <p className="text-slate-600 mb-2">Jomo Kenyatta University of Agriculture and Technology (JKUAT)</p>
                  <p className="text-sm text-slate-500">Currently in First Year, Third Trimester</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 transform hover:-translate-y-2 transition-all duration-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Award size={28} className="text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-slate-800">Kenya Certificate of Secondary Education (KCSE)</h3>
                    <span className="text-green-600 font-medium text-sm bg-green-50 px-3 py-1 rounded-full mt-2 md:mt-0">2020 - 2023</span>
                  </div>
                  <p className="text-slate-600">St. Peter's Mumias Boys High School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Core Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-100">
            <div className="grid gap-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                        <IconComponent size={20} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold text-slate-800">{skill.name}</h4>
                          <span className="text-sm text-slate-500">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-16">
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Practical Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-100">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Heart size={28} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">Medical Outreach Camp</h3>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>October 31, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>JKUAT Pavilion Grounds</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="ml-0 md:ml-22 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                <p className="text-slate-600">Provided vital signs assessments to community members during a public health awareness event</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                <p className="text-slate-600">Led sessions on reproductive health education, emphasizing preventive care</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                <p className="text-slate-600">Supported clinical team in triage, education, and health record collection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Research Interest</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-10 shadow-xl border border-blue-100">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <BookOpen size={28} className="text-indigo-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Impacts of Antiretroviral Drugs and NSAIDs on Cardiovascular Function
                </h3>
                <div className="bg-white/60 rounded-2xl p-6">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    This ongoing research explores the relationship between specific antiretroviral drugs (ARVs) 
                    and the onset of peripheral edema and cardiac complications in hypertensive patients.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    The study highlights potential risks such as right ventricular hypertrophy and seeks to 
                    promote better pharmacovigilance and patient monitoring protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Phone size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-slate-300">0115 288 203</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-slate-300">rollinsace11534@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <MapPin size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-slate-300">Juja, Kiambu County</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Linkedin size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <p className="text-slate-300">Alianda Rollins</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Professional References</h3>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-2xl p-6">
                  <h4 className="text-white font-semibold mb-2">Alianda Kelvin</h4>
                  <p className="text-slate-300 text-sm mb-2">Clinical Mentor</p>
                  <p className="text-slate-300 text-sm">0741 080 177</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <h4 className="text-white font-semibold mb-2">Rosina Mumo</h4>
                  <p className="text-slate-300 text-sm mb-2">Registered Nurse</p>
                  <p className="text-slate-300 text-sm">0707 095 355</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-400">
              © 2024 Alianda Rollins Maloba. Dedicated to advancing healthcare through compassionate nursing and evidence-based research.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;