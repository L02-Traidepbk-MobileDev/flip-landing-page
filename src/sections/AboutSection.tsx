import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './About.css';

const highlights = [
    {
        icon: LocationOnOutlinedIcon,
        title: 'Có sẵn một điểm chung',
        description:
            'Cùng một không gian, cùng một thời điểm - câu chuyện có thể bắt đầu từ điều cả hai đang trải nghiệm',
    },
    {
        icon: PhotoCameraOutlinedIcon,
        title: 'Làm quen từ một khoảnh khắc',
        description:
            'Chia sẻ một khoảnh khắc ẩn danh, thay vì phải nghĩ cách giới thiệu bản thân thật ấn tượng ngay từ đầu',
    },
    {
        icon: FavoriteBorderOutlinedIcon,
        title: 'Biết cả hai đều muốn kết nối',
        description:
            'Chỉ trò chuyện khi cả hai cùng Like, giúp bạn bớt lo mình đang làm phiền người chưa muốn kết nối',
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
                        Muốn bắt chuyện với một người cùng quán cà phê hay thư viện, nhưng lại ngại làm phiền hoặc bị từ chối?
                    </p>

                    <p className="about-description">
                        Flip dành cho người trẻ, đặc biệt là sinh viên muốn mở rộng kết nối tại những không gian công cộng nhưng còn ngại chủ động tiếp cận người lạ
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