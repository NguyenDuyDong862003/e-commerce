import {NavLink, useRouteError} from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="container">
        <div className="d-flex">
            <div id="error-page">
                <h3>Trang bạn tìm kiếm không được tìm thấy.</h3>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <NavLink to="/">Trở về trang chủ</NavLink>
                <br/>
            </div>
        </div>
        </div>
    );
}