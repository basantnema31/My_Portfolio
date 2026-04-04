import { useState, useMemo, useRef } from 'react'
import { Search, Calendar, MapPin, Code, Users, Trophy, Dumbbell, Award } from 'lucide-react'
import { Footer } from '../components/Footer'

// Activity Card Component matching the reference EXACTLY
function ActivityCard({ activity }) {
    const cardRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    // Category colors mapping
    const categoryStyles = {
        'National': 'bg-red-500/10 text-red-500 border-red-500/20',
        'International': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
        'Social': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
        'University': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
        'State': 'bg-amber-500/10 text-amber-500 border-amber-500/20',
        'Tech Community': 'bg-zinc-500/10 text-zinc-500 border-zinc-500/20'
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="group/card relative rounded-[1rem] border border-gray-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] overflow-hidden p-6 flex flex-col hover:border-gray-300 dark:hover:border-neutral-700 transition-all duration-300"
        >
            {/* Spotlights */}
            <div 
                className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ease-in-out hidden dark:block"
                style={{ background: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.05), transparent 80%)` }}
            />
            <div 
                className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ease-in-out block dark:hidden"
                style={{ background: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.03), transparent 80%)` }}
            />

            {/* Top Bar: Category and Type Icon */}
            <div className="flex justify-between items-center mb-4 relative z-10">
                <span className={`px-2.5 py-0.5 rounded-md text-[0.7rem] font-bold border ${categoryStyles[activity.type] || categoryStyles['National']}`}>
                    {activity.type}
                </span>
                <div className="text-gray-400 dark:text-zinc-500 opacity-60">
                    {activity.category === 'Hackathons' && <Code size={14} />}
                    {activity.category === 'Meetups' && <Users size={14} />}
                    {activity.category === 'Competitions' && <Trophy size={14} />}
                    {activity.category === 'Extracurricular' && <Dumbbell size={14} />}
                </div>
            </div>

            {/* Title & Summary */}
            <div className="mb-4 relative z-10">
                <h3 className="text-lg font-bold text-gray-900 dark:text-zinc-100 mb-2 leading-tight">
                    {activity.title}
                </h3>
                <p className="text-gray-500 dark:text-zinc-400 text-[0.85rem] leading-relaxed line-clamp-2">
                    {activity.description}
                </p>
            </div>

            {/* Metadata Fields */}
            <div className="space-y-2.5 mb-5 relative z-10">
                <div className="flex items-center gap-2 text-[0.8rem] text-gray-500 dark:text-zinc-400 font-medium">
                    <Calendar size={14} className="opacity-70" />
                    <span className="truncate">{activity.date}</span>
                </div>
                <div className="flex items-center gap-2 text-[0.8rem] text-gray-500 dark:text-zinc-400 font-medium">
                    <MapPin size={14} className="opacity-70" />
                    <span className="truncate">{activity.location}</span>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center pt-1 border-t border-gray-100 dark:border-zinc-800/50 mt-1 gap-2">
                    <span className="text-[0.75rem] sm:text-[0.8rem] font-bold text-gray-800 dark:text-zinc-200 whitespace-nowrap">Organizer:</span>
                    <span className="text-[0.7rem] sm:text-[0.75rem] text-gray-500 dark:text-zinc-400 font-medium truncate text-right">{activity.organizer}</span>
                </div>
            </div>

            {/* Achievement Badge */}
            {activity.achievement && (
                <div className="mb-4 relative z-10">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-500 text-[0.7rem] font-bold border border-amber-500/20">
                        {activity.achievement}
                    </div>
                </div>
            )}

            {/* Tech Tags */}
            {activity.tags && (
                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                    {activity.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full bg-gray-50 dark:bg-zinc-800/50 text-[0.65rem] font-medium text-gray-500 dark:text-zinc-400 border border-gray-100 dark:border-zinc-700/50">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

const activities = [
    {
        title: "AICTE Hackathon 2024",
        description: "National level hackathon focused on innovative tech solutions for urban waste management using AI and IoT.",
        achievement: "Top 10 Finalist",
        type: "National",
        category: "Hackathons",
        date: "Sept 2024",
        organizer: "AICTE & AISSMS",
        location: "AISSMS, Pune",
        tags: ["React", "Node.js", "AI/ML"]
    },
    {
        title: "Stellar Blockchain Hackathon",
        description: "Built StellarScholar - A Web3 Learn2Earn platform on Stellar blockchain for cross-border education access.",
        achievement: "International Participant",
        type: "International",
        category: "Hackathons",
        date: "2024",
        organizer: "Stellar Development Foundation",
        location: "Online",
        tags: ["Stellar", "React", "Rust", "Supabase"]
    },
    {
        title: "Hacktoberfest 2024",
        description: "Contributed to open source projects and built LegaliTeaAI - a natural language processor for legal docs.",
        achievement: null,
        type: "International",
        category: "Hackathons",
        date: "October 2024",
        organizer: "DigitalOcean",
        location: "Online",
        tags: ["TypeScript", "React", "AI/ML"]
    },
    {
        title: "GDG Pune Tech Talk",
        description: "Engaged in deep-dive sessions regarding Google Cloud and Flutter development at the Google Developer Group meetup.",
        achievement: "Active Community Member",
        type: "Tech Community",
        category: "Meetups",
        date: "2023 - 2024",
        organizer: "Google Developers Group",
        location: "Google Pune Office",
        tags: ["Google Cloud", "Community"]
    },
    {
        title: "Project Expo Contest",
        description: "Showcased a Smart Agriculture system utilizing machine learning for crop yield prediction.",
        achievement: "First Prize Winner",
        type: "University",
        category: "Competitions",
        date: "2024",
        organizer: "SPPU University",
        location: "Campus",
        tags: ["Python", "IoT", "ML"]
    },
    {
        title: "Drama Club Coordinator",
        description: "Organized and performed in multiple stage plays focusing on social awareness and cultural history.",
        achievement: "Cultural Excellence",
        type: "State",
        category: "Extracurricular",
        date: "2022 - 2024",
        organizer: "Cultural Club",
        location: "Regional Campus",
        tags: ["Leadership", "Arts"]
    }
];

export function ActivitiesPage() {
    const [search, setSearch] = useState('')
    const [activeCategory, setActiveCategory] = useState('Hackathons')

    const categoryConfig = [
        { label: 'Hackathons', icon: <Code size={13} /> },
        { label: 'Meetups', icon: <Users size={13} /> },
        { label: 'Competitions', icon: <Trophy size={13} /> },
        { label: 'Extracurricular', icon: <Dumbbell size={13} /> }
    ];

    const filtered = useMemo(() => {
        return activities.filter(a => {
            const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
                a.description.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = a.category === activeCategory;
            return matchesSearch && matchesCategory;
        })
    }, [search, activeCategory])

    return (
        <div className="min-h-screen pt-20 flex flex-col">
            <div className="flex-1 pb-16">
                {/* Page Header */}
                <div className="container mx-auto 2xl:max-w-[1536px] px-4 pt-12 pb-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Activities & Events
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light">
                        Beyond academics - hackathons, meetups, competitions, leadership roles, and community involvement
                    </p>
                </div>

                {/* Search Bar */}
                <div className="container mx-auto 2xl:max-w-[1536px] px-4 mb-10">
                    <div className="relative max-w-[600px] mx-auto">
                        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500 pointer-events-none" strokeWidth={2.5} />
                        <input
                            type="text"
                            placeholder="Search activities..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-[#fafafa] text-[0.9rem] placeholder:text-gray-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-[#404040] transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Filter Tabs Bar */}
                <div className="container mx-auto 2xl:max-w-[1536px] px-4 mb-12">
                    <div className="max-w-[1000px] mx-auto overflow-x-auto no-scrollbar rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 p-1 flex items-stretch gap-1">
                        {categoryConfig.map(config => (
                            <button
                                key={config.label}
                                onClick={() => setActiveCategory(config.label)}
                                className={`flex-1 min-w-max py-2 px-3 sm:px-4 rounded-lg text-[11px] xs:text-[13px] sm:text-sm font-semibold flex items-center justify-center gap-1.5 sm:gap-2.5 transition-all duration-300 ${
                                    activeCategory === config.label
                                        ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                            >
                                <span className={activeCategory === config.label ? 'opacity-100' : 'opacity-60'}>{config.icon}</span>
                                {config.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Count */}
                <div className="container mx-auto 2xl:max-w-[1536px] px-4 mb-8 text-center">
                    <p className="text-xs font-bold text-gray-400 dark:text-zinc-600 uppercase tracking-[0.2em]">
                        Showing {filtered.length} of {activities.filter(a => a.category === activeCategory).length} {activeCategory}
                    </p>
                </div>

                {/* Activities Grid */}
                <div className="container mx-auto 2xl:max-w-[1536px] px-4">
                    {filtered.length === 0 ? (
                        <div className="text-center py-20 text-gray-400 dark:text-zinc-600">
                            <Search size={48} className="mx-auto mb-4 opacity-20" />
                            <p className="text-xl font-bold">No {activeCategory} matches</p>
                            <p className="text-sm mt-2 opacity-60">Try adjusting your search terms</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((activity, index) => (
                                <ActivityCard key={index} activity={activity} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}
