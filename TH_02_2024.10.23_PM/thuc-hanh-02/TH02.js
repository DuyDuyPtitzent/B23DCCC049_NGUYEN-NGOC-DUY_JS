const express = require('express');
const app = express();
const PORT = 7000;

// Middleware để parse JSON
app.use(express.json());

// Giả lập dữ liệu
let items = [
    { id: 1, name: 'Ngọc Duy' },
    { id: 2, name: 'Minh Quan' }
];

// Endpoint GET
app.get('/items', (req, res) => {
    res.json(items);
});

// Endpoint POST
app.post('/items', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.status(201).json(newItem);
});

// Endpoint PUT
app.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(i => i.id === itemId);
    if (item) {
        item.name = req.body.name;
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Endpoint DELETE
app.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    items = items.filter(i => i.id !== itemId);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
