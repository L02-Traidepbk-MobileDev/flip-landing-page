import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './About.css';

const highlights = [
    {
        icon: LocationOnOutlinedIcon,
        title: 'Có sẵn một điểm chung',
        description:
            'Cùng một quán cà phê, thư viện hay góc tự học — bạn đã có một điều để bắt đầu câu chuyện',
    },
    {
        icon: PhotoCameraOutlinedIcon,
        title: 'Làm quen từ một khoảnh khắc',
        description:
            'Một bức ảnh ẩn danh để chia sẻ điều bạn đang trải nghiệm, không cần nghĩ ngay một lời mở đầu thật hay',
    },
    {
        icon: FavoriteBorderOutlinedIcon,
        title: 'Biết cả hai đều muốn kết nối',
        description:
            'Chỉ mở trò chuyện khi cả hai cùng Like, giúp bạn bớt lo sự quan tâm chỉ đến từ một phía',
    },
];

function AboutSection() {
    return (
        <section
            className="about"
            id="about"
            aria-labelledby="about-title"
        >
            <div className="about-container">
                <div className="about-content">
                    <p className="about-label">WHY FLIP?</p>

                    <h2 className="about-title" id="about-title">
                        Muốn làm quen
                        <br />
                        <em>Ngại mở lời?</em>
                    </h2>

                    <p className="about-description">
                        Flip giúp bước đầu bớt ngại ngùng: Chia sẻ một khoảnh khắc, khám phá những người cùng địa điểm và kết nối khi sự quan tâm đến từ cả hai phía
                    </p>

                    <p className="about-message">
                        Một lời chào có thể bắt đầu từ điều rất nhỏ
                    </p>
                </div>

                <div className="about-highlights">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <article className="about-item" key={item.title}>
                                <span className="about-icon">
                                    <Icon aria-hidden="true" />
                                </span>

                                <div className="about-item-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default AboutSection;