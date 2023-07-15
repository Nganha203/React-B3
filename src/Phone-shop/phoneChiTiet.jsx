import React, { Component } from 'react'

export default class Phonechitiet extends Component {
    render() {
        const {chitietSP} = this.props
        return (
            <div className='row mt-5 mb-5'>
                <div className='col-4'>
                    <h3 className='text-center'>{chitietSP.tenSP}</h3>
                    <img style={{ width: '100%' }} src={chitietSP.hinhAnh} />
                </div>
                <div className='col-8'>
                    <h3 className='text-center pb-3'>Thông tin sản phẩm</h3>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>Màn hình:</td>
                                <td>{chitietSP.manHinh}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành:</td>
                                <td>{chitietSP.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <td>Camera trước:</td>
                                <td>{chitietSP.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <td>Camera sau:</td>
                                <td>{chitietSP.cameraSau}</td>
                            </tr>
                            <tr>
                                <td>Ram:</td>
                                <td>{chitietSP.ram}</td>
                            </tr>
                            <tr>
                                <td>Rom:</td>
                                <td>{chitietSP.rom}</td>
                            </tr>
                            <tr>
                                <td>Gía bán:</td>
                                <td>{chitietSP.giaBan}</td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
