import { useState } from 'react';
import { ChevronDown, Building, Wrench, Lightbulb } from 'lucide-react';

export function Experience() {
  const [isOpen, setIsOpen] = useState(() => {
    const savedState = sessionStorage.getItem('experienceAccordionOpen');
    return savedState === null ? true : savedState === 'true';
  });

  const handleToggle = (e) => {
    const isNowOpen = e.target.open;
    setIsOpen(isNowOpen);
    sessionStorage.setItem('experienceAccordionOpen', isNowOpen.toString());
  };

  const experiences = [
    {
      company: "Unified Mentor Private Limited",
      duration: "1 month",
      role: "MERN Stack Developer Intern",
      description: "Worked on building a web application that connects students with teachers, allowing users to sign up, create profiles, and schedule mentoring sessions & appointments.",
      tools: ["MongoDB", "Express.js", "React", "Node.js"],
      outcome: "Developed a full-stack web application and gained hands-on experience with the MERN stack"
    },
    {
      company: "Shivohini Tech LLP",
      duration: "6 months",
      role: "AI Application Developer Intern",
      description: "Worked on building an AI application that leverages machine learning algorithms to provide personalized recommendations.",
      tools: ["Python", "TensorFlow", "Google ADK", "Gemini API"],
      outcome: "Developed an AI application and gained hands-on experience with machine learning frameworks"
    },
    {
      company: "MoreX Technologies",
      duration: "1 month",
      role: "Technical Lead & DB Designer",
      description: "Production-ready paint manufacturing ERP with modular feature-based architecture.",
      tools: ["PostgreSQL", "Express.js", "React.js", "Node.js", "Drizzle ORM", "VPS Deployment"],
      outcome: "Collaborated and Led to 8 Members Team"
    }
  ];

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="container mx-auto 2xl:max-w-[1536px] px-4 animate-in-up delay-500">
        
        {/* Accordion Container */}
        <details 
          className="group rounded-xl border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out open:shadow-lg open:border-gray-300 dark:open:border-white/20 relative overflow-hidden"
          open={isOpen}
          onToggle={handleToggle}
        >
          {/* Summary Trigger */}
          <summary className="flex w-full cursor-pointer list-none items-start justify-between gap-4 p-4 md:p-6 hover:bg-gray-100 dark:hover:bg-[#262626]/60 transition-all duration-200">
            <div className="flex flex-col gap-1.5">
              <h2 className="text-2xl md:text-[2rem] font-bold tracking-tight">
                Professional Experience & Internships
              </h2>
              <p className="text-[0.9rem] md:text-[0.95rem] text-gray-500 dark:text-[#a3a3a3] transition-opacity duration-200 leading-[1.5]">
                Practical industry experience and hands-on learning opportunities.
              </p>
            </div>

            {/* Exactly recreating the White Chevron Button with Scaling Hover Physics */}
            <div className="mt-1 flex items-center justify-center p-2 rounded-lg transition-all duration-300 group-hover:scale-110 group-open:-rotate-180 bg-gray-200 dark:bg-white text-gray-900 dark:text-black shadow-sm">
              <ChevronDown size={20} strokeWidth={2.5} />
            </div>
            
            {/* Custom Marker hiding default details arrow in webkit */}
            <style jsx="true">{`
              summary::-webkit-details-marker {
                display: none;
              }
            `}</style>
          </summary>

          {/* Expanded Content Grid */}
          <div className="px-4 pb-4 md:px-6 md:pb-6 pt-2 animate-in fade-in slide-in-from-top-4 duration-500">
            
            {/* 3-Column Experience Grid */}
            <div className="px-2 md:px-4 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-4">
                  {experiences.map((exp, index) => (
                      <div 
                          key={index}
                          className="relative rounded-xl border border-gray-200 dark:border-[#262626] bg-gray-50/50 dark:bg-[#0a0a0a] overflow-hidden p-6 flex flex-col shadow-sm group hover:shadow-lg hover:border-blue-500/30 dark:hover:border-white/20 transition-all duration-300 h-full"
                      >
                        {/* Header: Icon (Left) + Duration (Right) */}
                        <div className="flex items-center justify-between w-full mb-4 relative z-10">
                            <Building size={20} className="text-gray-900 dark:text-white" strokeWidth={2.2} />
                            <span className="inline-flex items-center justify-center rounded-md border border-transparent px-2.5 py-0.5 text-[0.7rem] font-semibold bg-gray-200 dark:bg-[#333] text-gray-800 dark:text-gray-200 shadow-sm">
                                {exp.duration}
                            </span>
                        </div>

                        {/* Company & Role */}
                        <div className="relative z-10 flex flex-col flex-1">
                            <h3 className="font-bold leading-none tracking-tight text-[1.15rem] text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-white transition-colors mb-3">
                                {exp.company}
                            </h3>
                            <div className="mb-4">
                                <span className="inline-flex items-center rounded-md border border-gray-200 dark:border-white/10 px-2.5 py-0.5 text-[0.75rem] font-semibold text-gray-800 dark:text-gray-200 bg-white dark:bg-zinc-800/50">
                                    {exp.role}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-[0.85rem] text-gray-500 dark:text-[#a1a1aa] leading-relaxed mb-6 flex-1">
                                {exp.description}
                            </p>

                            {/* Tools & Technologies */}
                            <div className="mb-5">
                                <h4 className="text-[0.85rem] font-semibold mb-3 flex items-center gap-1.5 text-gray-900 dark:text-white">
                                    <Wrench size={16} strokeWidth={2.2} className="text-gray-900 dark:text-white" /> 
                                    Tools & Technologies:
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {exp.tools.map((tool, i) => (
                                        <span 
                                            key={i} 
                                            className="inline-flex items-center rounded-md border border-transparent dark:border-white/5 px-2.5 py-1 text-[0.75rem] font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-[#262626]/50 shadow-sm transition-colors hover:bg-gray-200 dark:hover:bg-zinc-800"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Learning Outcome */}
                            <div className="mt-auto pt-2">
                                <h4 className="text-[0.85rem] font-semibold mb-3 flex items-center gap-1.5 text-gray-900 dark:text-white">
                                    <Lightbulb size={16} strokeWidth={2.2} className="text-gray-900 dark:text-white" /> 
                                    Learning Outcome:
                                </h4>
                                <p className="text-[0.8rem] text-gray-600 dark:text-gray-300 bg-gray-50/50 dark:bg-white/5 p-3.5 rounded-[0.55rem] border border-transparent dark:border-white/10 shadow-sm leading-relaxed">
                                    {exp.outcome}
                                </p>
                            </div>
                        </div>
                      </div>
                  ))}
              </div>
            </div>

            {/* Opportunities Footer Card */}
            <div className="text-center mt-12 mb-4 px-2 md:px-4 animate-in fade-in duration-700">
                <div className="flex flex-col items-center justify-center rounded-xl bg-white dark:bg-[#0a0a0a] shadow-sm max-w-md mx-auto border-dashed border-2 border-gray-300 dark:border-[#333]/70 hover:border-gray-400 dark:hover:border-[#555] transition-colors duration-300 py-10 px-8">
                    <Building size={48} strokeWidth={1.5} className="mx-auto text-gray-400 dark:text-gray-500 mb-5" />
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Looking for Opportunities</h3>
                    <p className="text-[0.85rem] text-gray-500 dark:text-[#a1a1aa] mb-6 leading-relaxed">
                        Open to internships and opportunities in frontend development, cloud computing, and real-world projects.
                    </p>
                    <a 
                        href="#contact" 
                        className="inline-flex items-center justify-center font-medium transition-colors border border-gray-200 dark:border-[#333] bg-white dark:bg-[#1a1a1a] hover:bg-gray-50 dark:hover:bg-[#262626] h-10 rounded-md px-6 text-[0.85rem] text-gray-900 dark:text-white shadow-sm"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

          </div>
        </details>
      </div>
    </section>
  );
}
