import GitHubIcon from '@mui/icons-material/GitHub';

import './Footer.css';

import Logo from '../assets/flip-logo.png';

const sections = [
    { href: '#about', label: 'Về Flip' },
    { href: '#features', label: 'Điểm nổi bật' },
    { href: '#how-it-works', label: 'Cách hoạt động' },
    { href: '#screens', label: 'Giao diện' },
    { href: '#download', label: 'Trải nghiệm Flip' },
];

const projectLinks = {
    github: 'https://github.com/L02-Traidepbk-MobileDev',
    figma: 'https://www.figma.com/design/yr3gjsYqZvOF4a8z3GoTZw/Flip-Figma-Temporary',
    behance: 'https://www.behance.net/',
};

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a
                            className="footer-logo-link"
                            href="#home"
                            aria-label="Flip — Trang chủ"
                        >
                            <img
                                className="footer-logo"
                                src={Logo}
                                alt="Flip"
                                loading="lazy"
                            />
                        </a>

                        <p className="footer-slogan">
                            Flip - Anonymous Location-based Social Matching
                        </p>

                        <p className="footer-description">
                            No check-in, No discovery
                        </p>

                        <div
                            className="footer-socials"
                            aria-label="Liên kết dự án"
                        >
                            {projectLinks.github && (
                                <a
                                    href={projectLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub nhóm TraidepBk"
                                    title="GitHub"
                                >
                                    <GitHubIcon aria-hidden="true" />
                                </a>
                            )}

                            <a
                                href={projectLinks.figma}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Figma dự án Flip"
                                title="Figma"
                            >
                                <svg
                                    width="18"
                                    height="26"
                                    viewBox="0 0 18 27"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="
                                            M9 0H4.5
                                            A4.5 4.5 0 0 0 4.5 9
                                            H9V0Z
                                        "
                                        fill="currentColor"
                                    />
                                    <path
                                        d="
                                            M9 0H13.5
                                            A4.5 4.5 0 0 1 13.5 9
                                            H9V0Z
                                        "
                                        fill="currentColor"
                                        opacity="0.7"
                                    />
                                    <path
                                        d="
                                            M9 9H4.5
                                            A4.5 4.5 0 0 0 4.5 18
                                            H9V9Z
                                        "
                                        fill="currentColor"
                                        opacity="0.8"
                                    />
                                    <circle
                                        cx="13.5"
                                        cy="13.5"
                                        r="4.5"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="
                                            M9 18H4.5
                                            A4.5 4.5 0 1 0 9 22.5
                                            V18Z
                                        "
                                        fill="currentColor"
                                        opacity="0.7"
                                    />
                                </svg>
                            </a>

                            {projectLinks.behance && (
                                <a
                                    href={projectLinks.behance}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Behance dự án Flip"
                                    title="Behance"
                                >
                                    <span
                                        className="footer-behance"
                                        aria-hidden="true"
                                    >
                                        Bē
                                    </span>
                                </a>
                            )}
                        </div>
                    </div>

                    <nav
                        className="footer-column"
                        aria-label="Khám phá Flip"
                    >
                        <h2 className="footer-heading">
                            Khám phá Flip
                        </h2>

                        <ul className="footer-links">
                            {sections.map((section) => (
                                <li key={section.href}>
                                    <a href={section.href}>
                                        {section.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="footer-column">
                        <h2 className="footer-heading">
                            Giới thiệu
                        </h2>

                        <p className="footer-project">
                            Dự án Flip – Anonymous Location-based Social Matching
                        </p>

                        <p className="footer-team">
                            Nhóm thực hiện: TraidepBk - Lớp L02
                        </p>

                        <p className="footer-course">
                            Môn học: CO4034 - Mobile Application Development
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Flip. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;