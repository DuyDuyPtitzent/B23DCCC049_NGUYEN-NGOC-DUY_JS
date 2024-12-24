const Order = require('../models/orderModel');


const orderController = {
  createOrder: (req, res) => {
      const { customer_name,  phone, address, gender, price,  title, chuc_vu } = req.body;
     
      console.log('Dữ liệu nhận từ frontend:', req.body); // Log dữ liệu từ frontend
    
      if ( !customer_name || !phone || !address || !gender || !price || !title ||!chuc_vu) {
        return res.status(400).json({ error: 'Vui lòng cung cấp đầy đủ thông tin' });
      }

      console.log('Dữ liệu nhận được:', { customer_name, phone, address, gender, price,  title, chuc_vu }); // Log dữ liệu nhận được
     
      
      Order.create({ customer_name,  phone, address, gender, price,  title, chuc_vu }, (err, result) => {
        if (err) {
          console.error('Lỗi tạo đơn hàng:', err);
          return res.status(500).json({ message: 'Lỗi server' });
        }
    
        res.status(201).json({ message: 'Đơn hàng đã được tạo', orderId: result.insertId });
      });
    },

    getOrders: (req, res) => {
        Order.findAll((err, results) => {
            if (err) {
                console.error('Lỗi lấy danh sách đơn hàng:', err);
                return res.status(500).json({ message: 'Lỗi server' });
            }
            
            res.status(200).json(results);
        });
    },

    getOrderById: (req, res) => {
        const id = req.params.id;

        Order.findById(id, (err, result) => {
            if (err) {
                console.error('Lỗi tìm đơn hàng:', err);
                return res.status(500).json({ message: 'Lỗi server' });
            }

            if (result.length === 0) {
                return res.status(404).json({ message: 'Không tìm thấy đơn hàng' });
            }

            res.status(200).json(result[0]);
        });
    }
};

exports.updateOrder = (req, res) => {
    const orderId = req.params.id;
    const {id, customer_name, phone, address, gender, price, title, chuc_vu } = req.body;

    const query = `
        UPDATE orders
        SET customer_name = ?, phone = ?, address = ?, gender = ?, price = ?, title = ?, chuc_vu = ?
        WHERE id = ?
    `;

    db.query(query, [customer_name, phone, address, gender, price, title, orderId, chuc_vu], (err, result) => {
        if (err) {
            console.error('Lỗi khi sửa đơn hàng:', err);
            return res.status(500).json({ message: 'Lỗi khi sửa đơn hàng.' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Không tìm thấy đơn hàng để sửa.' });
        }

        res.status(200).json({ message: 'Đơn hàng đã được cập nhật thành công.' });
    });
};

exports.deleteOrder = (req, res) => {
    const orderId = req.params.id;

    const query = `DELETE FROM orders WHERE id = ?`;

    db.query(query, [orderId], (err, result) => {
        if (err) {
            console.error('Lỗi khi xóa đơn hàng:', err);
            return res.status(500).json({ message: 'Lỗi khi xóa đơn hàng.' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Không tìm thấy đơn hàng để xóa.' });
        }

        res.status(200).json({ message: 'Đơn hàng đã được xóa thành công.' });
    });
};

module.exports = orderController;
