import React, { Component } from 'react'
import Giohang from './gioHang'

export default class Modal extends Component {
    render() {
        const { buttonDelete, id } = this.props
        
        return (
            <div  className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Xóa sản phẩm ?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            Bạn có chắc muốn xóa chưa ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Không xóa</button>
                            <button onClick={() => buttonDelete(id)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Chắc chắn</button>
                        
                        </div>  
                    </div>
                </div>
            </div>


        )
    }
}
