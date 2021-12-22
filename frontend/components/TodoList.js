import ListGroup from 'react-bootstrap/ListGroup';

import TodoListItem from './TodoListItem';

const TodoList = ({ todos, toggleTodoDone, handleDeleteTodo }) => {
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
