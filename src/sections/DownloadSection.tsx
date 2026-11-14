import AndroidIcon from '@mui/icons-material/Android';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

import './Download.css';

import Phone1 from '../assets/images/download/phone1.png';
import Phone2 from '../assets/images/download/phone2.png';
import CupidImage from '../assets/images/cupid.png';

const APK_URL: string = '';

function DownloadSection() {
    const isAvailable = APK_URL.trim().length > 0;
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <section
            className="download"
            id="download"
            aria-labelledby="download-title"
        >
            <div className="download-banner">
                <div className="download-content">
                    <p className="download-label">
                        {isAvailable
                            ? 'ĐÃ CÓ MẶT TRÊN ANDROID'
                            : 'SẮP CÓ MẶT TRÊN ANDROID'}
                    </p>

                    <h2
                        className="download-title"
                        id="download-title"
                    >
                        Một khoảnh khắc nhỏ,
                        <em>Một lời chào mới.</em>
                    </h2>

                    <div className="download-actions">
                        {isAvailable ? (
                            <a
                                className="download-button"
                                href={APK_URL}
                                download
                            >
                                <DownloadRoundedIcon
                                    aria-hidden="true"
                                />
                                Tải APK cho Android
                            </a>
                        ) : (
                            <button
                                className="download-button"
                                type="button"
                                disabled
                            >
                                <AndroidIcon aria-hidden="true" />
                                Coming soon
                            </button>
                        )}

                        <p className="download-note">
                            {isAvailable
                                ? 'Bản cài đặt dành cho thiết bị Android'
                                : 'Phiên bản Android đang được phát triển'}
                        </p>
                    </div>
                </div>

                <div className="download-visual">
                    <img
                        className="download-phone download-phone-match"
                        src={Phone2}
                        alt="Màn hình kết nối khi hai người cùng Like"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                    />

                    <img
                        className="download-phone download-phone-welcome"
                        src={Phone1}
                        alt="Màn hình chào mừng của Flip"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                    />

                    <img
                        className="download-cupid"
                        src={CupidImage}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                    />
                </div>
            </div>
        </section>
    );
}

export default DownloadSection;