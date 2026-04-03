import { Moon, Sun, ChevronDown, LayoutTemplate, Building, Award, GraduationCap, Home, User, Mail, Target, FileText, Phone, X, Menu, Rocket, BookOpen, Briefcase } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import DayNightToggle from './DayNightToggle'

const DOM_SECTIONS = ['Home', 'About', 'Education', 'Portfolio', 'Experience', 'Activities', 'Goals', 'Resume', 'Contact'];

export function Header({ darkMode, setDarkMode }) {
    const navLinks = ['Home', 'About', 'Contact', 'Education', 'Portfolio', 'Goals', 'Resume']
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('Home')
    const [openDropdown, setOpenDropdown] = useState(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const navigate = useNavigate()
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    useEffect(() => {
        let lastScrollY = null;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isScrolled = currentScrollY > 20;
            setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));
            
            if (!isHomePage) return;
            // Allow the very first execution to pass, then ignore tiny scroll jitters for performance
            if (lastScrollY !== null && Math.abs(currentScrollY - lastScrollY) < 10) return;
            
            lastScrollY = currentScrollY;
            
            let current = '';

            if ((window.innerHeight + currentScrollY) >= document.body.offsetHeight - 50) {
                current = 'contact';
            } else {
                const sections = DOM_SECTIONS.map(name => document.getElementById(name.toLowerCase())).filter(Boolean);
                for (const section of sections) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight * 0.3 && rect.bottom > window.innerHeight * 0.3) {
                        current = section.id;
                        break;
                    }
                }
            }
            if (current) {
                const match = DOM_SECTIONS.find(s => s.toLowerCase() === current);
                setActiveSection(prev => (match && prev !== match ? match : prev));
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Small delay on initial mount checks to let layout effects finish!
        setTimeout(handleScroll, 50);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage, location.hash]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.nav-dropdown-container')) setOpenDropdown(null);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleNav = (id, linkName) => {
        setIsMenuOpen(false);
        setActiveSection(linkName);
        
        if (!isHomePage) {
            // Pass state ephemerally without polluting the URL hash
            navigate('/', { state: { scrollTo: id } });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else if (id === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    const MobileNavItem = ({ icon, label, active, onClick }) => (
        <button
            onClick={onClick}
            className={`w-full h-8 flex items-center gap-3 px-3 rounded-[10px] transition-all duration-200 ${
                active 
                ? 'bg-neutral-900/5 dark:bg-white/10 text-neutral-950 dark:text-white font-medium' 
                : 'text-neutral-500 dark:text-white/40 hover:bg-neutral-900/5 dark:hover:bg-white/5 hover:text-neutral-950 dark:hover:text-white'
            }`}
        >
            <div className={`transition-colors duration-200 ${
                active ? 'text-neutral-950 dark:text-white' : 'text-neutral-400 dark:text-white/20'
            }`}>
                {icon}
            </div>
            <span className="text-[14px] tracking-tight whitespace-nowrap">
                {label}
            </span>
        </button>
    );

    return (
        <>
            <header 
                className={`fixed top-0 w-full z-[100] transition-[background-color,border-color,box-shadow,transform] duration-300 will-change-transform ${scrolled || isMenuOpen ? 'bg-white/95 dark:bg-zinc-900/95 border-b shadow-sm backdrop-blur-xl' : 'bg-transparent border-transparent'}`}
                style={{ transform: 'translate3d(0,0,0)' }}
            >
                <div className="container mx-auto 2xl:max-w-[1536px] px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div 
                            className="w-10 h-10 rounded-full border-[1.5px] border-gray-200 dark:border-gray-800 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex items-center justify-center bg-white dark:bg-[#1a1a1a] transition-all duration-300 hover:scale-[1.12] hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:border-gray-300 dark:hover:border-gray-700 cursor-pointer"
                            onClick={() => handleNav('home', 'Home')}
                        >
                            <img src="/basant.png" alt="Logo" className="w-[120%] h-[120%] object-cover mt-1" />
                        </div>
                        <h1 className="text-[14px] font-bold tracking-tight text-gray-900 dark:text-white leading-none">Basant's Portfolio</h1>
                    </div>

                    <nav className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => {
                            const isProjectsPage = location.pathname.startsWith('/projects')
                            const isActivitiesPage = location.pathname === '/activities'
                            const isActive = (isProjectsPage && link === 'Portfolio') || 
                                             (isActivitiesPage && link === 'Portfolio') ||
                                             (!isProjectsPage && !isActivitiesPage && (link === activeSection || (link === 'Portfolio' && (activeSection === 'Experience' || activeSection === 'Activities' || activeSection === 'Projects'))))
                            const hasDropdown = link === 'Education' || link === 'Portfolio'
                            return (
                                <div key={link} className="relative nav-dropdown-container">
                                    <div className={`text-[0.9rem] font-medium flex items-center justify-center transition-all h-8 rounded-[0.5rem] ${isActive ? 'bg-gray-200 dark:bg-[#1f232b] text-gray-900 dark:text-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-transparent/10'}`}>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (link === 'Portfolio') {
                                                    setOpenDropdown(openDropdown === 'Portfolio' ? null : 'Portfolio');
                                                } else {
                                                    setOpenDropdown(null);
                                                    const sectionId = link.toLowerCase();
                                                    if (!isHomePage) {
                                                        handleNav(sectionId, link);
                                                    } else {
                                                        setActiveSection(link);
                                                        const element = document.getElementById(sectionId);
                                                        if (element) {
                                                            element.scrollIntoView({ behavior: 'smooth' });
                                                        } else if (sectionId === 'home') {
                                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                                        }
                                                    }
                                                }
                                            }}
                                            className={`h-full flex items-center justify-center ${hasDropdown ? 'pl-3 pr-0.5' : 'px-3'}`}
                                        >
                                            {link}
                                        </button>
                                        {hasDropdown && (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    setOpenDropdown(openDropdown === link ? null : link);
                                                }}
                                                className="h-full pr-3 pl-0.5 flex items-center justify-center outline-none"
                                                aria-label={`Toggle ${link} menu`}
                                            >
                                                <ChevronDown size={12} className={`opacity-70 transition-transform duration-200 ${openDropdown === link && hasDropdown ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                                            </button>
                                        )}
                                    </div>

                                    {/* Dropdown Flyout for Education */}
                                    {link === 'Education' && (
                                        <div className={`absolute top-full -left-2 mt-2 w-44 rounded-xl bg-white dark:bg-[#0a0a0a] shadow-lg border border-gray-200/50 dark:border-white/10 transition-all duration-200 z-50 overflow-hidden p-1 ${openDropdown === 'Education' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}>
                                            <div className="flex flex-col">
                                                <button 
                                                    onClick={(e) => { 
                                                        e.preventDefault(); 
                                                        e.stopPropagation(); 
                                                        if (!isHomePage) {
                                                            handleNav('education', 'Education');
                                                        } else {
                                                            document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }); 
                                                            setActiveSection('Education'); 
                                                        }
                                                        setOpenDropdown(null); 
                                                    }}
                                                    className="px-3 py-2 text-[0.875rem] font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-gray-900 dark:hover:text-white flex items-center gap-2.5 transition-colors w-full text-left rounded-md"
                                                >
                                                    <GraduationCap size={16} className="opacity-70" strokeWidth={2} /> Education
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Dropdown Flyout for Portfolio */}
                                    {link === 'Portfolio' && (
                                        <div className={`absolute top-full -left-2 mt-2 w-44 rounded-xl bg-white dark:bg-[#0a0a0a] shadow-lg border border-gray-200/50 dark:border-white/10 transition-all duration-200 z-50 overflow-hidden p-1 ${openDropdown === 'Portfolio' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}>
                                            <div className="flex flex-col gap-0.5">
                                                <button 
                                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate('/projects'); setOpenDropdown(null); }}
                                                    className="px-3 py-2 text-[0.875rem] font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-gray-900 dark:hover:text-white flex items-center gap-2.5 transition-colors w-full text-left rounded-md"
                                                >
                                                    <LayoutTemplate size={16} className="opacity-70" strokeWidth={2} /> Projects
                                                </button>
                                                <button 
                                                    onClick={(e) => { 
                                                        e.preventDefault(); 
                                                        e.stopPropagation(); 
                                                        handleNav('experience', 'Experience');
                                                        setOpenDropdown(null); 
                                                    }}
                                                    className="px-3 py-2 text-[0.875rem] font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-gray-900 dark:hover:text-white flex items-center gap-2.5 transition-colors w-full text-left rounded-md"
                                                >
                                                    <Building size={16} className="opacity-70" strokeWidth={2} /> Experience
                                                </button>
                                                <button 
                                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate('/activities'); setOpenDropdown(null); }}
                                                    className="px-3 py-2 text-[0.875rem] font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-gray-900 dark:hover:text-white flex items-center gap-2.5 transition-colors w-full text-left rounded-md"
                                                >
                                                    <Award size={16} className="opacity-70" strokeWidth={2} /> Activities
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </nav>

                    <div className="flex items-center gap-3 flex-shrink-0 isolate">
                        <div className="flex items-center isolate">
                            <DayNightToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                        </div>
                        
                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white z-[60]"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Overlay - Redesigned as Slide-Down Modal */}
            <div className={`fixed inset-0 z-[90] lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                {/* Backdrop Blur Overlay */}
                <div 
                    className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xl transition-opacity duration-300" 
                    onClick={() => setIsMenuOpen(false)} 
                />
                
                {/* Slide-Down Menu Content */}
                <div className={`absolute top-0 left-0 right-0 h-auto bg-white/95 dark:bg-zinc-900/95 rounded-b-[24px] shadow-2xl backdrop-blur-xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} z-[91] overflow-hidden`}>
                    <div className="flex flex-col h-full overflow-hidden">
                        {/* Header spacer to keep Logo/Titles visible */}
                        <div className="h-[72px]" />
                        
                        {/* Scrollable Nav Content */}
                        <nav className="flex-1 overflow-y-auto p-5 pb-10 space-y-7">
                            {/* Group: MAIN */}
                            <div className="space-y-0.5">
                                <p className="text-[12px] font-semibold text-neutral-500 dark:text-white/30 tracking-wider uppercase px-3 py-1">Main</p>
                                <div className="space-y-0.5">
                                    <MobileNavItem 
                                        icon={<Home size={18} />} 
                                        label="Home" 
                                        active={activeSection === 'Home' && isHomePage} 
                                        onClick={() => handleNav('home', 'Home')} 
                                    />
                                    <MobileNavItem 
                                        icon={<User size={18} />} 
                                        label="About Me" 
                                        active={activeSection === 'About'} 
                                        onClick={() => handleNav('about', 'About')} 
                                    />
                                    <MobileNavItem 
                                        icon={<Mail size={18} />} 
                                        label="Contact" 
                                        active={activeSection === 'Contact'} 
                                        onClick={() => handleNav('contact', 'Contact')} 
                                    />
                                </div>
                            </div>

                            {/* Group: EDUCATION */}
                            <div className="space-y-0.5">
                                <p className="text-[12px] font-semibold text-neutral-500 dark:text-white/30 tracking-wider uppercase px-3 py-1">Education</p>
                                <MobileNavItem 
                                    icon={<GraduationCap size={18} />} 
                                    label="Academics" 
                                    active={activeSection === 'Education'} 
                                    onClick={() => handleNav('education', 'Education')} 
                                />
                            </div>

                            {/* Group: PORTFOLIO */}
                            <div className="space-y-0.5">
                                <p className="text-[12px] font-semibold text-neutral-500 dark:text-white/30 tracking-wider uppercase px-3 py-1">Portfolio</p>
                                <div className="space-y-0.5">
                                    <MobileNavItem 
                                        icon={<LayoutTemplate size={18} />} 
                                        label="Projects" 
                                        active={location.pathname === '/projects'} 
                                        onClick={() => { setIsMenuOpen(false); navigate('/projects'); }} 
                                    />
                                    <MobileNavItem 
                                        icon={<Briefcase size={18} />} 
                                        label="Experience" 
                                        active={activeSection === 'Experience'} 
                                        onClick={() => handleNav('experience', 'Experience')} 
                                    />
                                    <MobileNavItem 
                                        icon={<Award size={18} />} 
                                        label="Activities" 
                                        active={location.pathname === '/activities'} 
                                        onClick={() => { setIsMenuOpen(false); navigate('/activities'); }} 
                                    />
                                </div>
                            </div>

                            {/* Group: PROFESSIONAL */}
                            <div className="space-y-0.5">
                                <p className="text-[12px] font-semibold text-neutral-500 dark:text-white/30 tracking-wider uppercase px-3 py-1">Professional</p>
                                <div className="space-y-0.5">
                                    <MobileNavItem 
                                        icon={<Target size={18} />} 
                                        label="Career Goals" 
                                        active={activeSection === 'Goals'} 
                                        onClick={() => handleNav('goals', 'Goals')} 
                                    />
                                    <MobileNavItem 
                                        icon={<FileText size={18} />} 
                                        label="Resume" 
                                        active={activeSection === 'Resume'} 
                                        onClick={() => handleNav('resume', 'Resume')} 
                                    />
                                </div>
                            </div>
                        </nav>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
