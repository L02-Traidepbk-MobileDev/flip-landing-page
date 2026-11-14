import { useEffect, useRef, useState } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import './Screen.css';

const screens = [
    {
        image: '/images/screens/auth.png',
        title: 'Bắt đầu cùng Flip',
        description: 'Đăng nhập để khám phá.',
        alt: 'Màn hình đăng nhập của Flip',
    },
    {
        image: '/images/screens/check-in.png',
        title: 'Bạn đang ở đâu?',
        description: 'Check-in tại địa điểm của bạn.',
        alt: 'Màn hình check-in của Flip',
    },
    {
        image: '/images/screens/moment.png',
        title: 'Một chút về hôm nay',
        description: 'Chia sẻ khoảnh khắc của bạn.',
        alt: 'Màn hình đăng khoảnh khắc của Flip',
    },
    {
        image: '/images/screens/discovery.png',
        title: 'Có ai cũng ở đây?',
        description: 'Khám phá những khoảnh khắc hợp gu.',
        alt: 'Màn hình khám phá của Flip',
    },
    {
        image: '/images/screens/match.png',
        title: 'Hai phía, một kết nối',
        description: 'Khi cả hai cùng Like.',
        alt: 'Màn hình thông báo match của Flip',
    },
    {
        image: '/images/screens/chat.png',
        title: 'Bắt đầu bằng lời chào',
        description: 'Trò chuyện sau khi match.',
        alt: 'Màn hình trò chuyện của Flip',
    },
    {
        image: '/images/screens/profile.png',
        title: 'Một chút về bạn',
        description: 'Quản lý hồ sơ cá nhân.',
        alt: 'Màn hình hồ sơ của Flip',
    },
];

function ScreensSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const animationLock = useRef(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        }, 500);
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
            number: index + 1,
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
                    <div>
                        <p className="screens-label">MỘT VÒNG QUANH FLIP</p>

                        <h2 className="screens-title" id="screens-title">
                            Một chút tò mò. <em>Mở ra nhiều câu chuyện.</em>
                        </h2>

                        <p className="screens-description">
                            Khám phá Flip qua những màn hình bên dưới.
                        </p>
                    </div>

                    <div className="screens-controls">
                        <button
                            type="button"
                            onClick={() => moveScreens(-1)}
                            disabled={isAnimating}
                            aria-label="Xem giao diện trước"
                            aria-controls="screens-gallery"
                        >
                            <ArrowBackRoundedIcon aria-hidden="true" />
                        </button>

                        <button
                            type="button"
                            onClick={() => moveScreens(1)}
                            disabled={isAnimating}
                            aria-label="Xem giao diện tiếp theo"
                            aria-controls="screens-gallery"
                        >
                            <ArrowForwardRoundedIcon aria-hidden="true" />
                        </button>
                    </div>
                </div>

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
                            <figure className="screen-figure">
                                <div className="screen-phone">
                                    <img
                                        src={screen.image}
                                        alt={screen.alt}
                                        width={390}
                                        height={844}
                                        draggable={false}
                                    />
                                </div>

                                <figcaption className="screen-caption">
                                    <span className="screen-number">
                                        {String(screen.number).padStart(2, '0')}
                                    </span>

                                    <h3>{screen.title}</h3>
                                    <p>{screen.description}</p>
                                </figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>

                <p
                    className="screens-hint"
                    role="status"
                    aria-atomic="true"
                >
                    Giao diện {currentIndex + 1} / {screens.length}
                    <span> · Nhấn mũi tên để khám phá tiếp</span>
                </p>
            </div>
        </section>
    );
}

export default ScreensSection;