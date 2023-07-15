import React, { Component } from 'react'
import Phonechitiet from './phoneChiTiet';
import Giohang from './gioHang';
import Modal from './modal';


const ListPhone =
    [
        {
            maSP: 1,
            tenSP: 'Iphone XS Max',
            manHinh: 'AMOLED, 6.2, Full HD+',
            heDieuHanh: 'Android 9.0 (Pie)',
            cameraTruoc: '20 MP',
            cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
            ram: '4 GB',
            rom: '64 GB',
            giaBan: 5700000,
            hinhAnh: './img/phone/sp_iphoneX.png'
        },
        {
            maSP: 2,
            tenSP: 'Meizu 16Xs',
            manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
            heDieuHanh: 'Android 9.0 (Pie)',
            cameraTruoc: '20 MP',
            cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
            ram: '6 GB',
            rom: '128 GB',
            giaBan: 7600000,
            hinhAnh: './img/phone/vsphone.jpg'
        },
        {
            maSP: 3,
            tenSP: 'Blackberry',
            manHinh: 'OLED, 6.5, 1242 x 2688 Pixels',
            heDieuHanh: 'iOS 12',
            cameraSau: 'Chính 12 MP & Phụ 12 MP',
            cameraTruoc: '7 MP',
            ram: '8 GB',
            rom: '256 GB',
            giaBan: 27000000,
            hinhAnh: './img/phone/sp_blackberry.png'
        }
    ];

export default class CardPhone extends Component {

    state = {
        chitiet: {},
        gioHang: [],
        deleteId: null
    }
    chitietSP = (sp) => {
        console.log('name')
        this.setState({
            chitiet: sp
        })
    }

    addSP = (sp) => {
        const indexSP = this.state.gioHang.findIndex((item) => sp.maSP === item.maSP)
        let newGioHang = []
        if (indexSP === -1) {
            sp.soLuong = 1
            newGioHang = [...this.state.gioHang, sp]
        }
        else {
            sp.soLuong += 1
            this.state.gioHang.splice(indexSP, 1, sp)
            newGioHang = this.state.gioHang
        }
        this.setState({
            gioHang: newGioHang
        })
    }
    
    removeSP = (ma) => {
        console.log('id là', ma)
            const newGioHang = this.state.gioHang.filter((item) => item.maSP !== ma)
            this.setState({
                gioHang: newGioHang,
                
            })
    }

    // Xét lại id
    idDelete = (id) =>{
        this.setState({
            deleteId: id
        })
    }

    quantitySP = ({quantity, ma}) =>{
        const sanPham = this.state.gioHang.find((sp) => sp.maSP === ma);
        // console.log(sanPham)
        if(!sanPham) return;
        if(quantity === -1 && sanPham.soLuong === 1){
            
            this.removeSP(ma)
        }
        else{
            sanPham.soLuong += quantity;
            this.setState({
                gioHang: this.state.gioHang
            })
        }
    }

    render() {
        return (
            <div className='container'>
                
                <div className='d-flex gap-5 ms-5'>
                    {ListPhone.map((item) => {
                        return <PhoneItem key={item.maSP} phone={item} buttonAdd={this.addSP} buttonChiTiet={this.chitietSP} />
                    })}
                </div>

                <Phonechitiet chitietSP={this.state.chitiet} />
                <Giohang idDelete = {this.idDelete} quantity = {this.quantitySP} gioHang={this.state.gioHang} />
                <Modal id={this.state.deleteId}  buttonDelete = {this.removeSP} />
            </div>
        )
    }
}

class PhoneItem extends Component {
    render() {
        const { phone, buttonChiTiet, buttonAdd } = this.props
        return (
            <div className='mt-5'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={phone.hinhAnh} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{phone.tenSP}</h5>
                        <p className="card-text">{phone.giaBan}</p>
                        <div className='d-flex gap-2'>
                            <button onClick={() => { buttonChiTiet(phone) }} className="btn btn-primary">Xem chi tết</button>
                            <button onClick={() => { buttonAdd(phone) }} className="btn btn-success">Chọn sản phẩm</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}
