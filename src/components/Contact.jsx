import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, MapPin, Clock, Send, Github, Linkedin, Youtube } from 'lucide-react';

export function Contact() {
    const [isOpen, setIsOpen] = useState(() => {
        const savedState = sessionStorage.getItem('contactAccordionOpen');
        return savedState ? JSON.parse(savedState) : true;
    });

    const contentRef = useRef(null);

    useEffect(() => {
        sessionStorage.setItem('contactAccordionOpen', JSON.stringify(isOpen));
    }, [isOpen]);

    return (
        <section id="contact" className="py-10 md:py-20 relative z-10">
            <div className="container mx-auto 2xl:max-w-[1536px] px-4 animate-in-up delay-900">
                <details 
                    className="border border-gray-200 dark:border-white/20 rounded-2xl bg-white dark:bg-[#0a0a0a] overflow-hidden shadow-sm transition-shadow duration-300 group"
                    open={isOpen}
                    onToggle={(e) => setIsOpen(e.target.open)}
                >
                    <summary className="w-full flex items-center justify-between p-4 md:p-6 cursor-pointer list-none hover:bg-gray-100 dark:hover:bg-[#262626]/60 transition-all duration-200 focus:outline-none">
                        <div className="text-left w-full pr-4">
                            <h2 className="text-2xl md:text-[2rem] font-bold tracking-tight text-gray-900 dark:text-[#fafafa] mb-2">
                                Get In Touch
                            </h2>
                            <p className="text-[0.95rem] md:text-[1rem] text-gray-500 dark:text-[#a3a3a3] font-medium leading-relaxed max-w-[90%] overflow-hidden text-ellipsis">
                                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
                            </p>
                        </div>
                        <div className={`mt-1 flex items-center justify-center p-2 rounded-[0.4rem] transition-all duration-300 group-hover:scale-110 bg-gray-200 dark:bg-white text-gray-900 dark:text-black shadow-sm flex-shrink-0 ${isOpen ? '-rotate-180' : ''}`}>
                            <ChevronDown size={20} strokeWidth={2.5} />
                        </div>
                    </summary>

                    <div className="px-4 pb-6 md:px-6 md:pb-8 pt-2 h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 h-full max-w-5xl mx-auto">
                            {/* Left Card: Contact Details */}
                            <div className="rounded-2xl border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] p-6 shadow-sm flex flex-col h-full hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-3 mb-6">
                                    <Mail size={22} className="text-gray-900 dark:text-[#fafafa]" strokeWidth={2} />
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-[#fafafa]">Contact Info</h3>
                                </div>
                                <div className="space-y-4 mb-8">
                                    <div className="group/row flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#151515] border border-gray-100 dark:border-transparent hover:bg-gray-100/80 dark:hover:bg-[#262626] transition-all duration-300 cursor-default">
                                        <Mail size={20} className="text-gray-600 dark:text-[#a3a3a3] group-hover/row:scale-110 transition-transform duration-300" strokeWidth={2} />
                                        <div>
                                            <p className="font-semibold text-[0.9rem] text-gray-900 dark:text-[#fafafa] mb-0.5">Email</p>
                                            <p className="text-[0.85rem] text-gray-500 dark:text-[#a3a3a3]">pianistbasant31@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="group/row flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#151515] border border-gray-100 dark:border-transparent hover:bg-gray-100/80 dark:hover:bg-[#262626] transition-all duration-300 cursor-default">
                                        <MapPin size={20} className="text-gray-600 dark:text-[#a3a3a3] group-hover/row:scale-110 transition-transform duration-300" strokeWidth={2} />
                                        <div>
                                            <p className="font-semibold text-[0.9rem] text-gray-900 dark:text-[#fafafa] mb-0.5">Location</p>
                                            <p className="text-[0.85rem] text-gray-500 dark:text-[#a3a3a3]">Available for Remote Work</p>
                                        </div>
                                    </div>
                                    <div className="group/row flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#151515] border border-gray-100 dark:border-transparent hover:bg-gray-100/80 dark:hover:bg-[#262626] transition-all duration-300 cursor-default">
                                        <Clock size={20} className="text-gray-600 dark:text-[#a3a3a3] group-hover/row:scale-110 transition-transform duration-300" strokeWidth={2} />
                                        <div>
                                            <p className="font-semibold text-[0.9rem] text-gray-900 dark:text-[#fafafa] mb-0.5">Response Time</p>
                                            <p className="text-[0.85rem] text-gray-500 dark:text-[#a3a3a3]">Usually within 24 hours</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-[#262626]">
                                    <h4 className="font-bold text-[0.95rem] text-gray-900 dark:text-[#fafafa] mb-4">Connect with me</h4>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <a href="https://github.com/basantnema31" target="_blank" rel="noopener noreferrer" className="group/pill flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-[#262626] bg-white dark:bg-transparent text-[0.85rem] font-medium text-gray-700 dark:text-[#a3a3a3] hover:bg-gray-900 hover:text-white hover:border-gray-900 dark:hover:bg-[#fafafa] dark:hover:text-[#171717] dark:hover:border-[#fafafa] hover:scale-105 transition-all duration-200 shadow-sm">
                                            <Github size={15} strokeWidth={2.5} className="group-hover/pill:animate-pulse" /> GitHub
                                        </a>
                                        <a href="mailto:pianistbasant31@gmail.com" className="group/pill flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-[#262626] bg-white dark:bg-transparent text-[0.85rem] font-medium text-gray-700 dark:text-[#a3a3a3] hover:bg-gray-900 hover:text-white hover:border-gray-900 dark:hover:bg-[#fafafa] dark:hover:text-[#171717] dark:hover:border-[#fafafa] hover:scale-105 transition-all duration-200 shadow-sm">
                                            <Mail size={15} strokeWidth={2.5} className="group-hover/pill:animate-pulse" /> Email
                                        </a>
                                        <a href="https://linkedin.com/in/basantnema31" target="_blank" rel="noopener noreferrer" className="group/pill flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-[#262626] bg-white dark:bg-transparent text-[0.85rem] font-medium text-gray-700 dark:text-[#a3a3a3] hover:bg-gray-900 hover:text-white hover:border-gray-900 dark:hover:bg-[#fafafa] dark:hover:text-[#171717] dark:hover:border-[#fafafa] hover:scale-105 transition-all duration-200 shadow-sm">
                                            <Linkedin size={15} strokeWidth={2.5} className="group-hover/pill:animate-pulse" /> LinkedIn
                                        </a>
                                        <a href="https://youtube.com/@the_tunester31" target="_blank" rel="noopener noreferrer" className="group/pill flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-[#262626] bg-white dark:bg-transparent text-[0.85rem] font-medium text-gray-700 dark:text-[#a3a3a3] hover:bg-gray-900 hover:text-white hover:border-gray-900 dark:hover:bg-[#fafafa] dark:hover:text-[#171717] dark:hover:border-[#fafafa] hover:scale-105 transition-all duration-200 shadow-sm">
                                            <Youtube size={15} strokeWidth={2.5} className="group-hover/pill:animate-pulse" /> Youtube
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right Card: Collaboration */}
                            <div className="rounded-2xl border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] p-6 shadow-sm flex flex-col h-full hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-3 mb-6">
                                    <Send size={22} className="text-gray-900 dark:text-[#fafafa]" strokeWidth={2} />
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-[#fafafa]">Let's Work Together</h3>
                                </div>
                                <p className="text-[0.9rem] text-gray-600 dark:text-[#a3a3a3] leading-relaxed mb-8">
                                    I’m actively looking for internship opportunities and real-world projects. Whether it's frontend development, cloud-based solutions, or innovative tech ideas, I'd love to contribute to your team and grow as a developer.
                                </p>
                                <div className="flex flex-col gap-3 mb-8">
                                    <a href="mailto:pianistbasant31@gmail.com" className="group w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-[0.95rem] bg-gray-900 text-white dark:bg-[#fafafa] dark:text-[#171717] hover:bg-gray-800 dark:hover:bg-[#e5e5e5] transition-colors shadow-sm">
                                        <Mail size={18} strokeWidth={2.5} className="animate-bounce group-hover:animate-bounce" /> Send Email
                                    </a>
                                    <a href="https://linkedin.com/in/basantnema31" target="_blank" rel="noopener noreferrer" className="group w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-[0.95rem] bg-transparent text-gray-900 dark:text-[#fafafa] border border-gray-300 dark:border-[#404040] hover:bg-gray-100 dark:hover:bg-[#262626] hover:border-gray-400 dark:hover:border-[#555] transition-all duration-200 shadow-sm">
                                        <Linkedin size={18} strokeWidth={2.5} className="group-hover:animate-pulse" /> Connect on LinkedIn
                                    </a>
                                </div>
                                {/* Availability Banner */}
                                <div className="mt-auto p-5 rounded-xl bg-green-50 border border-green-200 dark:bg-green-900/10 dark:border-green-800/60 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-green-400/10 dark:bg-green-400/5 rounded-bl-full pointer-events-none"></div>
                                    <div className="flex items-center gap-3 mb-3 relative z-10">
                                        <div className="flex items-center gap-2 bg-green-100 text-green-800 dark:bg-green-800/40 dark:text-green-400 px-3 py-1 rounded-full text-[0.8rem] font-bold tracking-wide border border-green-200 dark:border-transparent">
                                            <span className="relative flex h-2.5 w-2.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600 dark:bg-green-500"></span>
                                            </span>
                                            Available for opportunities
                                        </div>
                                    </div>
                                    <p className="text-[0.875rem] font-medium text-green-800 dark:text-green-500/90 leading-relaxed relative z-10 pr-4">
                                        Open to freelance projects, collaborations, and full-time opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        </section>
    );
}

export default Contact;
