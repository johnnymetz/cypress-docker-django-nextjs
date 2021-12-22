import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

const TodoListItem = ({ todo, toggleTodoDone, handleDeleteTodo }) => {
  const [isDone, setIsDone] = useState(todo.done);

  return (
    <ListGroup.Item>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <Form.Check
            type="checkbox"
            label={todo.title}
            checked={isDone}
            onChange={() => toggleTodoDone(todo, !isDone, setIsDone)}
          />
        </div>
        <div>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => handleDeleteTodo(todo)}
          >
            Done
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
};
export default TodoListItem;
