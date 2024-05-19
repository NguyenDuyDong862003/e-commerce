import {Link, NavLink, useRouteError} from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Lỗi</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <NavLink to="/list-product">Trở về trang chủ 1</NavLink>
            <Link to="/list-product">Trở về trang chủ 2</Link>
        </div>
    );
}