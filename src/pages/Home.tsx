import React from "react";
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className='home'>
            <div className='header'>
                <h2>Nhanh chóng, sạch sẽ và ngon miệng!</h2>
                <p>Hãy để chúng tôi mang đến cho bạn những bữa ăn chất lượng, được chế biến từ nguyên liệu tươi ngon
                    nhất. Chọn từ thực đơn đa dạng với nhiều món ăn phong phú, từ truyền thống đến hiện đại, đảm bảo làm
                    hài lòng mọi khẩu vị. Đặt hàng ngay hôm nay và trải nghiệm dịch vụ giao hàng tuyệt vời của chúng
                    tôi!</p>
            </div>
        </div>
    );
}

export default Home;
