import { useEffect, useState, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Portfolio } from '../components/Portfolio'
import { Activities } from '../components/Activities'
import { Goals } from '../components/Goals'
import { Resume } from '../components/Resume'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { QuickNav } from '../components/QuickNav'

// Tiny wrapper — keeps Home.jsx clean
function Reveal({ children }) {
    const { ref, isVisible } = useScrollReveal();
    return (
        <div ref={ref} className={`section-reveal${isVisible ? ' is-visible' : ''}`}>
            {children}
        </div>
    );
}

export function Home({ darkMode }) {
    const { state } = useLocation();

    useSEO({
        title: 'Basant Nema | Cloud & Web Developer',
        description: 'Explore the professional portfolio of Basant Nema, a passionate Computer Science student focused on Frontend Development and Cloud Computing.'
    });
    
    const [isJumping, setIsJumping] = useState(!!state?.scrollTo);

    useLayoutEffect(() => {
        if (state?.scrollTo) {
            document.body.classList.add('skip-animations');
        }
    }, [state]);

    useEffect(() => {
        const targetId = state?.scrollTo || null;

        if (!targetId) {
            setIsJumping(false);
            return;
        }

        setTimeout(() => {
            if (targetId === 'home') {
                window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
            } else {
                const element = document.getElementById(targetId);
                if (element) {
                    // Manual offset for the fixed navbar (≈72px) so section never hides behind it
                    const navbarHeight = document.querySelector('header, nav')?.offsetHeight ?? 72;
                    const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
                    window.scrollTo({ top, behavior: 'auto' });
                }
            }
            setIsJumping(false);
        }, 50);

        if (window.history.state && window.history.state.usr) {
            const newHistoryState = { ...window.history.state };
            if (newHistoryState.usr.scrollTo) {
                delete newHistoryState.usr.scrollTo;
                window.history.replaceState(newHistoryState, '');
            }
        }
    }, [state]);

    useEffect(() => {
        return () => document.body.classList.remove('skip-animations');
    }, []);

    return (
        <div style={{ visibility: isJumping ? 'hidden' : 'visible' }}>
            <main>
                {/* Hero is always visible — no reveal needed */}
                <Hero darkMode={darkMode} />

                <Reveal><About /></Reveal>
                <Reveal><Education /></Reveal>
                <Reveal><Portfolio /></Reveal>
                <Reveal><Experience /></Reveal>
                <Reveal><Activities /></Reveal>
                <Reveal><Goals /></Reveal>
                <Reveal><Resume /></Reveal>
                <Reveal><Contact /></Reveal>
                <Reveal><Footer /></Reveal>
            </main>
            <QuickNav />
        </div>
    )
}

