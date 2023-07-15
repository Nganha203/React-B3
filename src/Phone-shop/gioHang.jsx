import React, { Component } from 'react'
import Modal from './modal'

export default class Giohang extends Component {

    render() {
        const { gioHang, idDelete, quantity } = this.props

        return (
            <div>
                <h1 style={{ color: 'blue' }} className='text-center mb-3'>Giỏ hàng</h1>
                <table className='table'>
                    <thead>
                        <tr className='text-center'>
                            <th>Mã sản phẩm</th>
                            <th>Giá</th>
                            <th>Hình ảnh</th>
                            <th>Số lượng</th>
                            <th>Tổng cộng</th>
                            <th>Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gioHang.map((item) => {
                            return (
                                <tr key={item.maSP} className='text-center'>
                                    <td>{item.maSP}</td>
                                    <td>{(item.giaBan).toLocaleString()}</td>
                                    <td>
                                        <img style={{ width: 100 }} src={item.hinhAnh} />
                                    </td>
                                    <td>
                                        <button onClick={() => quantity({ quantity: -1, ma: item.maSP })} className='btn btn-primary tru '>-</button>
                                        <span style={{ fontSize: 20 }} className='px-1'>{item.soLuong}</span>
                                        <button onClick={() => quantity({ quantity: 1, ma: item.maSP })} className='btn btn-primary cong '>+</button>
                                    </td>
                                    <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
                                    <td>
                                        <button onClick={() => {idDelete(item.maSP)}} className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal" >Xóa</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
