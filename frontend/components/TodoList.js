import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';

import TodoListItem from './TodoListItem';

const TodoList = ({ todos, toggleTodoDone, handleDeleteTodo }) => {
  if (!todos) {
    return <Alert variant="secondary">Loading...</Alert>;
  }
  return (
    <ListGroup>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodoDone={toggleTodoDone}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
