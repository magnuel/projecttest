import React, { useEffect, useState } from 'react';
import { getTodos, createTodo as createNewTodo, updateTodo as updateExistingTodo, deleteTodo as deleteExistingTodo } from '../Api/Api';

const TodoListPage: React.FC = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [editingTodo, setEditingTodo] = useState<any>({});
  const [editedTodoTitle, setEditedTodoTitle] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching ToDos:', error);
    }
  };

  const createTodo = async () => {
    try {
      const response = await createNewTodo({
        title: newTodoTitle,
        completed: false
      });
      setTodos([...todos, response.data]);
      setNewTodoTitle('');
    } catch (error) {
      console.error('Error creating ToDo:', error);
    }
  };

  const updateTodo = async () => {
    try {
      const response = await updateExistingTodo(editingTodo._id, {
        title: editedTodoTitle,
        completed: editingTodo.completed
      });
      const updatedTodos = todos.map(todo =>
        todo._id === editingTodo._id ? response.data : todo
      );
      setTodos(updatedTodos);
      setEditingTodo(null);
      setEditedTodoTitle('');
    } catch (error) {
      console.error('Error updating ToDo:', error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await deleteExistingTodo(id);
      const updatedTodos = todos.filter(todo => todo._id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error deleting ToDo:', error);
    }
  };

  const handleCreateTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodoTitle.trim()) return;
    await createTodo();
  };

  const handleUpdateTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editedTodoTitle.trim()) return;
    await updateTodo();
  };

  const handleEdit = (todo: any) => {
    setEditingTodo(todo);
    setEditedTodoTitle(todo.title);
  };

  return (
      <div>
        <h1>Task List</h1>
        <form onSubmit={handleCreateTodo}>
          <input type="text" value={newTodoTitle} onChange={e => setNewTodoTitle(e.target.value)} />
          <button type="submit">Add Task</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>State</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo._id}>
                <td>{editingTodo && editingTodo._id === todo._id ? (
                  <input type="text" value={editedTodoTitle} onChange={e => setEditedTodoTitle(e.target.value)} />
                ) : (
                  todo.title
                )}</td>
                <td>{todo.completed ? 'Complete' : 'Pending'}</td>
                <td>
                  {editingTodo && editingTodo._id === todo._id ? (
                    <button onClick={handleUpdateTodo}>Save</button>
                  ) : (
                    <button onClick={() => handleEdit(todo)}>Edit</button>
                  )}
                  <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default TodoListPage;
