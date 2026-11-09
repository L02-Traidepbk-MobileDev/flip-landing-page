import { useState } from 'react';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import "./Hero.css";

import windowImage from '../assets/images/hero/window.jpg';
import coffeeImage from '../assets/images/hero/coffee.jpg';
import nightImage from '../assets/images/hero/night.jpg';
import envelopeImage from '../assets/images/hero/envelope.png';
import badgeImage from '../assets/images/hero/badge.png';


const moments = [
    {
        image: windowImage,
        location: "Chill Corner",
        nickname: "Con mèo kêu sao",
        caption: "Sunshine",
        alt: "Một góc cửa sổ nhìn ra bên ngoài",
    },
    {
        image: coffeeImage,
        location: "Meomeow Coffee",
        nickname: "Fan cuồng cà phê Laura",
        caption: "Dating girls",
        alt: "Check-in tại quán cà phê",
    },
    {
        image: nightImage,
        location: "HCMUT",
        nickname: "Kiếp nạn thứ 36",
        caption: "OT til die",
        alt: "Thành phố về đêm nhìn từ trên cao",
    }
]

function HeroSection() {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const currentMoment = moments[currentIndex];

    function nextMoment() {
        setCurrentIndex((currentIndex + 1) % moments.length);
    }

    return (
        <section className="hero" aria-labelledby="hero-title" id="home">
            {/* Left */}
            <div className="hero-content">
                <p className="hero-label">
                    A LITTLE CURIOSITY. A NEW CONNECTION.
                </p>

                <h1 className="hero-title" id="hero-title">
                    <span>Same place.</span>
                    <em>
                        Different stories.
                    </em>
                </h1>

                <p className="hero-subtitle">
                    Một ly cà phê - một góc cửa sổ - một người cũng ở đây
                    <br />
                    Mọi kết nối đều có thể bắt đầu từ điều rất nhỏ
                </p>

                <p className="hero-slogan">
                    No check-in. No discovery.
                </p>
            </div>
        
            {/* Right */}
            <div className="hero-preview">
                <div className="moment-stage">
                    <img
                        src={envelopeImage}
                        className="moment-envelope"
                        alt=""
                        aria-hidden="true"
                    />

                    <div className="moment-backdrop" aria-hidden="true" />

                    <div className="moment-stamp" aria-hidden="true">
                        <img src={badgeImage} className="badge" alt="" />
                    </div>

                    <button
                        type="button"
                        className="moment-card"
                        onClick={nextMoment}
                        aria-label={`${currentMoment.caption}. Nhấn để xem khoảnh khắc tiếp theo`}
                    >
                        <img
                            className="moment-card-image"
                            src={currentMoment.image}
                            alt={currentMoment.alt}
                        />

                        <span className="moment-card-top">
                            <span className="moment-anonymous">Anonymous</span>

                            <span className="moment-progress">
                                {currentIndex + 1}/{moments.length}
                            </span>
                        </span>

                        <span className="moment-card-bottom">
                            <span className="moment-caption">
                                {currentMoment.caption}
                            </span>

                            {currentMoment.location && (
                                <span className="moment-place">
                                    <PlaceOutlinedIcon
                                        sx={{ fontSize: 18, color: '#E91E63', flexShrink: 0 }}
                                    />
                                    {currentMoment.location}
                                </span>
                            )}
                        </span>
                    </button>
                </div>

                <div className="moment-footer">
                    <p className="moment-counter" aria-live="polite" aria-atomic="true">
                        <strong>
                            {String(currentIndex + 1).padStart(2, '0')}
                        </strong>
                        <span>/ {String(moments.length).padStart(2, '0')}</span>
                    </p>

                    <p className="moment-hint">
                        Chạm vào thẻ để xem khoảnh khắc khác
                    </p>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;