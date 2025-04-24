import React from 'react';
import RDDImage from '../assets/RDD.png';
import KresKayitImage from '../assets/KresKayit.png';
import WikiArtImage from '../assets/WikiArt.png'
import { useLanguage } from '../context/LanguageContext';
import { Parallax } from 'react-parallax';

// Çok dilli içerik
const content = {
  tr: {
    title: 'Projelerim',
    viewOnGithub: 'GitHub\'da Görüntüle',
    projects: [
      {
        id: 1,
        title: 'Yol Yüzey Deformasyonlarının Tespiti, Rapolanması ve Haritalandırılması',
        description: 'Yapay zeka ve görüntü işleme teknikleri ile yol yüzey deformasyonlarının tespiti, rapolaması ve haritalandırılması.',
        technologies: ['Python', 'Pytorch', 'OpenCV', 'YOLO', 'Flask', 'SQLite', 'Docker'],
        imageUrl: RDDImage,
        githubUrl: '#', // GitHub linkinizi buraya ekleyin
      },
      {
        id: 2,
        title: 'Kreş Kayıt ve Atama Sistemi',
        description: 'Atakum Belediyesi kreşleri için bir kayıt alma ve atama sistemi.',
        technologies: ['Python', 'Flask', 'SQLAlchemy', 'Docker'],
        imageUrl: KresKayitImage,
        githubUrl: 'https://github.com/YavuzMuratt/KresKayit',
      },
      {
        id: 3,
        title: 'WikiArt Classification App',
        description: 'WikiArt veri kümesi ile eğitilerek görsel sanat eserlerini ait oldukları türe göre sınıflandıran bir model.',
        technologies: ['Python', 'Pytorch', 'ResNet'],
        imageUrl: WikiArtImage,
        githubUrl: 'https://github.com/YavuzMuratt/wikiart-classification-act',
      },
      {
        id: 4,
        title: 'Industrial Supply Demand Application',
        description: 'İşletmelerin endüstriyel ürün taleplerini gönderebilmeleri ve üreticilerin talepleri karşılamalarının sağlandığı bir uygulama.',
        technologies: ['Flutter', 'Firebase'],
        imageUrl: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Proje+4', // Placeholder image
        githubUrl: 'https://github.com/YavuzMuratt/supply_app',
      },
      {
        id: 5,
        title: 'Fal Uygulaması',
        description: 'Kullanıcıların çeşitli fal oyunlarını oynayabilmeleri için bir uygulama.',
        technologies: ['Flutter', 'Firebase'],
        imageUrl: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Proje+5', // Placeholder image
        githubUrl: 'https://github.com/YavuzMuratt',
      },
      {
        id: 6,
        title: 'ChessDL',
        description: 'Deep Learning ile geliştirilmiş bir satranç motoru.',
        technologies: ['Python', 'Pytorch'],
        imageUrl: 'https://via.placeholder.com/400x250/6366F1/FFFFFF?text=Proje+6', // Placeholder image
        githubUrl: 'https://github.com/YavuzMuratt/ChessDL',
      },
    ]
  },
  en: {
    title: 'My Projects',
    viewOnGithub: 'View on GitHub',
    projects: [
      {
        id: 1,
        title: 'Road Surface Deformation Detection, Reporting and Mapping',
        description: 'Detection, reporting and mapping of road surface deformations using artificial intelligence and image processing techniques.',
        technologies: ['Python', 'Pytorch', 'OpenCV', 'YOLO', 'Flask', 'SQLite', 'Docker'],
        imageUrl: RDDImage,
        githubUrl: '#', 
      },
      {
        id: 2,
        title: 'Kindergarten Registration and Assignment System',
        description: 'A registration and assignment system for Atakum Municipality kindergartens.',
        technologies: ['Python', 'Flask', 'SQLAlchemy', 'Docker'],
        imageUrl: KresKayitImage,
        githubUrl: 'https://github.com/YavuzMuratt/KresKayit',
      },
      {
        id: 3,
        title: 'WikiArt Classification App',
        description: 'A model trained with the WikiArt dataset to classify visual artworks according to their genre.',
        technologies: ['Python', 'Pytorch', 'ResNet'],
        imageUrl: WikiArtImage,
        githubUrl: 'https://github.com/YavuzMuratt/wikiart-classification-act',
      },
      {
        id: 4,
        title: 'Industrial Supply Demand Application',
        description: 'An application where businesses can send their industrial product demands and manufacturers can meet these demands.',
        technologies: ['Flutter', 'Firebase'],
        imageUrl: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Project+4', // Placeholder image
        githubUrl: 'https://github.com/YavuzMuratt/supply_app',
      },
      {
        id: 5,
        title: 'Fortune Telling App',
        description: 'An application for users to play various fortune telling games.',
        technologies: ['Flutter', 'Firebase'],
        imageUrl: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Project+5', // Placeholder image
        githubUrl: 'https://github.com/YavuzMuratt',
      },
      {
        id: 6,
        title: 'ChessDL',
        description: 'A chess engine developed with Deep Learning.',
        technologies: ['Python', 'Pytorch'],
        imageUrl: 'https://via.placeholder.com/400x250/6366F1/FFFFFF?text=Project+6', // Placeholder image
        githubUrl: 'https://github.com/YavuzMuratt/ChessDL',
      },
    ]
  }
};

