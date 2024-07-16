import React from 'react';
import './About.css';

const About: React.FC = () => {
    return(
        <div className="container mt-5">
            <h2>Tại sao nên chọn DonLunch</h2>
            <section className="section section-benefits d-flex">
                <div className="col-4">
                    <div className="card benefit-card">
                        <i className="fas fa-utensils"></i>
                        <h3>Đa dạng món ăn</h3>
                        <p>Thực đơn phong phú, đáp ứng mọi khẩu vị, từ món mặn, món chay đến các món tráng miệng.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card benefit-card">
                        <i className="fas fa-check-circle"></i>
                        <h3>Chất lượng đảm bảo</h3>
                        <p>Nguyên liệu tươi ngon, đảm bảo vệ sinh an toàn thực phẩm.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card benefit-card">
                        <i className="fas fa-dollar-sign"></i>
                        <h3>Giá cả hợp lý</h3>
                        <p>Mức giá cạnh tranh, phù hợp với nhiều đối tượng khách hàng.</p>
                    </div>
                </div>
            </section>
            <section className="d-flex">
                <div className="col-4">
                    <div className="card benefit-card">
                        <i className="fas fa-clock"></i>
                        <h3>Nhanh chóng</h3>
                        <p>Giao hàng nhanh chóng, đúng giờ, đảm bảo chất lượng món ăn.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card benefit-card">
                        <i className="fas fa-truck"></i>
                        <h3>Tận nơi</h3>
                        <p>Giao hàng tận nơi, miễn phí vận chuyển trong khu vực Làng Đại Học.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card benefit-card">
                        <i className="fas fa-headset"></i>
                        <h3>Lắng nghe</h3>
                        <p>Luôn lắng nghe mọi ý kiến khách hàng để cải thiện chất lượng dịch vụ</p>
                    </div>
                </div>
            </section>
            <section className="mb-5">
                <h2 className="mb-3">FAQ</h2>
                <div className="d-flex">
                    <div className="col 4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Phạm vi giao hàng ở đâu ?</h5>
                                <p className="card-text">Chúng tôi hiển chỉ giao hàng ở Thủ Đức và xung quanh Làng Đại
                                    Học
                                    để đảm bảo về thời gian và chất lượng thực phẩm.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col 4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Thời gian nhận đơn là khi nào ?</h5>
                                <p className="card-text">Chúng tôi nhận đơn đặt hàng từ 6h-21h từ T2-T7.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col 4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Làm thế nào để đặt hàng ?</h5>
                                <p className="card-text">Bạn có thể đặt hàng trực tiếp trên trang web của chúng tôi bằng
                                    cách thêm các món ăn vào giỏ
                                    hàng. Ngoài ra có thể liên hệ hotline 0385639584 để đặt món hoặc đặt tiệc ở khu vực
                                    HCM.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col 4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Chính sách đổi trả như thế nào ?</h5>
                                <p className="card-text">Nếu bạn phát hiện sản phẩm không đúng yêu cầu hoặc giao hàng
                                    trễ do lỗi từ phía chúng tôi,
                                    chúng tôi sẽ hoàn trả lại tiền cho bạn.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-5">
                <h2 className="mb-3">Liên hệ</h2>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="contact-info">
                            <h4> <i className="fa fa-envelope"></i> Email</h4>
                            <p>contact@DolLunch.com</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="contact-info">
                            <h4><i className="fa fa-phone"></i> Hotline</h4>
                            <p>0385 639 XXX</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="contact-info">
                            <h4><i className="fa fa-location"></i> Địa chỉ</h4>
                            <p>XXX Đ. số 17, Phường Linh Trung, Thủ Đức, Hồ Chí Minh</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default About;