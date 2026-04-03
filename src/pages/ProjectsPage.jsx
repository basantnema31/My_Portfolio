import { useState, useMemo, useRef } from 'react'
import { Search, Filter, ExternalLink } from 'lucide-react'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { projects as projectData } from '../data/projects'

// === Exact same ProjectCard as Portfolio.jsx (with mouse spotlight) ===
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

        // Calculate 3D tilt
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
                className="relative rounded-[1.5rem] border border-gray-200 dark:border-neutral-800 bg-white dark:bg-[#121212] overflow-hidden p-6 sm:p-8 h-full flex flex-col transition-colors duration-300 hover:border-gray-300 dark:hover:border-neutral-700 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-white/5"
                style={{
                    transform: transformStyle,
                    transition: isHovered ? 'transform 0.1s cubic-bezier(0.2, 0, 0, 1)' : 'transform 0.6s cubic-bezier(0.2, 0, 0, 1)',
                    transformStyle: 'preserve-3d'
                }}
            >

                {/* Dark Mode Spotlight */}
                <div
                    className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ease-in-out hidden dark:block"
                    style={{
                        background: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 80%)`
                    }}
                />

                {/* Light Mode Spotlight */}
                <div
                    className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ease-in-out block dark:hidden"
                    style={{
                        background: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.15), transparent 80%)`
                    }}
                />

                {/* Thumbnail Image */}
                <div className="aspect-video relative overflow-hidden rounded-xl mb-6 shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300 z-10">
                    <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover/card:opacity-100 transition-opacity z-10"></div>
                    <div className="overflow-hidden w-full h-full">
                        {(project.imageDark && project.imageLight) ? (
                            <>
                                <img src={project.imageLight} alt={project.title} loading="lazy" className="object-cover w-full h-full block dark:hidden" />
                                <img src={project.imageDark} alt={project.title} loading="lazy" className="object-cover w-full h-full hidden dark:block" />
                            </>
                        ) : (
                            <img src={project.imageDark || project.imageLight || project.image} alt={project.title} loading="lazy" className="object-cover w-full h-full" />
                        )}
                    </div>
                </div>

                {/* Text Content */}
                <div className="px-1 sm:px-2 text-left flex flex-col flex-1 relative z-20">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 group-hover/card:text-black dark:group-hover/card:text-white text-gray-900 dark:text-gray-100 transition-colors duration-300">
                        {project.title}
                        <ExternalLink size={16} strokeWidth={2.5} className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 text-gray-500 dark:text-gray-400" />
                    </h3>

                    <p className="text-gray-500 dark:text-[#a1a1aa] mb-5 text-[0.85rem] sm:text-[0.9rem] leading-relaxed flex-1 line-clamp-2">
                        {project.description}
                    </p>

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

const projectsList = projectData;

export function ProjectsPage() {
    useSEO({
        title: 'Basant Nema | Portfolio Projects',
        description: 'Explore the diverse portfolio of projects by Basant Nema, ranging from Face Mask Detection to Cloud-based applications.'
    });
    const [search, setSearch] = useState('')
    const [activeTag, setActiveTag] = useState('All')

    const allTags = useMemo(() => {
        const tags = new Set()
        projectsList.forEach(p => p.tech.forEach(t => tags.add(t)))
        return ['All', ...Array.from(tags).sort()]
    }, [])

    const filtered = useMemo(() => {
        return projectsList.filter(p => {
            const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                p.description.toLowerCase().includes(search.toLowerCase())
            const matchesTag = activeTag === 'All' || p.tech.includes(activeTag)
            return matchesSearch && matchesTag
        })
    }, [search, activeTag])

    return (
        <>
            <div className="min-h-[calc(100vh-3rem)] pt-20 pb-16">
            {/* Page Header */}
            <div className="container mx-auto 2xl:max-w-[1536px] px-4 pt-12 pb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    My Projects
                </h1>
                <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    A collection of my work spanning web development, cloud computing, and more.<br />
                    Each project represents a unique challenge and learning experience.
                </p>
            </div>

            {/* Search Bar */}
            <div className="container mx-auto 2xl:max-w-[1536px] px-4 mb-6">
                <div className="relative max-w-md mx-auto">
                    <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#a3a3a3] pointer-events-none" strokeWidth={2} />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-[#fafafa] text-sm placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-[#404040] transition-all shadow-sm"
                    />
                </div>
            </div>

            {/* Tech Filter Tags */}
            <div className="container mx-auto 2xl:max-w-[1536px] px-4 mb-6">
                <div className="flex flex-wrap gap-2 justify-center items-center">
                    <Filter size={15} className="text-gray-400 dark:text-[#a3a3a3] flex-shrink-0" strokeWidth={2} />
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(tag)}
                            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 ${
                                activeTag === tag
                                    ? 'bg-gray-900 text-white border-gray-900 dark:bg-[#fafafa] dark:text-[#171717] dark:border-[#fafafa]'
                                    : 'bg-white dark:bg-transparent text-gray-700 dark:text-zinc-400 border-gray-200 dark:border-zinc-700 hover:border-gray-500 dark:hover:border-zinc-400 hover:text-gray-900 dark:hover:text-zinc-100'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Count */}
            <div className="container mx-auto 2xl:max-w-[1536px] px-4 mb-6 text-center">
                <p className="text-sm text-gray-500 dark:text-zinc-400">
                    Showing {filtered.length} of {projectsList.length} projects
                </p>
            </div>

            {/* Projects Grid */}
            <div className="container mx-auto 2xl:max-w-[1536px] px-4">
                {filtered.length === 0 ? (
                    <div className="text-center py-20 text-gray-400 dark:text-[#a3a3a3]">
                        <Search size={40} className="mx-auto mb-4 opacity-30" />
                        <p className="text-lg font-medium">No projects found</p>
                        <p className="text-sm mt-1">Try a different search or filter</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {filtered.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                )}
            </div>
            </div>
            <Footer />
        </>
    )
}