const Projelerim = () => {
  // Global dil context'ini kullan
  const { language } = useLanguage();
  
  // Mevcut dildeki içeriği al
  const t = content[language];

  return (
    <section id="projelerim" className="min-h-screen relative overflow-hidden">
      <Parallax 
        blur={{ min: -15, max: 15 }}
        strength={400}
        className="min-h-screen w-full"
        bgClassName="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900"
      >
        <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-purple-900/80 text-white">
          <style jsx>{`
            .project-card {
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
            }
            
            .project-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 20px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.2);
            }
            
            .project-card:hover .project-image {
              transform: scale(1.05);
              filter: brightness(1.1);
            }
            
            .project-image {
              transition: all 0.5s ease;
            }
            
            .github-button {
              transition: all 0.3s ease;
            }
            
            .github-button:hover {
              transform: translateY(-3px);
              box-shadow: 0 4px 6px -1px rgba(124, 58, 237, 0.4);
            }
            
            .shape {
              position: absolute;
              filter: blur(70px);
              opacity: 0.4;
              z-index: -1;
            }
            
            .shape-1 {
              top: 10%;
              right: 5%;
              width: 300px;
              height: 300px;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(91, 33, 182, 0) 70%);
              animation: float1 15s ease-in-out infinite alternate;
            }
            
            .shape-2 {
              bottom: 20%;
              left: 5%;
              width: 250px;
              height: 250px;
              border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
              background: radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, rgba(91, 33, 182, 0) 70%);
              animation: float2 20s ease-in-out infinite alternate-reverse;
            }
            
            @keyframes float1 {
              0% {
                transform: translate(0, 0);
              }
              100% {
                transform: translate(-30px, 30px);
              }
            }
            
            @keyframes float2 {
              0% {
                transform: translate(0, 0);
              }
              100% {
                transform: translate(30px, -30px);
              }
            }
          `}</style>
          
          {/* Gradient şekiller */}
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          
          <div className="container mx-auto relative z-10">
            <h2 className="text-3xl font-bold text-center text-purple-400 mb-12" data-aos="fade-down">
              {t.title}
            </h2>

            {/* Proje Kartları Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden flex flex-col project-card"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <div className="overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={`${project.title} Proje Görseli`} 
                      className="w-full h-48 object-cover project-image" 
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-purple-300">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
                    <div className="mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={tech} 
                          className="inline-block bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded mr-2 mb-2 transition-colors duration-300"
                          data-aos="fade-up"
                          data-aos-delay={100 * index + 50 * techIndex}
                          data-aos-anchor={`#project-${project.id}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-block bg-purple-600 hover:bg-purple-700 text-white text-center font-bold py-2 px-4 rounded transition duration-300 github-button"
                    >
                      {t.viewOnGithub}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Projelerim; 