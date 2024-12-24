import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Admin() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  // Lấy danh sách đơn hàng từ API
  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách đơn hàng:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Cập nhật trạng thái đơn hàng
  const updateOrderStatus = async (orderId, status) => {
    setIsLoading(true);
    try {
      console.log('Đang gửi yêu cầu cập nhật đơn hàng:', { orderId, status });
      const response = await axios.put(`http://localhost:3000/api/orders/${orderId}`, { status });
      console.log('Phản hồi từ API:', response.data);
      
      const successMessage =
        status === 'Đã xử lý ' ? 'Đơn hàng đã được tạo thành công!' : 'Đơn hàng đã bị hủy.';
      setMessage(successMessage);
  
      // Cập nhật lại trạng thái trong state orders mà không cần gọi lại fetchOrders
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status } : order
        )
      );
  
    } catch (error) {
      console.error('Lỗi khi cập nhật trạng thái đơn hàng:', error.response?.data || error.message);
      setMessage('Lỗi khi cập nhật trạng thái đơn hàng. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage(''), 3000); // Ẩn thông báo sau 3 giây
    }
  };

  return (
    <div className="container">
      <h1>Quản trị đơn hàng</h1>
      {message && <div className="alert alert-info">{message}</div>}
      {isLoading ? (
        <p>Đang tải...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Tên sách</th>
              <th>Tên cán bộ</th>
              <th>Số điện thoại</th>
              <th>Địa chỉ</th>
              <th>Giới tính</th>
              <th>Giá</th>
              <th>Chức vụ</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.title}</td>
                <td>{order.customer_name}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.gender}</td>
                <td>{parseFloat(order.price).toLocaleString()} đồng</td>
                <td>{order.chuc_vu}</td>
                <td>{order.status || 'Đang chờ xử lý'}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => updateOrderStatus(order.id, 'Đã xử lý ')}
                    disabled={order.status === 'Đã xử lý '}
                  >
                    Duyệt
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => updateOrderStatus(order.id, 'Hủy thành công')}
                    disabled={order.status === 'Hủy thành công'}
                  >
                    Từ chối
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;
