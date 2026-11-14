import { useEffect, useState } from 'react';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import './BackToTop.css';

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hero = document.getElementById('home');

        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        observer.observe(hero);

        return () => observer.disconnect();
    }, []);

    function scrollToTop() {
        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        window.scrollTo({
            top: 0,
            behavior: reduceMotion ? 'instant' : 'smooth',
        });
    }

    return (
        <button
            type="button"
            className={`back-to-top ${isVisible ? 'is-visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Về đầu trang"
            aria-hidden={!isVisible}
            tabIndex={isVisible ? 0 : -1}
            disabled={!isVisible}
        >
            <KeyboardArrowUpRoundedIcon aria-hidden="true" />
        </button>
    );
}

export default BackToTop;