import React from 'react';
import { 
  SiPython, SiFlutter, SiPytorch, SiNumpy, SiFlask, 
  SiDjango, SiJavascript, SiDocker, SiOpencv, SiHuggingface, 
  SiGit, SiSqlite, SiFirebase 
} from 'react-icons/si';
import { FaJava, FaDownload } from 'react-icons/fa';
import { HiCode, HiChip, HiGlobeAlt, HiServer, HiDatabase, HiClock } from 'react-icons/hi';
import { VscGitCommit } from 'react-icons/vsc';
import { BsFileEarmarkCode } from 'react-icons/bs';
import { useLanguage } from '../context/LanguageContext';
import { Parallax } from 'react-parallax';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
// TbBrandC ikonu mevcut değil

// Çok dilli içerik
const content = {
  tr: {
    langButton: 'EN',
    section: 'HAKKIMDA',
    title: 'AI Engineer & Yazılım Geliştirici',
    description: 'Yazılım dünyasında %years% yıllık deneyimim ile modern ve güvenli projeler geliştiriyorum. Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum.',
    cvButton: "CV'mi İndir",
    skillSections: {
      languages: 'Programlama Dilleri',
      tools: 'Araçlar & Teknolojiler',
      ai: 'AI & Veri Bilimi',
      web: 'Web Geliştirme',
      devops: 'DevOps & Altyapı',
      database: 'Veritabanı'
    },
    stats: {
      commits: 'Commits',
      projects: 'Projeler',
      experience: 'Yıl Deneyim'
    }
  },
  en: {
    langButton: 'TR',
    section: 'ABOUT ME',
    title: 'AI Engineer & Software Developer',
    description: 'With %years% years of experience in the software world, I develop modern and secure projects. I focus on continuous learning and improving myself.',
    cvButton: "Download CV",
    skillSections: {
      languages: 'Programming Languages',
      tools: 'Tools & Technologies',
      ai: 'AI & Data Science',
      web: 'Web Development',
      devops: 'DevOps & Infrastructure',
      database: 'Database'
    },
    stats: {
      commits: 'Commits',
      projects: 'Projects',
      experience: 'Years Experience'
    }
  }
};

// Yetenek verileri (daha sonra dışarıdan alınabilir veya güncellenebilir)
const programmingLanguages = ["Python", "Java", "Flutter", "C"];

// Araçlar ve teknolojileri kategorilere ayırıyoruz
const toolsAndTechCategories = {
  "AI & Veri Bilimi": ["PyTorch", "NumPy", "HuggingFace", "OpenCV"],
  "Web Geliştirme": ["Flask", "Django", "JavaScript"],
  "DevOps & Altyapı": ["Docker", "Git"],
  "Veritabanı": ["SQLite", "Firebase"]
};

// Kategori isimleri İngilizce karşılıklarını eşleştirme
const categoryNameMap = {
  "AI & Veri Bilimi": "ai",
  "Web Geliştirme": "web",
  "DevOps & Altyapı": "devops",
  "Veritabanı": "database"
};

// Kategori ikonları
const categoryIcons = {
  "Programlama Dilleri": <HiCode className="mr-2 inline-block" />,
  "Araçlar & Teknolojiler": <HiChip className="mr-2 inline-block" />,
  "AI & Veri Bilimi": <HiChip className="mr-2 inline-block" />,
  "Web Geliştirme": <HiGlobeAlt className="mr-2 inline-block" />,
  "DevOps & Altyapı": <HiServer className="mr-2 inline-block" />,
  "Veritabanı": <HiDatabase className="mr-2 inline-block" />
};

// İstatistik ikonları
const statIcons = {
  "commits": <VscGitCommit className="text-purple-400 text-4xl" />,
  "projects": <BsFileEarmarkCode className="text-purple-400 text-4xl" />,
  "experience": <HiClock className="text-purple-400 text-4xl" />
};

