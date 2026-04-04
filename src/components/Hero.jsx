import { Github, Mail, Linkedin, Youtube, Download, Smartphone } from 'lucide-react'

export function Hero({ darkMode }) {
    // === LAYOUT CONTROLS ===
    // Tweak this variable to push the entire left text block to the right. 
    // Increase the pl (padding-left) values to push it further right on desktop. 
    // Examples: 'lg:pl-8', 'lg:pl-16', 'lg:pl-[5rem]'
    const leftOffsetClass = "lg:pl-12 xl:pl-5";

    // Tweak this to change how fast the "Basant Nema" light beam sweeps in Dark Mode.
    // Lower is faster (e.g., '1.5s', '2s'), higher is slower (e.g., '4s', '8s')
    const shineSpeed = "5s";

    // === SOCIAL LINKS ===
    // Replace the '#' with your actual profile URLs
    const socialLinks = [
        { Icon: Github, href: "https://github.com/basantnema31" },
        { Icon: Mail, href: "mailto:[pianistbasant31@gmail.com]" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/basantnema31" },
        { Icon: Youtube, href: "https://www.youtube.com/@the_tunester31" }
    ];

    const skills = [
        'HTML', 'CSS', 'C++', 'React', 'Vite', 'Node.js', 'Python', 'MongoDB',
        'Git', 'REST API', 'Cloud', 'APIs', 'JavaScript'
    ]

    return (
        <section id="home" className="min-h-[90vh] flex items-center relative pt-12 md:pt-20 pb-10">
            <div className="container mx-auto 2xl:max-w-[1536px] px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
 
                    {/* Right Content - Profile & Socials (Order 1 on mobile) */}
                    <div className="flex flex-col items-center space-y-6 relative order-1 md:order-2 z-10 w-full animate-in-up">
                        <div className="flex flex-col items-center gap-7 w-full">
                            {/* Profile Image with Glowing Border effect */}
                            <div className="relative group mx-auto cursor-pointer mt-4">
                                {/* Soft Outer Glow */}
                                <div className="absolute -inset-[0.5rem] bg-gradient-to-br from-orange-500/20 to-yellow-500/5 rounded-full blur-2xl animate-pulse z-0"></div>

                                {/* Solid Avatar Wrapper */}
                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white dark:bg-background border-[6px] border-white dark:border-gray-800 transition-transform duration-300 group-hover:scale-105 shadow-[0_0_50px_rgba(0,0,0,0.08)] dark:shadow-2xl overflow-hidden flex items-center justify-center z-10 box-border">
                                    <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden relative">
                                        <img src="/basant.png" alt="Basant Nema" className="w-full h-full object-cover object-center scale-[1.35] mt-6 transition-transform duration-300 group-hover:scale-[1.45]" />
                                    </div>
                                </div>

                                {/* Floating Icon (</>) */}
                                <div className="absolute top-6 -right-2 md:right-0 w-12 h-12 bg-white dark:bg-[#1a1a1a] shadow-xl rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-800 animate-bounce group-hover:-rotate-6 transition-transform duration-500 z-20">
                                    <span className="text-black dark:text-white font-mono font-extrabold text-[1.1rem]">&lt;/&gt;</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-5 mt-2">
                                {/* Social Links Row */}
                                <div className="flex items-center gap-4">
                                    {socialLinks.map(({ Icon, href }, i) => (
                                        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-[2.4rem] h-[2.4rem] rounded-full bg-transparent border border-gray-300 dark:border-gray-800 flex items-center justify-center text-gray-900 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-all hover:scale-110 active:scale-95 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                                            <Icon size={19} strokeWidth={2} />
                                        </a>
                                    ))}
                                </div>

                                {/* Download Resume Button */}
                                <a 
                                    href="/resume.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-[1.35rem] py-2.5 rounded-full bg-gray-900 dark:bg-[#f3f4f6] text-white dark:text-black text-[0.88rem] font-bold hover:opacity-90 transition-opacity shadow-lg w-auto"
                                >
                                    <Download size={16} strokeWidth={2.5} />
                                    Download Resume
                                </a>

                                {/* Stats Pills */}
                                <div className="flex items-center gap-3">
                                    <div className="text-[10px] font-bold tracking-wide text-gray-900 dark:text-gray-100 bg-white dark:bg-[#1a1a1a] px-3.5 py-[0.35rem] rounded-full border border-gray-200 dark:border-gray-800 shadow-sm">
                                        7.05 CGPA
                                    </div>
                                    <div className="text-[10px] font-bold tracking-wide text-gray-900 dark:text-gray-100 bg-white dark:bg-[#1a1a1a] px-3.5 py-[0.35rem] rounded-full border border-gray-200 dark:border-gray-800 shadow-sm">
                                        2nd Year Student
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left Content (Order 2 on mobile) */}
                    <div className={`flex flex-col items-start space-y-6 md:space-y-8 order-2 md:order-1 z-10 w-full animate-in-up delay-100 ${leftOffsetClass}`}>

                        {/* Header Typography Block */}
                        <div className="flex flex-col items-start space-y-4 w-full">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gray-100 dark:bg-[#1f232b] border border-gray-200 dark:border-gray-800 text-sm font-medium shadow-sm w-max text-gray-800 dark:text-gray-200">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></span>
                                Hello, I'm
                            </div>

                            <div className="flex flex-col gap-3 w-full items-start">
                                <div className="relative w-max animate-in-up" key={darkMode ? 'dark' : 'light'} style={{ animationDuration: '700ms' }}>
                                    <h2
                                        className={`text-[3.25rem] sm:text-6xl lg:text-[4.25rem] font-bold tracking-normal pb-1 leading-[1.2] ${darkMode
                                                ? 'text-[#b5b5b5a4] bg-clip-text animate-shine bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.8)_50%,transparent_60%)] bg-[length:200%_100%]'
                                                : 'bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent'
                                            }`}
                                        style={darkMode ? { animationDuration: shineSpeed } : {}}
                                    >
                                        Basant Nema
                                    </h2>
                                    <sub className="absolute -right-12 sm:-right-16 lg:-right-[5.5rem] bottom-[0.8rem] lg:bottom-[0.5rem] text-[0.85rem] sm:text-sm tracking-wide text-gray-500/70 dark:text-gray-400/70 font-normal animate-pulse whitespace-nowrap">
                                        (bassii)
                                    </sub>
                                </div>
                                <h3 className="text-[1.4rem] sm:text-[1.75rem] lg:text-[2.2rem] text-gray-600 dark:text-gray-300 font-medium max-w-[42rem] min-w-full leading-[1.4]">
                                    Frontend Developer, Cloud Certified
                                    <br />
                                    Student, Content Creator
                                    <br />
                                    and More...
                                </h3>
                            </div>
                        </div>

                        <div className="max-w-[42rem] w-full mt-10 md:mt-0">
                            <p className="text-[1rem] md:text-[1.1rem] text-gray-600 dark:text-gray-400 leading-[1.6] font-normal">
                                Passionate Computer Science student with strong focus on frontend development and cloud computing. Currently pursuing B.Tech at Acropolis Institute of Technology & Research, Indore. Focused on building real-world projects and growing a strong personal brand.
                            </p>
                        </div>

                        {/* Skill Pills */}
                        <div className="flex flex-wrap items-center justify-start gap-3 pt-2 mt-12 md:mt-0 w-full">
                            {skills.map((skill) => (
                                <span key={skill} className="px-4 py-2 text-sm font-medium rounded-full bg-gray-900/10 text-gray-900 border border-gray-900/20 dark:bg-white/10 dark:text-white dark:border-white/20 hover:bg-gray-900/20 dark:hover:bg-white/20 transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center justify-start gap-5 w-full">
                            <button onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="px-7 py-3 rounded-full bg-gray-900 dark:bg-[#f3f4f6] text-white dark:text-black font-medium hover:scale-105 transition-transform shadow-lg text-sm">
                                Contact Me
                            </button>
                            <button onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }} className="px-7 py-3 rounded-full bg-transparent text-gray-900 dark:text-white font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#1f232b] transition-colors shadow-sm text-sm">
                                View Projects
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

