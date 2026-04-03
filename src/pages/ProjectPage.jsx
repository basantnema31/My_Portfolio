import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Github, ExternalLink, Box, Terminal, Cpu } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';

export function ProjectPage({ darkMode }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useSEO({
    title: project ? `Project: ${project.title} | Basant Nema` : 'Project Not Found | Basant Nema',
    description: project ? project.tagline : 'The requested project could not be found.'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const mainImage = darkMode ? (project.imageDark || project.image) : (project.imageLight || project.image);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto 2xl:max-w-[1536px] px-4">
        
        {/* Navigation */}
        <div className="mb-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group py-2"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium tracking-wide border-b border-transparent group-hover:border-gray-900 dark:group-hover:border-gray-400">Back to Portfolio</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-12 xl:col-span-5 order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-500 dark:from-white dark:to-gray-500">
                {project.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
              {project.tagline}
            </p>
            
            {/* Quick Stats/Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {project.tech.slice(0, 3).map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-12 xl:col-span-7 order-1 lg:order-2">
            <div className="relative group">
              {/* Complex Background Glows */}
              <div className="absolute -inset-10 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[100px] opacity-30 dark:opacity-50 group-hover:opacity-60 dark:group-hover:opacity-100 transition duration-1000"></div>
              <div className="absolute -inset-10 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-[100px] opacity-10 dark:opacity-20 group-hover:opacity-30 dark:group-hover:opacity-40 transition duration-1000 delay-100"></div>
              
              {/* Browser Mockup Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-200 dark:border-white/10 aspect-video bg-white dark:bg-[#0a0a0a]">
                {/* Browser Header */}
                <div className="absolute top-0 w-full h-8 bg-gray-50 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 flex items-center px-4 gap-1.5 z-20 backdrop-blur-md">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-400/40 dark:bg-red-500/20"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-amber-400/40 dark:bg-amber-500/20"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/40 dark:bg-emerald-500/20"></div>
                </div>
                
                <img 
                  src={mainImage} 
                  alt={project.title}
                  className="w-full h-full object-cover pt-8"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Box className="text-blue-500" />
                About the Project
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-loose">
                {project.fullDescription}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Terminal className="text-blue-500" />
                Key Highlights
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.highlights.map((highlight, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10"
                  >
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar (Right) */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Cpu size={20} className="text-blue-500" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-bold hover:bg-black dark:hover:bg-gray-200 transition-colors shadow-lg"
                >
                  <Github size={20} />
                  View GitHub
                </a>
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-white dark:bg-transparent border-2 border-gray-200 dark:border-white/20 text-gray-900 dark:text-white rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  <ExternalLink size={20} />
                  Live Preview
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
