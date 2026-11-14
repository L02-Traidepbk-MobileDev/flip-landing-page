import { useEffect, useRef, useState } from 'react';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

import './Screen.css';

import Screen1 from '../assets/images/screens/01-begin.jpg';
import Screen2 from '../assets/images/screens/02-checkin.png';
import Screen3 from '../assets/images/screens/03-moment.png';
import Screen4 from '../assets/images/screens/04-discovery.png';
import Screen5 from '../assets/images/screens/05-match.jpg';
import Screen6 from '../assets/images/screens/06-chat.png';
import Screen7 from '../assets/images/screens/07-bio.jpg';

const FIGMA_URL = 'https://www.figma.com/design/9uEJoNMUDG2l35DSSNmpHw/Flip---L02-Traidepbk?node-id=0-1&t=UyNndVK7sB9Jqq2M-1';
const BEHANCE_URL = 'https://www.behance.net/';

const TRANSITION_DURATION = 550;

const screens = [
    {
        image: Screen1,
        title: 'Bắt đầu cùng Flip',
        description: 'Đăng nhập để khám phá',
    },
    {
        image: Screen2,
        title: 'Bạn đang ở đâu?',
        description: 'Check-in tại địa điểm của bạn',
    },
    {
        image: Screen3,
        title: 'Một chút về hôm nay',
        description: 'Chia sẻ khoảnh khắc của bạn',
    },
    {
        image: Screen4,
        title: 'Có ai cũng ở đây?',
        description: 'Khám phá những khoảnh khắc hợp gu',
    },
    {
        image: Screen5,
        title: 'Hai phía, một kết nối',
        description: 'Khi cả hai cùng Like',
    },
    {
        image: Screen6,
        title: 'Bắt đầu bằng lời chào',
        description: 'Trò chuyện sau khi match',
    },
    {
        image: Screen7,
        title: 'Một chút về bạn',
        description: 'Quản lý hồ sơ cá nhân',
    },
];

function ScreensSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const animationLock = useRef(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const currentScreen = screens[currentIndex];

    useEffect(() => {
        return () => {
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    function moveScreens(step: number) {
        if (animationLock.current) return;

        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (reduceMotion) {
            setCurrentIndex(
                (previous) =>
                    (previous + step + screens.length) % screens.length
            );
            return;
        }

        animationLock.current = true;
        setDirection(step);
        setIsAnimating(true);

        timerRef.current = setTimeout(() => {
            setCurrentIndex(
                (previous) =>
                    (previous + step + screens.length) % screens.length
            );

            setDirection(0);
            setIsAnimating(false);
            animationLock.current = false;
            timerRef.current = null;
        }, TRANSITION_DURATION);
    }

    const visibleScreens = [-2, -1, 0, 1, 2].map((offset) => {
        const index =
            (currentIndex + offset + screens.length) % screens.length;

        const position = offset - (isAnimating ? direction : 0);

        let positionClass: string;

        if (position < -1) {
            positionClass = 'is-out-left';
        } else if (position > 1) {
            positionClass = 'is-out-right';
        } else if (position === -1) {
            positionClass = 'is-left';
        } else if (position === 1) {
            positionClass = 'is-right';
        } else {
            positionClass = 'is-center';
        }

        return {
            ...screens[index],
            positionClass,
        };
    });

    return (
        <section
            className="screens"
            id="screens"
            aria-labelledby="screens-title"
        >
            <div className="screens-container">
                <div className="screens-heading">
                    <div className="screens-heading-content">
                        <p className="screens-label">WHAT FLIP LOOKS LIKE</p>

                        <h2 className="screens-title" id="screens-title">
                            Một chút tò mò,
                            <em>Mở ra nhiều câu chuyện.</em>
                        </h2>

                        <p className="screens-description">
                            Khám phá Flip qua những màn hình bên dưới.
                        </p>
                    </div>

                    <div className="screens-design-links">
                        <a
                            href={FIGMA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Xem prototype trên Figma — mở tab mới"
                        >
                            Figma
                            <ArrowOutwardRoundedIcon aria-hidden="true" />
                        </a>

                        <a
                            href={BEHANCE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Xem case study trên Behance — mở tab mới"
                        >
                            Behance
                            <ArrowOutwardRoundedIcon aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <div className="screens-carousel">
                    <button
                        type="button"
                        className="screens-arrow screens-arrow-left"
                        onClick={() => moveScreens(-1)}
                        disabled={isAnimating}
                        aria-label="Xem giao diện trước"
                        aria-controls="screens-gallery"
                    >
                        <ArrowBackRoundedIcon aria-hidden="true" />
                    </button>

                    <ul
                        className={`screens-gallery ${isAnimating ? 'is-animating' : ''
                            }`}
                        id="screens-gallery"
                        aria-label="Giao diện ứng dụng Flip"
                    >
                        {visibleScreens.map((screen) => (
                            <li
                                className={`screen-item ${screen.positionClass}`}
                                key={screen.image}
                                aria-hidden={screen.positionClass !== 'is-center'}
                            >
                                <div className="screen-phone">
                                    <img
                                        src={screen.image}
                                        width={390}
                                        height={844}
                                        draggable={false}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        className="screens-arrow screens-arrow-right"
                        onClick={() => moveScreens(1)}
                        disabled={isAnimating}
                        aria-label="Xem giao diện tiếp theo"
                        aria-controls="screens-gallery"
                    >
                        <ArrowForwardRoundedIcon aria-hidden="true" />
                    </button>
                </div>

                <div
                    className={`screens-caption ${isAnimating ? 'is-changing' : ''
                        }`}
                >
                    <h3>
                        <span>{String(currentIndex + 1).padStart(2, '0')}</span>
                        <span aria-hidden="true"> · </span>
                        {currentScreen.title}
                    </h3>

                    <p>{currentScreen.description}</p>
                </div>

                <p
                    className="screens-counter"
                    role="status"
                    aria-atomic="true"
                >
                    <span className="screens-sr-only">Giao diện </span>
                    <strong>
                        {String(currentIndex + 1).padStart(2, '0')}
                    </strong>
                    <span>/</span>
                    <span>{String(screens.length).padStart(2, '0')}</span>
                </p>
            </div>
        </section>
    );
}

export default ScreensSection;