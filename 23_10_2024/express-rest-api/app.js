const express = require('express');
const app = express();
const port = 2000;

app.use(express.json()); // để xử lý dữ liệu JSON trong body của request

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.get('/users', (req, res) => {
    res.json([
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'John Does'}
    ]);
});
app.post('/users', (req, res) => {
    const newUser = req.body;
    res.status(201).json({ message: 'Người dùng mới đã được tạo', user: newUser });
  });
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    res.json({ message: `Người dùng có ID ${userId} đã được cập nhật`, updatedData });
  });
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Người dùng có ID ${userId} đã bị xóa` });
  });