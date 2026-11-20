import SouthWestRoundedIcon from '@mui/icons-material/SouthWestRounded';

import './Features.css';

const features = [
{
    title: 'Cùng một địa điểm',
    description: 'Khám phá người cùng nơi bạn check-in, không hiển thị tọa độ hay khoảng cách chính xác.',
},

{
    title: 'Ẩn danh trong 2 giờ',
    description: 'Chia sẻ ảnh cùng vài dòng cảm xúc. Khoảnh khắc tự hết hạn sau 2 giờ.',
},

{
    title: 'Cùng Like, mới Chat',
    description: 'Like hoặc Pass theo cảm nhận. Cuộc trò chuyện chỉ mở khi cả hai cùng thích.',
},

{
    title: 'Kết nối có trách nhiệm',
    description: 'Báo cáo nội dung không phù hợp, cùng giữ một không gian làm quen tôn trọng nhau.',
}
];

function FeaturesSection() {
    return (
        <section className="features" id="features" aria-labelledby="features-title"> 
            <div className="features-container" > 
                <div className="features-heading" > 
                    <p className="features-label" >WHY FLIP?</p> 
                    <h2 className="features-title" id="features-title" > 
                        Một chút khác biệt, <em> Để gần nhau hơn</em> 
                    </h2> 
                    <p className="features-description" > 
                        Không cần một hồ sơ thật ấn tượng hay một lời mở đầu hoàn hảo. 
                        Flip tạo thêm cơ hội kết nối từ những điều gần gũi nhất. 
                    </p> 
                    <a className="features-link" href="#screens" > 
                        Khám phá giao diện 
                        <span aria-hidden="true" >
                            <SouthWestRoundedIcon />
                        </span> 
                    </a> 
                </div> 

                <ul className="features-grid" > {
                    features.map((feature) => {
                        return (
                            <li className="feature-card" key={ feature.title }> 
                            <h3>{ feature.title }</h3> 
                            <p className="feature-description" >{feature.description }</p> 
                        </li>
                        );
                    })
                }
                </ul>
            </div>
        </section>
    );
}

export default FeaturesSection;