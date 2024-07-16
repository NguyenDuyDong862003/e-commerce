import {useParams} from "react-router-dom";
import {getListProductByName} from "../data/FakeServerAPI";
import {ProductList} from "./ProductList";
import React from "react";

export function ThongBaoDatHangThanhCong(data: any) {
    return (
        <div>
            {data.isDatHang ? (
                <div className="alert alert-primary" role="alert">
                    Đặt hàng thành công!<br/>
                    {data.dataInfor.name}<br/>
                    {data.dataInfor.sdt}<br/>
                    {data.dataInfor.address}<br/>
                    {data.dataInfor.note}<br/>
                </div>
            ) : (
                <div className="">
                </div>
            )}
        </div>
    );


}