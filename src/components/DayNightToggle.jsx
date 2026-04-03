import React, { memo } from 'react';

const DayNightToggle = memo(({ darkMode, setDarkMode }) => {
    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-14 h-7 rounded-full overflow-hidden transition-[background-color,box-shadow] duration-700 ease-in-out shadow-md group focus:outline-none ring-1 ring-black/5 dark:ring-white/10 isolate will-change-transform ${
                darkMode ? 'bg-[#030712]' : 'bg-gradient-to-br from-sky-400 to-blue-500'
            }`}
            style={{ 
                transform: 'translate3d(0, 0, 0)', 
                contain: 'paint',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
            }}
            aria-label="Toggle Dark Mode"
        >
            {/* Environment: Night Mode (Space / Milky Way) */}
            <div 
                className={`absolute inset-0 transition-opacity duration-700 pointer-events-none will-change-opacity ${darkMode ? 'opacity-100' : 'opacity-0'}`}
                style={{ transform: 'translate3d(0,0,0)' }}
            >
                {/* Nebula / Galaxy Dust */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,transparent_100%)] opacity-80" />
                
                {/* Optimized CSS-only Star Dusting (Faster than SVG during scroll) */}
                {[...Array(14)].map((_, i) => (
                    <div 
                        key={`star-${i}`}
                        className="absolute w-[1px] h-[1px] bg-white rounded-full opacity-60"
                        style={{ 
                            top: `${Math.random() * 100}%`, 
                            left: `${Math.random() * 100}%`,
                            transform: 'translateZ(0)',
                            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}

                {/* Shooting Star Animation (Activity Parity with Birds) */}
                <div className="absolute top-2 left-[-10%] w-10 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-white opacity-0 animate-[shooting_10s_linear_infinite] will-change-transform" style={{ transform: 'rotate(-25deg) translate3d(0,0,0)' }} />

                {/* Night Clouds (Moon-lit / Silver) */}
                <div className="absolute top-1.5 right-6 w-6 h-3 opacity-50 animate-[slide_22s_linear_infinite_reverse] will-change-transform" style={{ transform: 'translate3d(0,0,0)' }}>
                    <div className="absolute w-3 h-3 bg-white/30 rounded-full blur-[0.5px]" />
                    <div className="absolute left-2 w-4 h-4 bg-white/30 rounded-full -top-1 blur-[0.5px]" />
                    <div className="absolute left-4 w-3 h-3 bg-white/30 rounded-full blur-[0.5px]" />
                </div>
                <div className="absolute top-5 left-5 w-5 h-2.5 opacity-35 animate-[slide_28s_linear_infinite] will-change-transform" style={{ transform: 'translate3d(0,0,0)' }}>
                    <div className="absolute w-2.5 h-2.5 bg-blue-300/40 rounded-full blur-[0.5px]" />
                    <div className="absolute left-1.5 w-3.5 h-3.5 bg-blue-300/40 rounded-full -top-0.5 blur-[0.5px]" />
                    <div className="absolute left-3 w-2.5 h-2.5 bg-blue-300/40 rounded-full blur-[0.5px]" />
                </div>

                {/* Satellite (Blinking / Slow Moving) */}
                <div className="absolute top-4 left-[20%] w-[1.5px] h-[1.5px] bg-blue-100 rounded-full shadow-[0_0_4px_#fff] animate-[satellite_45s_linear_infinite] will-change-transform opacity-70" />

                {/* Main Twinkling Constellation */}
                <div className="absolute top-1 right-3 flex gap-1.5 animate-pulse will-change-opacity">
                    <div className="w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_4px_#fff]" />
                    <div className="w-[1px] h-[1px] bg-white rounded-full mt-1.5 shadow-[0_0_4px_#fff]" />
                </div>
            </div>

            {/* Environment: 3D Clouds (Day) */}
            <div 
                className={`absolute inset-0 transition-opacity duration-700 pointer-events-none will-change-opacity ${darkMode ? 'opacity-0' : 'opacity-100'}`}
                style={{ transform: 'translate3d(0,0,0)' }}
            >
                {/* Birds: V-Formation (Physics-Based Foreshortening) */}
                <div className="absolute top-1.5 left-[15%] flex gap-1.5 animate-[birds_24s_linear_infinite] will-change-transform opacity-100 -rotate-[12deg]">
                    {[0, 1, 2].map((i) => (
                        <div key={i} className={`relative w-2.5 h-1.5 ${i === 1 ? 'mt-1' : ''}`}>
                             <svg viewBox="0 0 20 10" fill="none" stroke="#000" strokeWidth="1.2" strokeLinecap="round" className="w-full h-full animate-[flap_0.7s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.2}s` }}>
                                <path d="M2,6 C5,3 8,3 10,6 C12,3 15,3 18,6" />
                             </svg>
                        </div>
                    ))}
                </div>

                {/* Cloud 1 */}
                <div className="absolute top-1 left-2 w-6 h-3 animate-[slide_12s_linear_infinite] will-change-transform">
                    <div className="absolute w-3 h-3 bg-white rounded-full shadow-inner" />
                    <div className="absolute left-2 w-4 h-4 bg-white rounded-full -top-1 shadow-inner" />
                    <div className="absolute left-4 w-3 h-3 bg-white rounded-full shadow-inner" />
                </div>
                {/* Cloud 2 */}
                <div className="absolute top-3 left-10 w-5 h-2.5 animate-[slide_18s_linear_infinite_reverse] will-change-transform">
                    <div className="absolute w-2.5 h-2.5 bg-white/95 rounded-full shadow-inner" />
                    <div className="absolute left-1.5 w-3 h-3 bg-white/95 rounded-full -top-0.5 shadow-inner" />
                    <div className="absolute left-3 w-2.5 h-2.5 bg-white/95 rounded-full shadow-inner" />
                </div>
                {/* Cloud 3 */}
                <div className="absolute top-0.5 left-[3.5rem] w-4 h-2 animate-[slide_15s_linear_infinite_reverse] will-change-transform">
                    <div className="absolute w-2 h-2 bg-white/90 rounded-full shadow-inner" />
                    <div className="absolute left-1 w-3 h-3 bg-white/90 rounded-full -top-0.5 shadow-inner" />
                    <div className="absolute left-2.5 w-2 h-2 bg-white/90 rounded-full shadow-inner" />
                </div>
            </div>

            {/* City Skyline Silhouette */}
            <div 
                className={`absolute bottom-0 left-0 w-full h-[38%] z-10 pointer-events-none transition-opacity duration-700 will-change-opacity ${darkMode ? 'opacity-100' : 'opacity-85'}`}
                style={{ transform: 'translate3d(0,0,0)' }}
            >
                <div className="flex items-end justify-center h-full px-1 gap-0.5">
                    {/* Building 1 (Left) */}
                    <div className="w-2 h-2 bg-slate-800 dark:bg-slate-700 rounded-t-[1px] shadow-sm relative">
                        {darkMode && <div className="absolute top-0.5 left-0.5 w-[2px] h-[2px] bg-yellow-200 shadow-[0_0_4px_#fef08a]" />}
                    </div>
                    {/* Building 2 */}
                    <div className="w-1.5 h-3 bg-slate-800 dark:bg-slate-700/90 rounded-t-[1px] shadow-sm relative">
                         {darkMode && <div className="absolute top-1 left-0.5 w-[2px] h-[2px] bg-yellow-200 shadow-[0_0_6px_#fef08a,0_0_12px_#facc15]" />}
                         {darkMode && <div className="absolute top-2 right-0.5 w-[1.5px] h-[1.5px] bg-yellow-200/80" />}
                    </div>
                    {/* Building 3 (Center) */}
                    <div className="w-2.5 h-4 bg-slate-800 dark:bg-slate-700 rounded-t-[1px] shadow-sm relative border-x border-t border-transparent dark:border-white/5">
                        {darkMode && <div className="absolute top-1 left-0.5 w-[2px] h-[2px] bg-yellow-200 shadow-[0_0_6px_#fef08a,0_0_12px_#facc15]" />}
                        {darkMode && <div className="absolute top-2.5 right-0.5 w-[2px] h-[2px] bg-yellow-200 shadow-[0_0_4px_#fef08a]" />}
                    </div>
                    {/* Building 4 */}
                    <div className="w-1.5 h-2.5 bg-slate-800 dark:bg-slate-700/80 rounded-t-[1px] shadow-sm relative">
                        {darkMode && <div className="absolute top-1 right-0.5 w-[1.5px] h-[1.5px] bg-yellow-200/90 shadow-[0_0_2px_#fef08a]" />}
                    </div>
                    {/* Building 5 (Right) */}
                    <div className="w-2 h-1.5 bg-slate-800 dark:bg-slate-700 rounded-t-[1px] shadow-sm relative">
                        {darkMode && <div className="absolute top-0.5 left-0.5 w-[1.5px] h-[1.5px] bg-yellow-200/80 shadow-[0_0_2px_#fef08a]" />}
                    </div>
                </div>
            </div>

            {/* Toggle Knob: Sun/Moon */}
            <div
                className={`absolute top-0.5 w-6 h-6 rounded-full shadow-md transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) z-20 will-change-transform ${
                    darkMode 
                        ? 'bg-slate-50 shadow-[inset_-2px_-1px_3px_rgba(0,0,0,0.1),0_0_20px_rgba(147,197,253,0.8)]' 
                        : 'bg-yellow-300 shadow-[0_0_15px_rgba(253,224,71,0.6)]'
                }`}
                style={{ 
                    transform: `translate3d(${darkMode ? '1.75rem' : '0.125rem'}, 0, 0)`,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                }}
            >
                {!darkMode && (
                    <div className="absolute inset-0 rounded-full bg-yellow-200/40 blur-[4px] -z-10 animate-pulse will-change-opacity" />
                )}

                {darkMode && (
                    <div className="absolute inset-0 overflow-hidden rounded-full scale-[0.8] shadow-[0_0_10px_rgba(147,197,253,0.4)]">
                        {/* More Textured Craters */}
                        <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-slate-300/60 rounded-full shadow-inner" />
                        <div className="absolute bottom-1 right-1.5 w-1 h-1 bg-slate-300/40 rounded-full shadow-inner" />
                        <div className="absolute top-3 right-1 w-0.5 h-0.5 bg-slate-300/30 rounded-full" />
                        <div className="absolute top-4 left-3 w-1 h-1 bg-slate-400/20 rounded-full shadow-inner blur-[0.2px]" />
                        <div className="absolute bottom-3 left-1.5 w-0.5 h-0.5 bg-slate-400/40 rounded-full" />
                    </div>
                )}
            </div>

            {/* Custom Animations Inline */}
            <style jsx="true">{`
                @keyframes slide {
                    from { transform: translateX(-20px) translate3d(0,0,0); opacity: 0; }
                    50% { opacity: 0.6; }
                    to { transform: translateX(60px) translate3d(0,0,0); opacity: 0; }
                }
                @keyframes birds {
                    from { transform: translateX(50px) translateY(1.5px) translate3d(0,0,0) scaleX(0.4); opacity: 0; }
                    20% { opacity: 0.8; }
                    80% { opacity: 0.8; }
                    to { transform: translateX(-15px) translateY(-1.5px) translate3d(0,0,0) scaleX(0.4); opacity: 0; }
                }
                @keyframes flap {
                    0%, 100% { transform: scaleY(0.7) skewX(4deg); }
                    50% { transform: scaleY(0.15) skewX(-4deg); }
                }
                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.2); }
                }
                @keyframes shooting {
                    0% { transform: translateX(0) translateY(0) rotate(-25deg); opacity: 0; }
                    5% { opacity: 1; }
                    15% { transform: translateX(100px) translateY(46px) rotate(-25deg); opacity: 0; }
                    100% { opacity: 0; }
                }
                @keyframes satellite {
                    from { transform: translateX(-30px); }
                    to { transform: translateX(100px); }
                }
            `}</style>
        </button>
    );
});

export default DayNightToggle;
