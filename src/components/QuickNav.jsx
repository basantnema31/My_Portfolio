import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
    { label: 'Home',          id: 'home',          number: 1 },
    { label: 'About Me',      id: 'about',         number: 2 },
    { label: 'Projects',      id: 'portfolio',     number: 3 },
    { label: 'Academics',     id: 'education',     number: 4 },
    { label: 'Activities',    id: 'activities',    number: 5 },
    { label: 'Certifications',id: 'certifications',number: 6 },
    { label: 'Career Goals',  id: 'goals',         number: 7 },
    { label: 'Learning',      id: 'learning',      number: 8 },
    { label: 'Internships',   id: 'experience',    number: 9 },
    { label: 'Blog',          id: 'blog',          number: null },
    { label: 'Research',      id: 'research',      number: null },
    { label: 'Resume',        id: 'resume',        number: null },
    { label: 'Contact',       id: 'contact',       number: null },
];

// Sections that actually exist in the DOM
const EXISTING_SECTIONS = ['home', 'about', 'portfolio', 'education', 'activities', 'goals', 'experience', 'resume', 'contact'];

export function QuickNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const panelRef = useRef(null);
    const buttonRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                setActiveSection('contact');
                return;
            }
            for (const id of EXISTING_SECTIONS) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.3 && rect.bottom > window.innerHeight * 0.3) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Keyboard: Escape closes, both Left AND Right Alt + number navigates
    useEffect(() => {
        const altState = { left: false, right: false };
        const isAltHeld = () => altState.left || altState.right;

        const handleKeyDown = (e) => {
            if (e.code === 'AltLeft')  { altState.left  = true; return; }
            if (e.code === 'AltRight') { altState.right = true; return; }

            if (e.key === 'Escape') {
                setIsOpen(false);
                return;
            }

            if (isAltHeld()) {
                const num = parseInt(e.key);
                if (!isNaN(num) && num >= 1 && num <= 9) {
                    e.preventDefault();
                    const item = NAV_ITEMS.find(i => i.number === num);
                    if (item) {
                        scrollToSection(item.id);
                        setIsOpen(false);
                    }
                }
            }
        };

        const handleKeyUp = (e) => {
            if (e.code === 'AltLeft')  altState.left  = false;
            if (e.code === 'AltRight') altState.right = false;
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    // Click outside closes panel
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                isOpen &&
                panelRef.current && !panelRef.current.contains(e.target) &&
                buttonRef.current && !buttonRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleNavClick = (id) => {
        if (!isHomePage) {
            navigate('/');
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                else if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
            setIsOpen(false);
        } else {
            const exists = document.getElementById(id);
            if (exists) {
                scrollToSection(id);
                setIsOpen(false);
            }
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2 pointer-events-none">
            {/* Panel */}
            {/* Panel — always mounted, animated by CSS transition */}
            <div
                ref={panelRef}
                className={`w-60 max-h-[55vh] overflow-y-auto rounded-xl border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] shadow-xl
                    transition-all duration-300 ease-out origin-bottom-right
                    ${isOpen
                        ? 'opacity-100 scale-100 pointer-events-auto'
                        : 'opacity-0 scale-0 pointer-events-none'
                    }`}
            >
                    {/* Header */}
                    <div className="px-3 pt-3 pb-2 border-b border-gray-100 dark:border-[#1f1f1f]">
                        <p className="text-[0.75rem] font-semibold text-gray-900 dark:text-[#fafafa] tracking-tight">Quick Navigation</p>
                        <p className="text-xs text-gray-500 dark:text-[#888] mt-0.5 leading-snug">Press Alt + (1-9) for quick access</p>
                    </div>

                    {/* Nav Items */}
                    <div className="p-1.5">
                        {NAV_ITEMS.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-md text-[0.875rem] transition-all duration-150 text-left border-l-2
                                        ${isActive
                                            ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-[#fafafa] font-semibold border-gray-900 dark:border-[#fafafa]'
                                            : 'text-gray-700 dark:text-[#d4d4d4] hover:bg-gray-50 dark:hover:bg-[#1a1a1a] hover:text-gray-900 dark:hover:text-[#fafafa] hover:translate-x-0.5 border-transparent'
                                        }`}
                                >
                                    <div className="flex items-center gap-2">
                                        {item.number ? (
                                            <span className={`text-[0.7rem] font-bold w-5 h-5 flex items-center justify-center rounded flex-shrink-0
                                                ${isActive
                                                    ? 'bg-gray-900 dark:bg-[#fafafa] text-white dark:text-[#0a0a0a]'
                                                    : 'bg-gray-100 dark:bg-[#1f1f1f] text-gray-500 dark:text-[#666]'
                                                }`}>
                                                {item.number}
                                            </span>
                                        ) : (
                                            <span className="w-5 flex-shrink-0" />
                                        )}
                                        <span className="leading-none">{item.label}</span>
                                    </div>
                                    {isActive && <ChevronRight size={12} strokeWidth={2.5} className="flex-shrink-0 text-gray-900 dark:text-[#fafafa]" />}
                                </button>
                            );
                        })}
                    </div>
            </div>

            {/* Floating Button */}
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(prev => !prev)}
                aria-label="Quick Navigation"
                className="h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 bg-gray-900 text-white dark:bg-[#fafafa] dark:text-[#0a0a0a] hover:bg-gray-800 dark:hover:bg-[#e5e5e5] pointer-events-auto"
            >
                {isOpen
                    ? <X size={22} strokeWidth={2.5} />
                    : <Menu size={22} strokeWidth={2.5} />
                }
            </button>
        </div>
    );
}

export default QuickNav;
