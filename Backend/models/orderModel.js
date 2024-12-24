const db = require('../config/db'); // Kết nối DB

const Order = {
    create: (data, callback) => {
      const sql = `
        INSERT INTO orders (id, customer_name,  phone, address, gender, price,order_date, title, chuc_vu)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)
      `;
      db.query(sql, [data.id, data.customer_name,  data.phone, data.address, data.gender, data.price, data.order_date,  data.title, data.chuc_vu], callback);
    },

  findAll: (callback) => {
    const sql = 'SELECT * FROM orders';
    db.query(sql, callback);
  },

  findById: (id, callback) => {
    const sql = 'SELECT * FROM orders WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = Order;
