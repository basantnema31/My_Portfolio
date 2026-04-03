import { useEffect } from 'react';

/**
 * Custom hook to manage SEO metadata dynamically.
 * Updates document title and meta description without affecting the UI.
 */
export const useSEO = ({ title, description }) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }

        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            
            // If the tag doesn't exist, create it dynamically
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.name = 'description';
                document.head.appendChild(metaDescription);
            }
            
            metaDescription.setAttribute('content', description);
        }
    }, [title, description]);
};