// İkon eşleştirmesi ve hover renkleri
const skillIcons = {
  "Python": { icon: <SiPython title="Python" />, color: "yellow" },
  "Java": { icon: <FaJava title="Java" />, color: "orange" },
  "Flutter": { icon: <SiFlutter title="Flutter" />, color: "blue" },
  // C için özel ikon bulunamadı, metin gösterimi kullanılacak
  "PyTorch": { icon: <SiPytorch title="PyTorch" />, color: "orange" },
  "NumPy": { icon: <SiNumpy title="NumPy" />, color: "blue" },
  "Flask": { icon: <SiFlask title="Flask" />, color: "green" },
  "Django": { icon: <SiDjango title="Django" />, color: "green" },
  "JavaScript": { icon: <SiJavascript title="JavaScript" />, color: "yellow" },
  "Docker": { icon: <SiDocker title="Docker" />, color: "blue" },
  "OpenCV": { icon: <SiOpencv title="OpenCV" />, color: "green" },
  "HuggingFace": { icon: <SiHuggingface title="HuggingFace" />, color: "yellow" },
  "Git": { icon: <SiGit title="Git" />, color: "orange" },
  "SQLite": { icon: <SiSqlite title="SQLite" />, color: "blue" },
  "Firebase": { icon: <SiFirebase title="Firebase" />, color: "yellow" },
};

// İstatistik verileri (statik)
const stats = {
  commits: "400+",
  projects: "20+",
  experience: "2+"
};

// Particles konfigürasyonu
const particlesConfig = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#a855f7" // mor
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#a855f7",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5
        }
      },
      push: {
        particles_nb: 3
      }
    }
  },
  retina_detect: true,
  fullScreen: {
    enable: false
  }
};

