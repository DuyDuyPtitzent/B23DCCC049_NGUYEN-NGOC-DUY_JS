const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Các route
router.post('/orders', orderController.createOrder); // Tạo đơn hàng
router.get('/orders', orderController.getOrders);    // Lấy danh sách đơn hàng
router.get('/orders/:id', orderController.getOrderById); // Lấy chi tiết đơn hàng
  

module.exports = router;
