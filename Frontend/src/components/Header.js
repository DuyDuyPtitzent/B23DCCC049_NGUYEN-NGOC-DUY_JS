import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
      <header className="header">
        <div className="main-menu">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="/">
                <img src="images/hvccqghcm1.png" alt="logo" className="logo-img" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="navbar-item active">
                  <Link to="/" className="nav-link">Trang Chủ</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/app" className="nav-link">Quy Định Đổi Trả</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/Introduce" className="nav-link">Giới thiệu tiểu sử</Link>
                  </li>
                </ul>
                <div className="cart my-2 my-lg-0">
                  <a href="giohang.html">
                    <span>
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </span>
                    
                  </a>
                </div>
                <form className="form-inline my-2 my-lg-0 search-form">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Tìm kiếm..."
                    aria-label="Search"
                  />
                  <button type="button" className="btn search-icon">
                    <i className="fa fa-search"></i>
                  </button>
                </form>

              </div>
            </nav>
          </div>
        </div>
      </header>
  );
}

export default Header;