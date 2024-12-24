import React from 'react';
import './YourStyle.css';
import './MyStyle.css';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';



const QuyDinhDoiTra = () => {


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-4">
                    <nav className="header__navbar">
                        <div>
                            <h1 style={{ border: '12px', color: '#fcba68' }}>Bài viết</h1>
                            <div className="topicArticle">
                                <ul>
               
                                    <li><a href="/valid-link">Quy trình đổi trả như thế nào?</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-sm-6">
                    <nav className="header__navbar">
                        <div className="answerQuestion">
                            <h1>Quy trình đổi trả như thế nào?</h1>
                            <div>
                                <ol className="reason">
                                    <li>Online
                                        <ul>
                                            <li>Gửi lại sách kèm hóa đơn thanh toán qua các phương tiện vận chuyển đến 135 đường Nguyễn Phong Sắc, phường Dịch Vọng, quận Cầu Giấy, Hà Nội. </li>
                                            <li>Chờ xác nhận của Học Viện.</li>
                                            <li>Nhận tiền hoàn lại.</li>
                                        </ul>
                                    </li>
                                    <li>Offline
                                        <ul>
                                            <li>Mang sách kèm hóa đơn thanh toán trực tiếp đến 135 đường Nguyễn Phong Sắc, phường Dịch Vọng, quận Cầu Giấy, Hà Nội.</li>
                                            <li>Chờ xác nhận của Học Viện.</li>
                                            <li>Nhận tiền hoàn lại.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};




           

export default QuyDinhDoiTra;
