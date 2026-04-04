import { useState } from 'react';
import { ChevronDown, Trophy, Users } from 'lucide-react';

const coCurricularData = [
    {
        title: "Hackathon",
        level: "National",
        levelColor: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
        role: "Finalist",
        organizer: "AICTE & AISSMS",
        award: "Top 10 Finalist"
    },
    {
        title: "Technical Poster Presentation",
        level: "State",
        levelColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        role: "Presenter",
        organizer: "Tech Symposium",
        award: "Second Prize"
    },
    {
        title: "Project Expo Contest",
        level: "University",
        levelColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        role: "Winner",
        organizer: "Computer Science Department, PLGPL",
        award: "First Prize"
    }
];

const extraCurricularData = [
    {
        title: "Drama Club",
        type: "Cultural",
        typeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300",
        period: "2022-2024",
        role: "Member",
        description: "Participated in various cultural events and drama competitions",
        icon: "🎭"
    },
    {
        title: "Volleyball (Silver Medal)",
        type: "Sports",
        typeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300",
        period: "2023-2024",
        role: "Player",
        description: "Secured 2nd position in inter-school volleyball competition (Class 12th)",
        icon: "🏐"
    },
    {
        title: "Table Tennis (Gold Medal)",
        type: "Sports",
        typeColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/60 dark:text-orange-300",
        period: "2023-2024",
        role: "Player",
        description: "Secured 1st position in inter-school table tennis competition (Class 10th)",
        icon: "🏓"
    }
];

