import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import './HowItWorks.css';

const steps = [
    {
        icon: LocationOnOutlinedIcon,
        title: 'Check-in nơi bạn đang ở',
        description:
            'Xác nhận địa điểm để khám phá những người đang ở cùng không gian với bạn.',
        note: 'Cùng nơi, cùng thời điểm',
    },
    {
        icon: PhotoCameraOutlinedIcon,
        title: 'Chia sẻ một khoảnh khắc',
        description:
            'Chụp một bức ảnh, thêm vài dòng cảm xúc và xuất hiện ẩn danh. Khoảnh khắc hết hạn sau 2 giờ.',
        note: 'Một góc nhỏ trong ngày',
    },
    {
        icon: FavoriteBorderOutlinedIcon,
        title: 'Khám phá và bày tỏ',
        description:
            'Xem khoảnh khắc tại địa điểm của bạn. Like nếu thấy hợp gu, hoặc Pass để xem người tiếp theo.',
        note: 'Biết đâu, cùng một gu',
    },
    {
        icon: ChatBubbleOutlineOutlinedIcon,
        title: 'Cùng Like, cùng trò chuyện',
        description:
            'Khi cả hai cùng Like, Flip mở cuộc trò chuyện để bạn bắt đầu bằng một lời chào.',
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
                    <p className="how-label">CÁCH FLIP HOẠT ĐỘNG</p>

                    <h2 className="how-title" id="how-title">
                        Từ một khoảnh khắc,
                        <br />
                        <em>đến một lời chào.</em>
                    </h2>
                </div>

                <ol className="how-steps">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <li className="how-step" key={step.title}>
                                <div className="how-step-top">
                                    <span className="how-icon">
                                        <Icon aria-hidden="true" />
                                    </span>

                                    <span className="how-number" aria-hidden="true">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3>{step.title}</h3>
                                <p className="how-step-description">
                                    {step.description}
                                </p>

                                <p className="how-note">{step.note}</p>
                            </li>
                        );
                    })}
                </ol>

                <p className="how-footer">
                    Không cần nghĩ một lời mở đầu hoàn hảo.
                    <br />
                    <strong>Cứ bắt đầu từ khoảnh khắc của bạn.</strong>
                </p>
            </div>
        </section>
    );
}

export default HowItWorksSection;