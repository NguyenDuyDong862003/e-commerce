import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import './Checkout.css';
import {ThongTinNhanHang} from "./ThongTinNhanHang";


function Checkout() {
    const cart = useSelector((state: any) => state.cart);

    // Tính tổng số sản phẩm được checkout và tổng số tiền
    const sumItem = cart.reduce((sum: number, item: any) => item.isCheckout ? sum + item.quantity : sum, 0);
    const sumAmount = cart.reduce((sum: number, item: any) => item.isCheckout ? sum + item.price * item.quantity : sum, 0);

    const [dataInfor, setDataInfor] = useState({
        name: "",
        sdt: "",
        address: "",
        note: "",
    });

    const [isDatHang, setDatHang] = useState(false);

    const handleDatHang = () => {
        // Kiểm tra các thông tin cần thiết đã được điền đầy đủ hay chưa
        if (!dataInfor.name || !dataInfor.sdt || !dataInfor.address) {
            alert("Vui lòng điền đầy đủ thông tin để thanh toán.");
            return;
        }
        setDatHang(true);
    };

    return (
        <div>
            <h1>Thanh toán</h1>
            <div className="container">
                <div className="headerCheckout row text-bg-success">
                    <div className="col-3">Sản phẩm</div>
                    <div className="col-2">Đơn giá</div>
                    <div className="col-2">Số lượng</div>
                    <div className="col-2">Thành tiền</div>
                </div>

                {cart.map((item: any) => item.isCheckout && (
                    <OrderDetail
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        productImageUrl={item.img}
                        price={item.price}
                        quantity={item.quantity}
                    />
                ))}

                <div className="headerCheckout row text-bg-danger gap-2 d-flex">
                    <div className="col-3">Tổng số tiền ({sumItem} sản phẩm):</div>
                    <div className="col-2">{sumAmount.toLocaleString()} VNĐ</div>
                </div>
            </div>

            <ThongTinNhanHang dataInfor={dataInfor} setDataInfor={setDataInfor} />

            <div className="btn btn-primary mb-2" onClick={handleDatHang}>
                Thanh toán hóa đơn
            </div>

            {isDatHang && (
                <div className="alert alert-success">
                    <h4 className="alert-heading">Đặt hàng thành công!</h4>
                    <h5>Thông tin khách hàng</h5>
                    <div className="d-flex gap-5">
                        <p><strong>Tên khách hàng:</strong> {dataInfor.name}</p>
                        <p><strong>Số điện thoại:</strong> {dataInfor.sdt}</p>
                        <p><strong>Địa chỉ nhận hàng:</strong> {dataInfor.address}</p>
                        <p><strong>Ghi chú:</strong> {dataInfor.note}</p>
                        <p><strong>Phương thức thanh toán:</strong> COD</p>
                    </div>

                </div>
            )}
        </div>
    );
}

export default Checkout;

export function OrderDetail(data: any) {
    var [product] = useState(data);

    console.log("test render", product);

    const dispatch = useDispatch();

    return (
        <div className="itemCheckout row text-bg-light border border-danger border-to">
            <div className="col-3 d-flex gap-2">
                <img className="col-1" src={product.productImageUrl}/>
                <h5>
                    {product.title}
                </h5>
            </div>
            <div className=" col-2">
                {product.price.toLocaleString()} VNĐ
            </div>
            <div className="col-2">
                {product.quantity}
            </div>
            <div className="col-2 text-danger">
                {(product.price * product.quantity).toLocaleString()} VNĐ
            </div>
        </div>)
        ;
}