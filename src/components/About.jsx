import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function About() {
  const [isOpen, setIsOpen] = useState(() => {
    // We use sessionStorage so it resets to OPEN automatically when you close and reopen the browser tab on a new day!
    const savedState = sessionStorage.getItem('aboutAccordionOpen');
    return savedState === null ? true : savedState === 'true';
  });
  
  const [activeTab, setActiveTab] = useState('Frontend');

  const handleToggle = (e) => {
    const isNowOpen = e.target.open;
    setIsOpen(isNowOpen);
    sessionStorage.setItem('aboutAccordionOpen', isNowOpen.toString());
  };

  // === YOUR SKILL PERCENTAGES ===
  // Change these numbers ("75%", "85%") to whatever you want in the future!
  const skillsData = [
    { title: "Frontend Development (React / Vite / JS)", pct: "85%" },
    { title: "Backend Development (Node.js)", pct: "40%" },
    { title: "Hosting & Deployment (Render / Supabase / Vercel)", pct: "60%" },
    { title: "Product Design & UX Optimization", pct: "50%" }
  ];

  const technicalSkills = {
    Frontend: ["React.js", "Vite", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    Backend: ["Node.js", "REST APIs"],
    Database: ["MongoDB"],
    Tools: ["Git/GitHub", "VS Code", "Postman", "Cloud Services"]
  };

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto 2xl:max-w-[1536px] px-4 animate-in-up delay-200">
        
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
                About Me
              </h2>
              <p className="text-[0.9rem] md:text-[0.95rem] text-gray-500 dark:text-[#a3a3a3] transition-opacity duration-200 leading-[1.5]">
                Passionate developer with a strong foundation in computer science and hands-on experience in modern technologies.
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
              
              {/* Professional Background */}
              <div className="rounded-xl border border-gray-200 dark:border-[#262626] bg-gray-50/50 dark:bg-[#0a0a0a] p-6 shadow-sm group hover:border-gray-300 dark:hover:border-[#404040] transition-colors duration-300">
                <h3 className="font-bold leading-none tracking-tight mb-6 text-[1.05rem] text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                  Professional Background
                </h3>
                <div className="space-y-4 text-[0.9rem] text-gray-600 dark:text-[#a3a3a3] leading-[1.5]">
                  <p>
                    I am a passionate Computer Science student currently pursuing B.Tech at Acropolis Institute of Technology & Research, Indore. I focus on frontend development and have hands-on experience building modern web applications using React and related technologies. I have earned 135+ Google Cloud certifications and gained practical exposure through programs like Hacktoberfest and Deloitte job simulations. I am dedicated to continuously improving my skills, building real-world projects, and growing as a developer.
                  </p>
                </div>
              </div>

              {/* Core Skills (Percentage Labels explicitly removed per user config) */}
              <div className="rounded-xl border border-gray-200 dark:border-[#262626] bg-gray-50/50 dark:bg-[#0a0a0a] p-6 shadow-sm flex flex-col gap-6 group hover:border-gray-300 dark:hover:border-[#404040] transition-colors duration-300">
                <h3 className="font-bold leading-none tracking-tight mb-2 text-[1.05rem] text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                  Core Skills
                </h3>
                
                {skillsData.map((skill, index) => (
                  <div key={index} className="flex flex-col gap-2.5">
                    <div className="flex justify-between items-center text-sm font-medium dark:text-gray-200">
                      <span>{skill.title}</span>
                      <span className="text-gray-500 dark:text-[#a3a3a3]">{skill.pct}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-[#262626] overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gray-900 dark:bg-white transition-all duration-1000 ease-out" 
                        style={{ width: isOpen ? skill.pct : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
            </div>

            {/* Technical Skills Tabs (Full Width) */}
            <div className="rounded-xl border border-gray-200 dark:border-[#262626] bg-gray-50/50 dark:bg-[#0a0a0a] p-6 shadow-sm group hover:border-gray-300 dark:hover:border-[#404040] transition-colors duration-300">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-gray-500 font-mono text-sm font-bold">&lt;/&gt;</span>
                <h3 className="font-semibold leading-none tracking-tight text-[1.05rem] text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                  Technical Skills
                </h3>
              </div>
              
              <div className="inline-flex h-auto sm:h-11 w-full sm:w-auto items-center justify-center rounded-[0.7rem] bg-gray-200/60 dark:bg-[#1a1a1a] p-1.5 text-gray-500 dark:text-[#a3a3a3] flex-wrap sm:flex-nowrap mb-6 overflow-hidden gap-1">
                {Object.keys(technicalSkills).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md lg:rounded-[0.45rem] px-4 lg:px-6 py-[0.45rem] text-[0.8rem] sm:text-[0.85rem] font-medium transition-all w-full sm:w-auto ${
                      activeTab === tab 
                      ? 'bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white shadow-sm border border-gray-200/50 dark:border-white/10' 
                      : 'hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2.5 animate-in fade-in zoom-in-95 duration-300">
                {technicalSkills[activeTab].map(skill => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 rounded-lg bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 text-gray-800 dark:text-[#d4d4d4] text-[13px] font-medium transition-colors hover:bg-gray-100 dark:hover:bg-white/10 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </details>
      </div>
    </section>
  );
}
