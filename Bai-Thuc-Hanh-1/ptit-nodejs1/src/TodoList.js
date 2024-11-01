import React, { useState } from 'react';
import './TodoList.css';  // Import CSS

// Ban đầu là danh sách task
const initialTasks = [
  { id: 1, task: "Học lập trình web với React", dueDate: "Tomorrow", className: "due-tomorrow" },
  { id: 2, task: "Gửi email nộp bài tập về nhà", dueDate: "Saturday", className: "due-saturday" },
  { id: 3, task: "Học từ vựng tiếng anh mỗi ngày", dueDate: "Monday", className: "due-monday" },
  { id: 4, task: "Viết tiểu luận môn Triết học", dueDate: "Today", className: "due-today" },
];

const TodoList = () => {
  // Quản lý danh sách task với state
  const [tasks, setTasks] = useState(initialTasks);

  // Hàm xử lý xóa task
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);  // Lọc các task có id khác với id được chọn
    setTasks(updatedTasks);  // Cập nhật lại state
  };

  return (
    <div className="todo-list-container">
      <h2 className="todo-list-header">
        My work🎯
      </h2>
      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className="todo-item">
            <input type="checkbox" />
            {task.task}
            <div className={`due-date ${task.className}`}>
              {task.dueDate}
            </div>
            {/* Nút xóa task */}
            <button 
              onClick={() => handleDelete(task.id)}  // Khi bấm nút xóa, gọi hàm handleDelete với id của task
              className="delete-task-button"
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
      <button className="add-task-button">+ Add task</button>
    </div>
  );
};

export default TodoList;
