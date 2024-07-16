import React, {useState} from "react";
import {Link} from "react-router-dom";

export function ThongTinNhanHang(data: any) {
    return (
        <div className="d-flex justify-content-center gap-3">
            <div className="col-6">
                <h3>Thông tin thanh toán</h3>
                <div className="row d-flex flex-column align-items-center gap-3">
                    <div className="">
                        <input className="form-control" type="text" id="name" placeholder="Họ và Tên"
                               onChange={(e) =>
                                   data.setDataInfor({...data.dataInfor, name: e.target.value})
                               }
                        />
                    </div>
                    <div className="">
                        <input className="form-control" type="text" id="phone" placeholder="Số điện thoại"
                               onChange={(e) =>
                                   data.setDataInfor({...data.dataInfor, sdt: e.target.value})
                               }
                        />
                    </div>
                    <div className="">
                        <input className="form-control" type="text" id="address" placeholder="Địa chỉ"
                               onChange={(e) =>
                                   data.setDataInfor({...data.dataInfor, address: e.target.value})
                               }
                        />
                    </div>
                    <div className="">
                        <input className="form-control" type="text" id="note" placeholder="Ghi chú"
                               onChange={(e) =>
                                   data.setDataInfor({...data.dataInfor, note: e.target.value})
                               }
                        />
                    </div>
                </div>
            </div>

            <div>
                <h3>Chọn phương thức thanh toán</h3>
                <div className="">
                    <div className="form-check d-flex gap-3">
                        <input className="form-check-input" type="radio" name="method" id="radio1" checked/>
                        <label className="form-check-label" htmlFor="radio1">
                            Thanh toán khi nhận hàng (COD)
                        </label>
                    </div>
                    {/*<div className="form-check d-flex gap-3">*/}
                    {/*    <input className="form-check-input" type="radio" name="method" id="radio2"/>*/}
                    {/*    <label className="form-check-label" htmlFor="radio2">*/}
                    {/*        Khác*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}