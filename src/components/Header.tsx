import { useState } from 'react';

import './Header.css';

const menuItems = [
    { href: '#home', label: 'Trang chủ' },
    { href: '#about', label: 'Giới thiệu' }, 
    { href: '#features', label: 'Điểm nổi bật' },
    { href: '#how-it-works', label: 'Cách hoạt động' },
    { href: '#screens', label: 'Giao diện' },
    { href: '#faq', label: 'Q&A' },
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header
            className="header"
            onKeyDown={(event) => {
                if (event.key === 'Escape') {
                    closeMenu();
                }
            }}
        >
            <a
                href="#home"
                className="header-logo"
                aria-label="Flip — Trang chủ"
                onClick={closeMenu}
            >
                <img
                    src={`${import.meta.env.BASE_URL}logo.png`}
                    alt="Flip"
                />
            </a>

            <button
                type="button"
                className="header-menu-toggle"
                aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
                aria-expanded={isMenuOpen}
                aria-controls="header-navigation"
                onClick={() => setIsMenuOpen((previous) => !previous)}
            >
                <span aria-hidden="true">{isMenuOpen ? '✕' : '☰'}</span>
            </button>

            <nav
                id="header-navigation"
                className={`header-nav ${isMenuOpen ? 'is-open' : ''}`}
                aria-label="Menu chính"
            >
                {menuItems.map((item) => (
                    <a key={item.href} href={item.href} onClick={closeMenu}>
                        {item.label}
                    </a>
                ))}
            </nav>

            <span className="header-status">
                Coming soon
            </span>
        </header>
    );
}

export default Header;