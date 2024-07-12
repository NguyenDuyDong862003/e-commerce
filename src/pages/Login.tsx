import React from "react";
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="">
            <h1>Đăng Nhập</h1>
            <div className="d-flex flex-column align-items-center gap-3">
                <div className="col-5">
                    <input className="form-control" type="email" id="email" placeholder="Email hoặc Tên đăng nhập"/>
                </div>
                <div className="col-5">
                    <input className="form-control" type="password" id="password" placeholder="Mật khẩu"/>
                </div>
                <button className="col-5 btn btn-primary">Login</button>
                <label>Chưa có tài khoản? <Link to="/signup" className="text-decoration-none">Đăng ký</Link> </label>
            </div>
        </div>
    );
}

export default Login;