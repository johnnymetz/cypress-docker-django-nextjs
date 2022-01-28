import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from 'react-toastify';

import TodoCreate from '../components/TodoCreate';
import TodoList from '../components/TodoList';
import {
  BACKEND_HOST,
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../backend';

const Home = () => {
  if (!BACKEND_HOST) {
    return <div>No backend found.</div>;
  }

  const [todos, setTodos] = useState([]);

  const fetchTodosWrapper = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodosWrapper();
  }, []);

  const handleCreateTodo = async (title) => {
    const newTodo = await createTodo({ title });
    setTodos((currentTodos) => [...currentTodos, newTodo]);
    toast.success(`"${title}" added`);
  };

  const toggleTodoDone = async (todo, isDone, setIsDone) => {
    await updateTodo(todo.id, { done: isDone });
    setIsDone(isDone);
    toast.success(`"${todo.title}" marked as done`);
  };

  const handleDeleteTodo = async (todo) => {
    await deleteTodo(todo.id);
    setTodos(todos.filter((x) => x.id != todo.id));
    toast.success(`"${todo.title}" deleted`);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col sm={8} md={6}>
          <h2 className="text-center">Todo List</h2>
          <TodoCreate handleCreateTodo={handleCreateTodo} className="mb-2" />
          <TodoList
            todos={todos}
            toggleTodoDone={toggleTodoDone}
            handleDeleteTodo={handleDeleteTodo}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
