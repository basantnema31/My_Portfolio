import React, { useState, useEffect, useRef } from 'react';
import { Target, Lightbulb, Clock, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

const shortTermGoals = [
    {
        title: "Software Engineer at Tech Company",
        period: "6-12 months",
        description: "Secure a position as a software engineer at a leading technology company to gain industry experience and work on scalable applications.",
        colorScheme: "blue"
    },
    {
        title: "Master Cloud Technologies",
        period: "12 months",
        description: "Become proficient in cloud platforms like AWS, Azure, and GCP to build and deploy cloud-native applications.",
        colorScheme: "blue"
    },
    {
        title: "JAVA and Spring Boot Developer",
        period: "6-12 months",
        description: "Specialize in Java and Spring Boot development to create robust and efficient backend systems for web applications.",
        colorScheme: "blue"
    }
];

const longTermGoals = [
    {
        title: "Technical Lead/Architect",
        period: "3-5 years",
        description: "Progress to a technical leadership role where I can guide development teams and make architectural decisions for large-scale systems.",
        colorScheme: "green"
    },
    {
        title: "Contribute to Open Source",
        period: "2-5 years",
        description: "Actively contribute to major open-source projects and potentially maintain my own widely-used libraries or frameworks.",
        colorScheme: "green"
    },
    {
        title: "AI and LLM Development",
        period: "3-5 years",
        description: "Specialize in artificial intelligence and large language models to develop innovative solutions that leverage AI for real-world applications.",
        colorScheme: "green"
    }
];

const areasOfInterest = [
    {
        title: "Artificial Intelligence & Machine Learning",
        description: "Developing intelligent systems that can learn and make decisions",
        skills: ["Python", "TensorFlow", "PyTorch", "Data Science", "Deep Learning"]
    },
    {
        title: "Full-Stack Web Development",
        description: "Building end-to-end web applications with modern technologies",
        skills: ["React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"]
    },
    {
        title: "Cloud Computing & DevOps",
        description: "Designing and managing scalable cloud infrastructure",
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
        title: "Mobile App Development",
        description: "Creating cross-platform mobile applications",
        skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"]
    }
];

function GoalCard({ data }) {
    const isBlue = data.colorScheme === 'blue';
    const borderClass = isBlue ? "border-l-blue-500 dark:border-l-blue-500 border-l-[4px]" : "border-l-green-500 dark:border-l-green-500 border-l-[4px]";
    const pillClass = isBlue ? "bg-blue-100 text-blue-800 dark:bg-blue-500/10 dark:text-blue-400" : "bg-green-100 text-green-800 dark:bg-green-500/10 dark:text-green-400";

    return (
        <div className={`rounded-xl border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] p-6 shadow-sm hover:shadow-md transition-all duration-300 dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.02)] ${borderClass}`}>
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-[#fafafa] leading-snug pe-4">
                    {data.title}
                </h3>
                <span className={`px-2.5 py-0.5 rounded-full text-[0.75rem] font-semibold tracking-wide whitespace-nowrap ${pillClass}`}>
                    {data.period}
                </span>
            </div>
            <p className="text-[0.875rem] text-gray-500 dark:text-[#a3a3a3] leading-relaxed">
                {data.description}
            </p>
        </div>
    );
}

function InterestCard({ data }) {
    return (
        <div className="rounded-xl border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] p-6 shadow-sm hover:shadow-md transition-all duration-300 dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.02)]">
            <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-[#fafafa] mb-1.5 leading-snug">
                {data.title}
            </h3>
            <p className="text-[0.875rem] text-gray-500 dark:text-[#a3a3a3] leading-relaxed mb-4">
                {data.description}
            </p>
            <div>
                <span className="text-[0.875rem] font-semibold text-gray-900 dark:text-[#fafafa] block mb-2 mt-2">Related Skills:</span>
                <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, index) => (
                        <span key={index} className="text-[0.75rem] font-medium border border-gray-200 dark:border-[#262626] rounded-full px-2.5 py-0.5 text-gray-900 dark:text-[#fafafa] bg-transparent">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function Goals() {
    const [isOpen, setIsOpen] = useState(() => {
        const savedState = sessionStorage.getItem('goalsAccordionOpen');
        return savedState ? JSON.parse(savedState) : true;
    });

    const [activeTab, setActiveTab] = useState('short-term');
    const contentRef = useRef(null);

    useEffect(() => {
        sessionStorage.setItem('goalsAccordionOpen', JSON.stringify(isOpen));
    }, [isOpen]);

    return (
        <section id="goals" className="py-20 relative z-10">
            <div className="container mx-auto 2xl:max-w-[1536px] px-4 animate-in-up delay-800">
                {/* Accordion Wrapper */}
                <div className="border border-gray-200 dark:border-white/20 rounded-2xl bg-white dark:bg-[#0a0a0a] overflow-hidden shadow-sm transition-shadow duration-300 group">
                    {/* Header Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between p-4 md:p-6 cursor-pointer group hover:bg-gray-100 dark:hover:bg-[#262626]/60 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-700"
                    >
                        <div className="text-left max-w-3xl">
                            <h2 className="text-2xl md:text-[2rem] font-bold tracking-tight text-gray-900 dark:text-[#fafafa] transition-colors mb-2">
                                Career Objectives & Professional Goals
                            </h2>
                            <p className="text-[0.95rem] md:text-base text-gray-500 dark:text-[#a3a3a3] font-medium leading-relaxed">
                                My professional aspirations and areas of interest for continuous growth
                            </p>
                        </div>
                        <div className={`mt-1 flex items-center justify-center p-2 rounded-[0.4rem] transition-all duration-300 group-hover:scale-110 bg-gray-200 dark:bg-white text-gray-900 dark:text-black shadow-sm flex-shrink-0 ${isOpen ? '-rotate-180' : ''}`}>
                            <ChevronDown size={20} strokeWidth={2.5} />
                        </div>
                    </button>

                    {/* Accordion Content */}
                    <div
                        ref={contentRef}
                        className={`${isOpen ? 'block' : 'hidden'}`}
                    >
                        <div className="px-4 pb-4 md:px-6 md:pb-6 pt-0">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-2">

                                {/* Left Column: Career Goals */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 mb-6 text-gray-900 dark:text-[#fafafa]">
                                        <Target size={24} strokeWidth={2.5} />
                                        <h3 className="text-[1.5rem] font-bold tracking-tight">Career Goals</h3>
                                    </div>

                                    {/* Tabs Container */}
                                    <div className="w-full mb-6">
                                        <div className="grid grid-cols-2 h-10 items-center justify-center rounded-[0.55rem] bg-gray-100 dark:bg-[#262626] p-1 w-full border border-transparent dark:border-[#262626] border-solid">
                                            <button
                                                onClick={(e) => { e.preventDefault(); setActiveTab('short-term'); }}
                                                className={`inline-flex items-center justify-center whitespace-nowrap rounded-[0.4rem] px-3 py-1.5 text-sm font-medium transition-all duration-200 gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-[#404040] ${activeTab === 'short-term' ? 'bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-[#fafafa] shadow-sm ring-1 ring-black/5 dark:ring-[#262626]' : 'text-gray-500 dark:text-[#a3a3a3] hover:text-gray-900 dark:hover:text-[#fafafa]'}`}
                                            >
                                                <Clock size={16} strokeWidth={2} /> Short-term
                                            </button>
                                            <button
                                                onClick={(e) => { e.preventDefault(); setActiveTab('long-term'); }}
                                                className={`inline-flex items-center justify-center whitespace-nowrap rounded-[0.4rem] px-3 py-1.5 text-sm font-medium transition-all duration-200 gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-[#404040] ${activeTab === 'long-term' ? 'bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-[#fafafa] shadow-sm ring-1 ring-black/5 dark:ring-[#262626]' : 'text-gray-500 dark:text-[#a3a3a3] hover:text-gray-900 dark:hover:text-[#fafafa]'}`}
                                            >
                                                <TrendingUp size={16} strokeWidth={2} /> Long-term
                                            </button>
                                        </div>
                                    </div>

                                    {/* Short-Term Tab Content */}
                                    {activeTab === 'short-term' && (
                                        <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-500">
                                            {shortTermGoals.map((goal, idx) => (
                                                <GoalCard key={idx} data={goal} />
                                            ))}
                                        </div>
                                    )}

                                    {/* Long-Term Tab Content */}
                                    {activeTab === 'long-term' && (
                                        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                                            {longTermGoals.map((goal, idx) => (
                                                <GoalCard key={idx} data={goal} />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Right Column: Areas of Interest */}
                                <div>
                                    <div className="flex items-center gap-2 mb-6 text-gray-900 dark:text-[#fafafa]">
                                        <Lightbulb size={24} strokeWidth={2.5} />
                                        <h3 className="text-[1.5rem] font-bold tracking-tight">Areas of Interest</h3>
                                    </div>
                                    <div className="space-y-4">
                                        {areasOfInterest.map((interest, idx) => (
                                            <InterestCard key={idx} data={interest} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Future Learning Plans */}
                            <div className="mt-8 md:mt-10 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#161616] p-6 md:p-8 shadow-sm dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.02)] transition-shadow duration-300">
                                <h3 className="text-center text-[0.95rem] font-bold text-gray-900 dark:text-[#fafafa] mb-6 tracking-tight">Future Learning Plans</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                    <div className="flex flex-col items-center text-center space-y-2">
                                        <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-gray-900 dark:text-[#fafafa] mb-1 transition-colors">
                                            <Target size={22} strokeWidth={2.5} />
                                        </div>
                                        <h4 className="font-bold text-[0.95rem] text-gray-900 dark:text-[#fafafa]">Continuous Learning</h4>
                                        <p className="text-[0.85rem] text-gray-500 dark:text-[#a3a3a3] leading-relaxed">Stay updated with latest technologies and industry trends</p>
                                    </div>
                                    <div className="flex flex-col items-center text-center space-y-2">
                                        <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-gray-900 dark:text-[#fafafa] mb-1 transition-colors">
                                            <Lightbulb size={22} strokeWidth={2.5} />
                                        </div>
                                        <h4 className="font-bold text-[0.95rem] text-gray-900 dark:text-[#fafafa]">Skill Development</h4>
                                        <p className="text-[0.85rem] text-gray-500 dark:text-[#a3a3a3] leading-relaxed">Focus on both technical and soft skills enhancement</p>
                                    </div>
                                    <div className="flex flex-col items-center text-center space-y-2">
                                        <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-gray-900 dark:text-[#fafafa] mb-1 transition-colors">
                                            <TrendingUp size={22} strokeWidth={2.5} />
                                        </div>
                                        <h4 className="font-bold text-[0.95rem] text-gray-900 dark:text-[#fafafa]">Career Growth</h4>
                                        <p className="text-[0.85rem] text-gray-500 dark:text-[#a3a3a3] leading-relaxed">Progress towards leadership and technical expertise roles</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Goals;
