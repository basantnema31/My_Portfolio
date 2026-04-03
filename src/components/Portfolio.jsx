import { useState, useRef } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects as projectData } from '../data/projects';

function ProjectCard({ project }) {
    const cardRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });

        // Calculate 3D tilt (clamp angles to 0.8 degrees for highly subtle premium movement)
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -0.8; 
        const rotateY = ((x - centerX) / centerX) * 0.8;
        
        setTilt({ rotateX, rotateY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        setTilt({ rotateX: 0, rotateY: 0 });
    };

    const transformStyle = `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1})`;

    return (
        <Link 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            to={`/projects/${project.id}`} 
            className="group/card block w-full h-full focus:outline-none"
            style={{ perspective: '1000px' }}
        >
            {/* Outer Shell */}
            <div 
                className="relative rounded-xl border border-gray-200 dark:border-neutral-800 bg-white/90 dark:bg-[#121212]/90 backdrop-blur-sm overflow-hidden p-6 sm:p-8 h-full flex flex-col transition-all duration-300 hover:border-blue-500/30 dark:hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-white/5"
                style={{
                    transform: transformStyle,
                    transition: isHovered ? 'transform 0.1s cubic-bezier(0.2, 0, 0, 1)' : 'transform 0.6s cubic-bezier(0.2, 0, 0, 1)',
                    transformStyle: 'preserve-3d'
                }}
            >
                
                {/* Dark Mode Native Tracking Spotlight */}
                <div 
                    className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ease-in-out hidden dark:block"
                    style={{
                        background: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 80%)`
                    }}
                />

                {/* Light Mode Native Tracking Spotlight */}
                <div 
                    className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ease-in-out block dark:hidden"
                    style={{
                        background: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.15), transparent 80%)`
                    }}
                />

                {/* Project Image Container */}
                <div className="aspect-video relative overflow-hidden rounded-xl mb-6 shadow-sm ring-1 ring-black/5 dark:ring-white/10 z-10 bg-zinc-100 dark:bg-zinc-900">
                    <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover/card:opacity-100 transition-opacity z-10"></div>
                    {(project.imageDark && project.imageLight) ? (
                        <>
                            <img 
                                src={project.imageLight}
                                alt={project.title}
                                loading="lazy"
                                className="object-cover w-full h-full block dark:hidden"
                            />
                            <img 
                                src={project.imageDark}
                                alt={project.title}
                                loading="lazy"
                                className="object-cover w-full h-full hidden dark:block"
                            />
                        </>
                    ) : (
                        <img 
                            src={project.imageDark || project.imageLight || project.image} 
                            alt={project.title} 
                            loading="lazy"
                            className="object-cover w-full h-full"
                        />
                    )}
                </div>

                {/* Typography Content */}
                <div className="px-1 sm:px-2 text-left flex flex-col flex-1 relative z-20">
                    <h3 className="text-xl font-bold mb-3 flex items-center justify-between group-hover/card:text-blue-600 dark:group-hover/card:text-white text-gray-900 dark:text-gray-100 transition-colors duration-300">
                        {project.title}
                        <ExternalLink size={18} strokeWidth={2.5} className="opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 text-blue-500 dark:text-gray-400" />
                    </h3>
                    
                    <p className="text-gray-500 dark:text-[#a1a1aa] mb-5 text-[0.85rem] sm:text-[0.9rem] leading-relaxed flex-1 line-clamp-2 font-medium">
                        {project.description}
                    </p>
                    
                    {/* Tech Badges (Pills) */}
                    <div className="flex gap-2 flex-wrap mt-auto relative z-30">
                        {project.tech.map((tech, i) => (
                            <span 
                                key={i} 
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                className="bg-zinc-100/80 dark:bg-zinc-800/50 px-2.5 py-0.5 rounded-full text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-all duration-300 hover:bg-zinc-900 hover:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900 cursor-pointer border border-transparent dark:border-white/5 shadow-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </Link>
    );
}

export function Portfolio() {
  const [isOpen, setIsOpen] = useState(() => {
    const savedState = sessionStorage.getItem('portfolioAccordionOpen');
    return savedState === null ? true : savedState === 'true';
  });

  const handleToggle = (e) => {
    const isNowOpen = e.target.open;
    setIsOpen(isNowOpen);
    sessionStorage.setItem('portfolioAccordionOpen', isNowOpen.toString());
  };

  const projectsList = projectData;

  return (
    <section id="portfolio" className="py-20 relative z-10">
      <div className="container mx-auto 2xl:max-w-[1536px] px-4 animate-in-up delay-400">
        
        <details 
          className="group rounded-xl border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out open:shadow-lg open:border-gray-300 dark:open:border-white/20 relative overflow-hidden"
          open={isOpen}
          onToggle={handleToggle}
        >
          <summary className="flex w-full cursor-pointer list-none items-start justify-between gap-4 p-4 md:p-6 hover:bg-gray-100 dark:hover:bg-[#262626]/60 transition-all duration-200">
            <div className="flex flex-col gap-1.5">
              <h2 className="text-2xl md:text-[2rem] font-bold tracking-tight">
                  Personal Projects
              </h2>
              <p className="text-[0.9rem] md:text-[0.95rem] text-gray-500 dark:text-[#a3a3a3] transition-opacity duration-200 leading-[1.5]">
                  A showcase of my recent full-stack applications and targeted software engineering builds.
              </p>
            </div>

            <div className="mt-1 flex items-center justify-center p-2 rounded-lg transition-all duration-300 group-hover:scale-110 group-open:-rotate-180 bg-gray-200 dark:bg-white text-gray-900 dark:text-black shadow-sm">
              <ChevronDown size={20} strokeWidth={2.5} />
            </div>
            
            <style jsx="true">{`
              summary::-webkit-details-marker {
                display: none;
              }
            `}</style>
          </summary>

          <div className="px-4 pb-4 md:px-6 md:pb-6 pt-0 sm:pt-2 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8 mt-2">
                {projectsList.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
