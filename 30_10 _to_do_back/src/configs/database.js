const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',  // host của CSDL
    user: 'root',       // tên tài khoản kết nối đến CSDL
    password: '',       // Mật khẩu
    database: 'todos'   // Tên cơ sở dữ liệu đã tạo
});

// Kết nối đến cơ sở dữ liệu
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = db;