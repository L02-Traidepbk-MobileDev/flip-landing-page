import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Thông tin chính */}
                <div className="footer-main">
                    <div className="footer-brand">
                        <a href="#home" aria-label="Flip — Về đầu trang">
                            <img
                                className="footer-logo"
                                src="/logo.png"
                                alt="Flip"
                            />
                        </a>

                        <p className="footer-tagline">
                            Same place. Different stories.
                        </p>

                        <p className="footer-description">
                            Kết nối qua khoảnh khắc,
                            <br />
                            bắt đầu bằng sự quan tâm từ hai phía.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h3>Khám phá Flip</h3>

                        <nav
                            className="footer-nav"
                            aria-label="Điều hướng cuối trang"
                        >
                            <a href="#about">Về Flip</a>
                            <a href="#features">Điểm nổi bật</a>
                            <a href="#how-it-works">Cách hoạt động</a>
                            <a href="#screens">Giao diện</a>
                        </nav>
                    </div>

                    <div className="footer-column">
                        <h3>Về dự án</h3>

                        <p className="footer-project-name">Traidepbk</p>

                        <p className="footer-project-description">
                            Dự án môn học
                            <br />
                            Mobile Application Development
                            <br />
                            CO3043
                        </p>

                        <span className="footer-status">
                            <span aria-hidden="true" />
                            Đang phát triển
                        </span>
                    </div>
                </div>

                {/* Dòng cuối */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Flip · Traidepbk</p>

                    <p className="footer-signature">
                        Bớt một chút ngại. Thêm một lời chào.
                    </p>

                    <a className="footer-back-top" href="#home">
                        Về đầu trang
                        <ArrowUpwardRoundedIcon aria-hidden="true" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;