const Hakkimda = () => {
  // Global dil context'ini kullan
  const { language } = useLanguage();
  
  // Mevcut dildeki içeriği al
  const t = content[language];
  
  // Particle kütüphanesi için init fonksiyonu
  const particlesInit = async (engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.log("Particles initialization error:", error);
    }
  };

  return (
    <section id="hakkimda" className="min-h-screen relative overflow-hidden">
      {/* Particles arka plan */}
      <div className="absolute inset-0 z-0">
        <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
      </div>
      
      {/* Paralax Arka Plan */}
      <Parallax 
        blur={{ min: -15, max: 15 }}
        strength={500}
        className="min-h-screen w-full"
        bgClassName="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900"
      >
        <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-purple-900/80 text-white relative z-10">
          <style jsx>{`
            .text-glow {
              text-shadow: 0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.3), 0 0 30px rgba(168, 85, 247, 0.2);
            }
            
            .skill-icon {
              transition: all 0.3s ease;
            }
            
            .skill-icon:hover {
              transform: translateY(-5px);
            }
            
            .hover-yellow:hover {
              color: #FFD700;
              filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.7));
            }
            
            .hover-orange:hover {
              color: #FFA500;
              filter: drop-shadow(0 0 8px rgba(255, 165, 0, 0.7));
            }
            
            .hover-blue:hover {
              color: #3B82F6;
              filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.7));
            }
            
            .hover-green:hover {
              color: #10B981;
              filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.7));
            }
            
            .animate-float {
              animation: float 4s ease-in-out infinite;
            }
            
            @keyframes float {
              0% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
              100% {
                transform: translateY(0px);
              }
            }
            
            .shape {
              position: absolute;
              filter: blur(70px);
              opacity: 0.5;
              z-index: -1;
            }
            
            .shape-1 {
              top: 20%;
              left: 10%;
              width: 300px;
              height: 300px;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(91, 33, 182, 0) 70%);
              animation: morph 25s linear infinite alternate;
            }
            
            .shape-2 {
              bottom: 10%;
              right: 10%;
              width: 400px;
              height: 400px;
              border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
              background: radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(91, 33, 182, 0) 70%);
              animation: morph 30s linear infinite alternate-reverse;
            }
            
            @keyframes morph {
              0% {
                border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
              }
              25% {
                border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
              }
              50% {
                border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
              }
              75% {
                border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
              }
              100% {
                border-radius: 39% 61% 70% 30% / 61% 40% 60% 39%;
              }
            }
          `}</style>
          
          {/* Gradient şekiller */}
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          
          <div className="container mx-auto relative z-10">
            {/* Başlık ve Açıklama */}
            <div className="text-center mb-12" data-aos="fade-down">
              <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-2">{t.section}</h2>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow animate-float">{t.title}</h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                {t.description.replace('%years%', stats.experience)}
              </p>
              <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
                <a 
                  href="/cv.pdf" 
                  download 
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <FaDownload className="mr-2" />
                  {t.cvButton}
                </a>
              </div>
            </div>

            {/* Yetenekler ve İstatistikler Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Sol Sütun: Yetenekler */}
              <div className="md:col-span-2 space-y-8">
                {/* Programlama Dilleri */}
                <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:shadow-purple-900/20" data-aos="fade-right">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">
                    {categoryIcons["Programlama Dilleri"]}
                    {t.skillSections.languages}
                  </h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    {programmingLanguages.map((lang, index) => {
                      const iconInfo = skillIcons[lang];
                      const hoverColor = iconInfo ? `hover-${iconInfo.color}` : "";
                      
                      return (
                        <div 
                          key={lang} 
                          className={`text-3xl text-gray-300 transition-colors duration-200 skill-icon ${hoverColor}`}
                          data-aos="fade-up"
                          data-aos-delay={100 + index * 50}
                        >
                          {iconInfo ? iconInfo.icon : 
                            <span className="text-sm bg-gray-700 text-gray-200 px-3 py-1 rounded-md hover:bg-gray-600">{lang}</span>
                          }
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Araçlar & Teknolojiler - Kategorilere ayrılmış */}
                <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:shadow-purple-900/20" data-aos="fade-right" data-aos-delay="100">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">
                    {categoryIcons["Araçlar & Teknolojiler"]}
                    {t.skillSections.tools}
                  </h3>
                  
                  {/* Kategorileri 2x2 grid olarak düzenliyoruz */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(toolsAndTechCategories).map(([category, tools], index) => {
                      const categoryKey = categoryNameMap[category] || category;
                      
                      return (
                        <div 
                          key={category} 
                          className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 transition-transform duration-300 hover:border-purple-500"
                          data-aos="fade-up"
                          data-aos-delay={200 + index * 50}
                        >
                          {/* Kategori başlığı */}
                          <h4 className="text-md font-medium mb-3 text-purple-200">
                            {categoryIcons[category]}
                            {t.skillSections[categoryKey]}
                          </h4>
                          
                          {/* Araçlar */}
                          <div className="flex flex-wrap gap-4 items-center">
                            {tools.map((tool, toolIndex) => {
                              const iconInfo = skillIcons[tool];
                              const hoverColor = iconInfo ? `hover-${iconInfo.color}` : "";
                              
                              return (
                                <div 
                                  key={tool} 
                                  className={`text-3xl text-gray-300 transition-colors duration-200 skill-icon ${hoverColor}`}
                                  data-aos="fade-up"
                                  data-aos-delay={250 + index * 50 + toolIndex * 30}
                                >
                                  {iconInfo ? iconInfo.icon : 
                                    <span className="text-sm bg-gray-700 text-gray-200 px-3 py-1 rounded-md hover:bg-gray-600">{tool}</span>
                                  }
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Sağ Sütun: İstatistikler */}
              <div className="flex flex-col justify-between h-full">
                {/* Commits kartı */}
                <div 
                  className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-8 flex-1 transition-transform duration-300 hover:shadow-xl hover:shadow-purple-900/20 transform hover:-translate-y-1"
                  data-aos="fade-left"
                >
                  <div className="flex items-center h-full">
                    <div className="mr-6 pl-2">
                      {statIcons["commits"]}
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-purple-400">{stats.commits}</div>
                      <div className="text-gray-400">{t.stats.commits}</div>
                    </div>
                  </div>
                </div>
                
                {/* Projeler kartı */}
                <div 
                  className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-8 flex-1 transition-transform duration-300 hover:shadow-xl hover:shadow-purple-900/20 transform hover:-translate-y-1"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <div className="flex items-center h-full">
                    <div className="mr-6 pl-2">
                      {statIcons["projects"]}
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-purple-400">{stats.projects}</div>
                      <div className="text-gray-400">{t.stats.projects}</div>
                    </div>
                  </div>
                </div>
                
                {/* Deneyim kartı */}
                <div 
                  className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-lg flex-1 transition-transform duration-300 hover:shadow-xl hover:shadow-purple-900/20 transform hover:-translate-y-1"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="flex items-center h-full">
                    <div className="mr-6 pl-2">
                      {statIcons["experience"]}
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-purple-400">{stats.experience}</div>
                      <div className="text-gray-400">{t.stats.experience}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Hakkimda; 