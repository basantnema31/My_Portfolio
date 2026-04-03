import { ArrowUp } from 'lucide-react'

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-gray-200 dark:border-[#262626]">
            <div className="container mx-auto 2xl:max-w-[1536px] px-4 h-12 flex items-center justify-between text-sm text-gray-500 dark:text-[#a3a3a3]">
                <span className="hover:text-gray-900 dark:hover:text-[#fafafa] transition-colors cursor-default">
                    © {new Date().getFullYear()} Developed with ❤️ by Basant Nema
                </span>

                <div className="flex items-center gap-4">
                    <div className="w-px h-4 bg-gray-200 dark:bg-[#262626]" />
                    <button
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="h-8 w-8 flex items-center justify-center rounded-md text-gray-500 dark:text-[#a3a3a3] hover:bg-gray-100 dark:hover:bg-[#262626] hover:text-gray-900 dark:hover:text-[#fafafa] transition-all duration-200"
                    >
                        <ArrowUp size={16} strokeWidth={2} />
                    </button>
                </div>
            </div>
        </footer>
    )
}
