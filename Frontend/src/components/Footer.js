import React from "react";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row align-items-center">
                    {/* Logo bên trái */}
                    <div className="col-12 col-md-2">
                    <a href="https://hcma.vn">
                        <img 
                            src="images/hvccqghcm1.png" 
                            alt="Logo" 
                            className="footer-logo"
                        /></a>
                    </div>
                    
                    {/* Nội dung chính */}
                    <div className="col-12 col-md-8 text-center">
                        <h3>HỌC VIỆN CHÍNH TRỊ QUỐC GIA HỒ CHÍ MINH</h3>
                        <p>
                            Trụ sở: 135 đường Nguyễn Phong Sắc, phường Dịch Vọng, quận Cầu Giấy, Hà Nội
                        </p>
                    </div>

                    {/* Logo Tinh Vân */}
                    <div className="col-12 col-md-2 text-center">
                        <p className="footer-title"></p>
                        <a href="https://nxbctqg.org.vn">
                            <img 
                                src="images/logo.png" 
                                 alt="logo"
                                className="footer-logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
