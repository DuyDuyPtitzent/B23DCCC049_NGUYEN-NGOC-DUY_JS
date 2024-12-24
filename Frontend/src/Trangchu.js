import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Đảm bảo đã import Router, Routes và Route
import Header from './components/Header';
import Footer from './components/Footer';
import Thanhtoan from './Thanhtoan';
import TrangChuContent from './TrangChuContent';  // Nội dung trang chủ
import QuyDinhDoiTra from "./components/QuyDinhDoiTra";
import Introduce from "./components/Introduce";
import Admin from './Admin';
function Trangchu() {
    return (
      <Router>
        <div className="app-wrapper">
          <Header />
          <div className="content">
            <Routes> 
              <Route path="/thanhtoan" element={<Thanhtoan />} />
              <Route path="/" element={<TrangChuContent />} />
              <Route path="/app" element={<QuyDinhDoiTra />} />
              <Route path="/introduce" element={<Introduce />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<h2>Trang không tồn tại!</h2>} />
            </Routes>
          </div>  
          <Footer />
        </div>
      </Router>
    );
}

export default Trangchu;
