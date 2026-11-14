import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import './HowItWorks.css';

const steps = [
    {
        icon: LocationOnOutlinedIcon,
        title: 'Check-in',
        description:
            'Xác nhận địa điểm để khám phá những người đang ở cùng không gian với bạn.',
        note: 'Cùng nơi, cùng thời điểm',
    },
    {
        icon: PhotoCameraOutlinedIcon,
        title: 'Chia sẻ khoảnh khắc',
        description:
            'Chia sẻ ảnh ẩn danh. Khoảnh khắc tự hết hạn sau 2 giờ.',
        note: 'Một góc nhỏ trong ngày',
    },
    {
        icon: FavoriteBorderOutlinedIcon,
        title: 'Khám phá',
        description:
            'Like nếu thấy hợp gu, Pass để khám phá tiếp.',
        note: 'Biết đâu, cùng một gu',
    },
    {
        icon: ChatBubbleOutlineOutlinedIcon,
        title: 'Cùng nhau trò chuyện',
        description:
            'Khi cả hai cùng Like, cuộc trò chuyện sẽ được mở ra.',
        note: 'Kết nối từ hai phía',
    },
];

function HowItWorksSection() {
    return (
        <section
            className="how"
            id="how-it-works"
            aria-labelledby="how-title"
        >
            <div className="how-container">
                <div className="how-heading">
                    <p className="how-label">HOW FLIP WORKS</p>

                    <h2 className="how-title" id="how-title">
                        Từ một khoảnh khắc,
                        <br />
                        <em>đến một lời chào.</em>
                    </h2>
                </div>

                <ol className="how-steps">
                    {steps.map((step, index) => (
                        <li className="how-step" key={step.title}>
                            <div className="how-step-top">
                                <h3>{step.title}</h3>

                                <span className="how-number" aria-hidden="true">
                                    0{index + 1}
                                </span>
                            </div>

                            <p className="how-step-description">
                                {step.description}
                            </p>

                            <p className="how-note">{step.note}</p>
                        </li>
                    ))}
                </ol>

                <p className="how-footer">
                    Không cần nghĩ một lời mở đầu hoàn hảo
                    <br />
                    <strong>Cứ bắt đầu từ khoảnh khắc của bạn</strong>
                </p>
            </div>
        </section>
    );
}

export default HowItWorksSection;