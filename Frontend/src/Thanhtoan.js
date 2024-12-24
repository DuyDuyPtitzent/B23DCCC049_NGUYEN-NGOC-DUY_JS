import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Thanhtoan() {
  const [bookDetails, setBookDetails] = useState({
    id: '',
    price: null,
    customer_name: '',
    phone: '',
    address: '',
    gender: '',
    order_date: '',
    title: '',
    chuc_vu:'',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Lấy dữ liệu sách từ localStorage
  useEffect(() => {
    const selectedBook = JSON.parse(localStorage.getItem('selectedBook'));
    if (selectedBook) {
      setBookDetails((prevDetails) => ({
        ...prevDetails,
        id: selectedBook.id || '', // Đảm bảo id luôn có giá trị
        title: selectedBook.title || 'Chưa có tên sách', // Gán giá trị mặc định nếu title bị null
        price: selectedBook.price || 0, // Gán giá trị mặc định nếu price null
      }));
    }
  }, []);
 
  const handleOrder = async () => {
    if (!bookDetails.customer_name || !bookDetails.phone || !bookDetails.address || !bookDetails.gender ||!bookDetails.chuc_vu) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
   
    if (!bookDetails.id || !bookDetails.title) {
      console.error('Dữ liệu không hợp lệ:', bookDetails);
      alert('Dữ liệu sách không hợp lệ!');
      return;
    }

    const orderData = {
      id: bookDetails.id,
      title: bookDetails.title,
      price: bookDetails.price,
      customer_name: bookDetails.customer_name,
      phone: bookDetails.phone,
      address: bookDetails.address,
      gender: bookDetails.gender,
      chuc_vu: bookDetails.chuc_vu,
      order_date: new Date().toISOString(), // Ngày giờ hiện tại theo chuẩn ISO
    };

    console.log('Dữ liệu trước khi gửi:', orderData);

    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/api/orders', orderData);
      console.log('Dữ liệu gửi đi:', orderData);
      setSuccessMessage(response.data.message || 'Đặt hàng thành công!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Lỗi gửi yêu cầu:', error.response?.data || error.message);
      setSuccessMessage(error.response?.data.message || 'Có lỗi xảy ra, vui lòng thử lại');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <table className="table">
            <div className="TieuDeThanhToan">
              <p>Thông tin thanh toán:</p>
            </div>
            <tbody>
              <tr>
                <td className="ThanhToan"><label><b>Mã đơn hàng (ID):</b></label></td>
                <td className="ThanhToan">
                  <input 
                    type="text" 
                    placeholder="Nhập mã đơn hàng" 
                    className="inputThanhToan" 
                    value={bookDetails.id} 
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="ThanhToan"><label><b>Tên sách:</b></label></td>
                <td className="ThanhToan">
                  <input 
                    type="text" 
                    placeholder="Tên sách" 
                    className="inputThanhToan" 
                    value={bookDetails.title} 
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="ThanhToan"><label><b>Số tiền thanh toán:</b></label></td>
                <td className="ThanhToan">
                  {bookDetails.price !== null ? (
                    <p><b>{parseFloat(bookDetails.price).toLocaleString()} đồng</b></p>
                  ) : (
                    <p>Đang tải...</p>
                  )}
                </td>
              </tr>
              <tr>
                <td className="ThanhToan"><label><b>Họ và tên:</b></label></td>
                <td className="ThanhToan">
                  <input 
                    type="text" 
                    placeholder="Họ và tên" 
                    className="inputThanhToan" 
                    value={bookDetails.customer_name} 
                    onChange={(e) => setBookDetails({ ...bookDetails, customer_name: e.target.value })} 
                  />
                </td>
              </tr>
              <tr>
                <td className="ThanhToan"><label><b>Số điện thoại:</b></label></td>
                <td className="ThanhToan">
                  <input 
                    type="text" 
                    placeholder="Số điện thoại" 
                    className="inputThanhToan" 
                    value={bookDetails.phone} 
                    onChange={(e) => setBookDetails({ ...bookDetails, phone: e.target.value })} 
                  />
                </td>
              </tr>
              <tr>
                <td className="ThanhToan"><label><b>Địa chỉ:</b></label></td>
                <td className="ThanhToan">
                  <input 
                    type="text" 
                    placeholder="Địa chỉ" 
                    className="inputThanhToan" 
                    value={bookDetails.address} 
                    onChange={(e) => setBookDetails({ ...bookDetails, address: e.target.value })} 
                  />
                </td>
              </tr>
              <tr>
                <td className="ThanhToan"><label><b>Chức vụ:</b></label></td>
                <td className="ThanhToan">
                  <input 
                    type="text" 
                    placeholder="Chức vụ" 
                    className="inputThanhToan" 
                    value={bookDetails.chuc_vu} 
                    onChange={(e) => setBookDetails({ ...bookDetails, chuc_vu: e.target.value })} 
                  />
                </td>
              </tr>
              <tr>
                <td className="ThanhToan"><label><b>Nam/Nữ:</b></label></td>
                <td className="ThanhToan">
                  <span>Nam</span>
                  <input 
                    type="radio" 
                    name="customer_gender" 
                    value="nam" 
                    className="optionSex" 
                    onChange={(e) => setBookDetails({ ...bookDetails, gender: e.target.value })} 
                  />
                  <span>Nữ</span>
                  <input 
                    type="radio" 
                    name="customer_gender" 
                    value="nu" 
                    className="optionSex" 
                    onChange={(e) => setBookDetails({ ...bookDetails, gender: e.target.value })} 
                  />
                </td>
              </tr>
              <tr>
                <td className="ThanhToan"></td>
                <td className="ThanhToan">
                  <div className="btn-sec">
                    <button 
                      className="btn orange-btn datHang" 
                      onClick={handleOrder}
                      disabled={bookDetails.price === null || isLoading}
                    >
                      {isLoading ? 'Đang xử lý...' : 'Đặt hàng'}
                    </button>
                    {successMessage && (
                      <div className="snackbar show">
                        {successMessage}
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
}

export default Thanhtoan;
