import { useState } from 'react';
import { ChevronDown, GraduationCap, Award, Calendar } from 'lucide-react';

export function Education() {
  const [isOpen, setIsOpen] = useState(() => {
    // We use sessionStorage so it resets to OPEN automatically when you close and reopen the browser tab on a new day!
    const savedState = sessionStorage.getItem('educationAccordionOpen');
    return savedState === null ? true : savedState === 'true';
  });

  const handleToggle = (e) => {
    const isNowOpen = e.target.open;
    setIsOpen(isNowOpen);
    sessionStorage.setItem('educationAccordionOpen', isNowOpen.toString());
  };

  const academicRecords = [
    {
      degree: "B.Tech in Computer Science",
      year: "2024-2028",
      college: "Acropolis Institute of Technology and Research, Indore",
      specialization: "Computer Science and Engineering",
      score: "CGPA: 7.05"
    },
    {
      degree: "12th Standard",
      year: "2024",
      college: "Sica Senior Secondary School, Indore (CBSE)",
      specialization: "",
      score: "Percentage: 00.00%"
    },
    {
      degree: "10th Standard",
      year: "2022",
      college: "Sica Senior Secondary School, Indore (CBSE)",
      specialization: "",
      score: "Percentage: 00.00%"
    }
  ];

  const achievements = [
    {
      emoji: "🏅",
      title: "135+ Google Cloud Certifications",
      description: "Completed multiple certifications demonstrating strong consistency in cloud learning.",
      date: "2024",
      organization: "Present • Google Cloud Platform (GCP)"
    },
    {
      emoji: "🏆",
      title: "Hacktoberfest Super Contributor",
      description: "Contributed to open-source projects and improved real-world development skills.",
      date: "2025",
      organization: "Hacktoberfest"
    }
  ];

  return (
    <section id="education" className="py-20 relative z-10">
      <div className="container mx-auto 2xl:max-w-[1536px] px-4 animate-in-up delay-300">
        
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
                Education & Academic Background
              </h2>
              <p className="text-[0.9rem] md:text-[0.95rem] text-gray-500 dark:text-[#a3a3a3] transition-opacity duration-200 leading-[1.5]">
                My formal academic journey and notable extracurricular programming achievements.
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

          {/* Expanded Content */}
          <div className="px-4 pb-4 md:px-6 md:pb-6 pt-2 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="grid lg:grid-cols-2 gap-8 mb-6 sm:mb-12">
              
              {/* Academic Records */}
              <div className="rounded-xl border border-gray-200 dark:border-[#262626] bg-gray-50/50 dark:bg-[#0a0a0a] p-6 shadow-sm group hover:border-gray-300 dark:hover:border-[#404040] transition-colors duration-300">
                <div className="flex items-center gap-2.5 mb-6">
                    <GraduationCap size={22} className="text-gray-900 dark:text-white" strokeWidth={2.5} />
                    <h3 className="font-bold leading-none tracking-tight text-[1.05rem] text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                        Academic Records
                    </h3>
                </div>
                <div className="space-y-8">
                    {academicRecords.map((record, index) => (
                        <div key={index} className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 relative">
                            {/* Timeline Dot */}
                            <div className="absolute w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-50 rounded-full -left-[6px] top-1.5"></div>
                            
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                <h4 className="font-semibold text-base text-zinc-950 dark:text-zinc-50">{record.degree}</h4>
                                <span className="inline-flex items-center rounded-md border border-zinc-200 dark:border-zinc-800 px-2.5 py-0.5 text-xs font-semibold text-zinc-950 dark:text-zinc-50 focus:outline-none bg-transparent">
                                    {record.year}
                                </span>
                            </div>
                            <p className="text-sm text-zinc-500 dark:text-[#a1a1aa] mb-1">{record.college}</p>
                            {record.specialization && <p className="text-sm text-zinc-500 dark:text-[#a1a1aa] mb-2">{record.specialization}</p>}
                            
                            <div className="mt-4">
                                <span className="inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 transition-colors focus:outline-none">
                                    {record.score}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
              </div>

              {/* Achievements & Awards */}
              <div className="rounded-xl border border-gray-200 dark:border-[#262626] bg-gray-50/50 dark:bg-[#0a0a0a] p-6 shadow-sm group hover:border-gray-300 dark:hover:border-[#404040] transition-colors duration-300">
                <div className="flex items-center gap-2.5 mb-6">
                    <Award size={22} className="text-gray-900 dark:text-white" strokeWidth={2.5} />
                    <h3 className="font-bold leading-none tracking-tight text-[1.05rem] text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                        Achievements & Awards
                    </h3>
                </div>
                <div className="space-y-8">
                    {achievements.map((award, index) => (
                        <div key={index} className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600 relative">
                            {/* Timeline Dot */}
                            <div className="absolute w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-50 rounded-full -left-[6px] top-1.5"></div>

                            <div className="flex items-start gap-3">
                                <span className="text-lg mt-0.5">{award.emoji}</span>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-base text-zinc-950 dark:text-zinc-50 mb-1.5">{award.title}</h4>
                                    <p className="text-sm text-zinc-500 dark:text-[#a1a1aa] mb-3 leading-relaxed">{award.description}</p>
                                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-[#a1a1aa]">
                                        <Calendar size={12} />
                                        <span>{award.date} • {award.organization}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
              </div>
              
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
