import React, { useState } from 'react';
import { ChevronDown, FileText, Eye, Download, ExternalLink } from 'lucide-react';

export function Resume() {
    const [isOpen, setIsOpen] = useState(() => {
        // Synchronized with other accordions
        const savedState = sessionStorage.getItem('resumeAccordionOpen');
        return savedState === null ? true : savedState === 'true';
    });

    const handleToggle = (e) => {
        const isNowOpen = e.target.open;
        setIsOpen(isNowOpen);
        sessionStorage.setItem('resumeAccordionOpen', isNowOpen.toString());
    };

    return (
        <section id="resume" className="py-20 relative z-10">
            <div className="container mx-auto 2xl:max-w-[1536px] px-4 animate-in-up delay-600">
                {/* Accordion Container */}
                <details
                    className="group rounded-xl border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out open:shadow-lg open:border-gray-300 dark:open:border-white/20 relative overflow-hidden"
                    open={isOpen}
                    onToggle={handleToggle}
                >
                    {/* Summary Trigger */}
                    <summary className="flex w-full cursor-pointer list-none items-start justify-between gap-4 p-4 md:p-6 hover:bg-gray-100 dark:hover:bg-[#262626]/60 transition-all duration-200">
                        <div className="flex flex-col gap-1.5 focus:outline-none">
                            <h2 className="text-2xl md:text-[2rem] font-bold tracking-tight">
                                Resume
                            </h2>
                            <p className="text-[0.9rem] md:text-[0.95rem] text-gray-500 dark:text-[#a3a3a3] transition-opacity duration-200 leading-[1.5]">
                                Download or view my latest resume with comprehensive details about my experience and skills.
                            </p>
                        </div>

                        {/* Exactly recreating the White Chevron Button with Scaling Hover Physics */}
                        <div className="mt-1 flex items-center justify-center p-2 rounded-lg transition-all duration-300 group-hover:scale-110 group-open:-rotate-180 bg-gray-200 dark:bg-white text-gray-900 dark:text-black shadow-sm flex-shrink-0">
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
                    <div className="px-4 pb-6 md:px-8 md:pb-8 pt-2 md:pt-4 flex justify-center animate-in fade-in slide-in-from-top-4 duration-500">

                        {/* Inner Dashed Box */}
                        <div className="border-2 border-dashed border-gray-300 dark:border-[#444] hover:border-gray-500 dark:hover:border-[#777] rounded-xl p-6 md:p-10 max-w-2xl w-full flex flex-col items-center transition-colors duration-300">

                            {/* File Icon */}
                            <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-[#121212] border border-transparent dark:border-[#262626] flex items-center justify-center text-gray-700 dark:text-gray-300 mb-4 shadow-sm">
                                <FileText size={24} strokeWidth={2} />
                            </div>

                            {/* Box Title */}
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-[#fafafa] mb-1 tracking-tight">My Resume</h3>
                            <p className="text-[0.9rem] text-gray-500 dark:text-[#8a8a8a] mb-6 text-center max-w-md">
                                Latest version updated with recent projects and achievements
                            </p>

                            {/* What's included block */}
                            <div className="bg-gray-50/50 dark:bg-[#151515] rounded-xl px-5 py-3 md:px-6 md:py-4 w-full text-left border border-gray-200 dark:border-[#262626] shadow-sm mb-6 transition-colors">
                                <h4 className="font-semibold text-[0.95rem] text-gray-900 dark:text-[#fafafa] mb-3">What's included:</h4>
                                <ul className="text-[0.9rem] text-gray-600 dark:text-[#a3a3a3] font-normal space-y-1.5 leading-tight">
                                    <li>• Professional experience and internships</li>
                                    <li>• Technical skills and certifications</li>
                                    <li>• Academic background and achievements</li>
                                    <li>• Projects and publications</li>
                                    <li>• Contact information and references</li>
                                </ul>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-6">
                                <a 
                                    href="/resume.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg font-medium text-[0.9rem] flex items-center justify-center gap-2 bg-gray-900 text-white dark:bg-white dark:text-[#171717] hover:bg-gray-800 dark:hover:bg-[#e5e5e5] transition-colors shadow-sm"
                                >
                                    <Eye size={18} strokeWidth={2.5} />
                                    View Resume
                                </a>
                                <a 
                                    href="/resume.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg font-medium text-[0.9rem] flex items-center justify-center gap-2 bg-transparent text-gray-900 dark:text-[#fafafa] border border-gray-300 dark:border-[#404040] hover:bg-gray-50 dark:hover:bg-[#262626] transition-colors"
                                >
                                    <Download size={18} strokeWidth={2.5} />
                                    Download PDF
                                </a>
                            </div>

                            {/* Divider Line */}
                            <div className="w-full h-[1px] bg-gray-200 dark:bg-[#262626] mb-6 mt-2"></div>

                            {/* Also available on */}
                            <h4 className="font-semibold text-[0.9rem] text-gray-900 dark:text-[#fafafa] mb-3">Also available on:</h4>
                            <div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
                                <a href="https://www.linkedin.com/in/basantnema31" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[0.9rem] text-gray-600 dark:text-[#a3a3a3] hover:text-gray-900 dark:hover:text-[#fafafa] hover:bg-gray-100 dark:hover:bg-[#262626] font-medium transition-all duration-200">
                                    <ExternalLink size={16} strokeWidth={2} />
                                    LinkedIn
                                </a>
                                <a href="https://github.com/basantnema31" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[0.9rem] text-gray-600 dark:text-[#a3a3a3] hover:text-gray-900 dark:hover:text-[#fafafa] hover:bg-gray-100 dark:hover:bg-[#262626] font-medium transition-all duration-200">                                    <ExternalLink size={16} strokeWidth={2} />
                                    GitHub
                                </a>
                            </div>

                            {/* Footer text */}
                            <p className="text-[0.8rem] text-gray-500 dark:text-[#666] tracking-wide">
                                Last updated: March 23, 2026
                            </p>

                        </div>
                    </div>
                </details>
            </div>
        </section>
    );
}

export default Resume;
