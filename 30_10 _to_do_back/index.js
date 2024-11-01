// index.js
const express = require('express'); // Khai báo express một lần
const app = express();
const port = 3000;
const db = require('./src/configs/database'); // Đường dẫn đến file database.js
const todosRouter = require('./src/routers/todos');

const bodyParser = require('body-parser'); // Import body-parser
app.use(bodyParser.json()); // Middleware xử lý JSON
app.use(bodyParser.urlencoded({ extended: true })); // Middleware xử lý dữ liệu từ form

const todoRoutes = require('./src/routers/todoRoutes'); // Import các route
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use(bodyParser.json()); // Giúp parse dữ liệu JSON
app.use('/api', todoRoutes); // Sử dụng các route đã định nghĩa

app.use("/todoapp", todosRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    

});