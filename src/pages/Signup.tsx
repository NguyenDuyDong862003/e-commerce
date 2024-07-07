import React, {useState} from "react";
import {Link} from "react-router-dom";

function Signup() {
    const [checkbox, setCheckbox] = useState(false);

    const handleCheckboxChange = () => {
        setCheckbox(prevState => !prevState);
    };

    return (
        <div className="">
            <h1>Sign up</h1>
            <div className="d-flex flex-column align-items-center gap-3">
                <div className="col-5">
                    <input className="form-control" id="username" placeholder="Tên"/>
                </div>
                <div className="col-5">
                    <input className="form-control" type="email" id="email" placeholder="Email"/>
                </div>
                <div className="col-5">
                    <input className="form-control" type="password" id="password" placeholder="Mật khẩu"/>
                </div>
                <button className="col-5 btn btn-primary">Tiếp tục</button>
                <label>Đã có tài khoản? <Link to="/login" className="text-decoration-none">Đăng nhập</Link> </label>
                <div className="col-5">
                    <input className="form-check-input border-black" type="checkbox" id="checkbox"
                           onChange={handleCheckboxChange}
                           checked={checkbox}/>
                    <label className="ms-2" htmlFor="checkbox">Tôi đồng ý với điều khoản sử dụng</label>
                </div>
            </div>
        </div>
    );
}

export default Signup;