function ActivityCard({ data }) {
    return (
        <div className="rounded-xl border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-[#fafafa] shadow-sm hover:shadow-md dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.02)] transition-shadow duration-300 p-6 flex flex-col h-full bg-blend-normal">
            <div className="flex items-center justify-between mb-3">
                <span className={`px-2.5 py-0.5 rounded-full text-[0.75rem] font-semibold tracking-wide border border-transparent ${data.levelColor}`}>
                    {data.level}
                </span>
                <Trophy size={16} className="text-gray-400 dark:text-[#a3a3a3]" strokeWidth={2} />
            </div>

            <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-[#fafafa] leading-snug">
                {data.title}
            </h3>

            <div className="mt-3 space-y-2">
                <div className="flex justify-between items-center gap-2">
                    <span className="text-[0.8rem] sm:text-[0.875rem] text-gray-900 dark:text-[#fafafa] font-medium tracking-tight">Role:</span>
                    <span className="text-[0.7rem] sm:text-[0.75rem] font-medium border border-gray-200 dark:border-[#262626] rounded-full px-2.5 py-0.5 text-gray-900 dark:text-[#fafafa] bg-transparent whitespace-nowrap">
                        {data.role}
                    </span>
                </div>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <span className="text-[0.8rem] sm:text-[0.875rem] text-gray-900 dark:text-[#fafafa] font-medium tracking-tight">Organizer:</span>
                    <span className="text-[0.75rem] sm:text-[0.875rem] text-right text-gray-600 dark:text-[#a3a3a3] truncate">
                        {data.organizer}
                    </span>
                </div>

                <div className="flex justify-between items-center gap-2">
                    <span className="text-[0.8rem] sm:text-[0.875rem] text-gray-900 dark:text-[#fafafa] font-medium tracking-tight">Award:</span>
                    <span className="text-[0.7rem] sm:text-[0.75rem] font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-100 dark:text-yellow-800 rounded-full px-2.5 py-0.5 whitespace-nowrap border border-transparent">
                        {data.award}
                    </span>
                </div>
            </div>
        </div>
    );
}

function ExtraCurricularCard({ data }) {
    return (
        <div className="rounded-xl border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-[#fafafa] shadow-sm hover:shadow-md dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.02)] transition-shadow duration-300 p-6 flex flex-col h-full bg-blend-normal">
            <div className="flex items-center justify-between mb-4">
                <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[0.75rem] font-semibold tracking-wide border border-transparent ${data.typeColor}`}>
                    <span className="text-sm leading-none">{data.icon}</span>
                    <span>{data.type}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[0.75rem] font-medium tracking-wide border border-gray-200 dark:border-[#262626] text-gray-900 dark:text-[#fafafa] bg-transparent">
                    {data.period}
                </span>
            </div>

            <h3 className="text-lg font-semibold tracking-tight mt-2 text-gray-900 dark:text-[#fafafa] leading-snug">
                {data.title}
            </h3>

            <div className="mt-2 mb-4 flex items-center">
                <span className="text-[0.7rem] font-medium border border-gray-200 dark:border-[#262626] rounded-full px-2.5 py-0.5 text-gray-900 dark:text-[#fafafa] bg-transparent">
                    {data.role}
                </span>
            </div>

            <p className="text-[0.875rem] text-gray-500 dark:text-[#a3a3a3] leading-relaxed">
                {data.description}
            </p>
        </div>
    );
}

export function Activities() {
    const [isOpen, setIsOpen] = useState(() => {
        const savedState = sessionStorage.getItem('activitiesAccordionOpen');
        return savedState === null ? true : savedState === 'true';
    });

    const [activeTab, setActiveTab] = useState('cocurricular');

    const handleToggle = (e) => {
        const isNowOpen = e.target.open;
        setIsOpen(isNowOpen);
        sessionStorage.setItem('activitiesAccordionOpen', isNowOpen.toString());
    };

    return (
        <section id="activities" className="py-20 relative z-10">
            <div className="container mx-auto 2xl:max-w-[1536px] px-4 animate-in-up delay-700">
                <details
                    className="group/accordion rounded-xl border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] shadow-sm transition-all duration-300 ease-out open:shadow-lg open:border-gray-300 dark:open:border-white/20 relative overflow-hidden"
                    open={isOpen}
                    onToggle={handleToggle}
                >
                    <summary className="flex w-full cursor-pointer list-none items-start justify-between gap-4 p-4 md:p-6 hover:bg-gray-100 dark:hover:bg-[#262626]/60 transition-all duration-200">
                        <div className="flex flex-col gap-1.5 focus:outline-none">
                            <h2 className="text-2xl md:text-[2rem] font-bold tracking-tight text-gray-900 dark:text-gray-100">
                                Leadership & Extracurricular Activities
                            </h2>
                            <p className="text-[0.9rem] md:text-[0.95rem] text-gray-500 dark:text-[#a3a3a3] transition-opacity duration-200 leading-[1.5]">
                                Beyond academics - competitions, leadership roles, and community involvement
                            </p>
                        </div>

                        <div className="mt-1 flex items-center justify-center p-2 rounded-[0.4rem] transition-all duration-300 group-hover/accordion:scale-110 group-open/accordion:-rotate-180 bg-gray-200 dark:bg-white text-gray-900 dark:text-black shadow-sm flex-shrink-0">
                            <ChevronDown size={20} strokeWidth={2.5} />
                        </div>

                        <style jsx="true">{`
                            summary::-webkit-details-marker {
                                display: none;
                            }
                        `}</style>
                    </summary>

                    <div className="px-4 pb-4 md:px-6 md:pb-6 pt-0 sm:pt-2 animate-in fade-in slide-in-from-top-4 duration-500">

                        {/* Tabs Container */}
                        <div className="w-full mb-8 mt-2">
                            <div className="grid grid-cols-2 h-10 items-center justify-center rounded-[0.55rem] bg-gray-100 dark:bg-[#121212] p-1 w-full border border-transparent dark:border-[#262626] border-solid transition-all duration-300">
                                <button
                                    onClick={(e) => { e.preventDefault(); setActiveTab('cocurricular'); }}
                                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-[0.4rem] px-2 sm:px-3 py-1.5 text-[11px] xs:text-[13px] sm:text-sm font-medium transition-all duration-200 gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-[#404040] ${activeTab === 'cocurricular' ? 'bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-black/5 dark:ring-[#262626]' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}`}
                                >
                                    <Trophy size={14} className="sm:w-4 sm:h-4" strokeWidth={2} /> Co-curricular
                                </button>
                                <button
                                    onClick={(e) => { e.preventDefault(); setActiveTab('extracurricular'); }}
                                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-[0.4rem] px-2 sm:px-3 py-1.5 text-[11px] xs:text-[13px] sm:text-sm font-medium transition-all duration-200 gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-[#404040] ${activeTab === 'extracurricular' ? 'bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-black/5 dark:ring-[#262626]' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}`}
                                >
                                    <Users size={14} className="sm:w-4 sm:h-4" strokeWidth={2} /> Extra-curricular
                                </button>
                            </div>
                        </div>

                        {/* Co-curricular Tab Panel */}
                        {activeTab === 'cocurricular' && (
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                                {coCurricularData.map((data, index) => (
                                    <ActivityCard key={index} data={data} />
                                ))}
                            </div>
                        )}

                        {/* Extra-curricular Tab Panel */}
                        {activeTab === 'extracurricular' && (
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                                {extraCurricularData.map((data, index) => (
                                    <ExtraCurricularCard key={index} data={data} />
                                ))}
                            </div>
                        )}

                    </div>
                </details>
            </div>
        </section>
    );
}
