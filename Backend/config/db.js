// models/db.js
const mysql = require('mysql2');

// Kết nối đến cơ sở dữ liệu
const db = mysql.createConnection({
  host: 'localhost',      // Tên host của MySQL
  user: 'root',           // Tên tài khoản (ví dụ: 'root')
  password: '',           // Mật khẩu của tài khoản (nếu không có, để trống '')
  database: 'api'         // Tên cơ sở dữ liệu của bạn
});

// Kết nối
db.connect((err) => {
  if (err) {
    console.error('Kết nối cơ sở dữ liệu thất bại:', err.stack);
    return;
  }
  console.log('Đã kết nối tới cơ sở dữ liệu MySQL.');
});

module.exports = db;  // Export đối tượng db
