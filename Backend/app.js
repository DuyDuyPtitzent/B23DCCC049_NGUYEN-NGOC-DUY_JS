const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes');
const db = require('./config/db'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', orderRoutes);

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});


  
  // Ví dụ: API lấy danh sách đơn hàng
app.get('/api/orders', (req, res) => {
  const query = 'SELECT * FROM orders';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
      res.status(500).send('Lỗi khi truy vấn cơ sở dữ liệu');
    } else {
      res.json(results);
    }
  });
});

// Ví dụ: API cập nhật trạng thái đơn hàng
app.put('/api/orders/:id', (req, res) => {
  const orderId = req.params.id;
  const { status } = req.body;

  const query = 'UPDATE orders SET status = ? WHERE id = ?';
  db.query(query, [status, orderId], (err, results) => {
    if (err) {
      console.error('Lỗi cập nhật đơn hàng:', err);
      res.status(500).send('Lỗi cập nhật đơn hàng');
    } else {
      res.send('Cập nhật trạng thái đơn hàng thành công');
    }
  });
});
// API xóa đơn hàng
app.delete('/api/orders/:id', (req, res) => {
  const orderId = req.params.id;

  // Kiểm tra ID đơn hàng
  if (!orderId) {
    return res.status(400).json({ error: 'ID đơn hàng là bắt buộc' });
  }

  // Truy vấn xóa đơn hàng
  const query = 'DELETE FROM orders WHERE id = ?';
  db.query(query, [orderId], (err, results) => {
    if (err) {
      console.error('Lỗi khi xóa đơn hàng:', err);
      res.status(500).json({ error: 'Lỗi khi xóa đơn hàng' });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Không tìm thấy đơn hàng với ID này' });
    } else {
      res.status(200).json({ message: `Đơn hàng với ID ${orderId} đã được xóa thành công` });
    }
  });
});
