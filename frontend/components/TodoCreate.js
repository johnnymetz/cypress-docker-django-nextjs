import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const TodoCreate = ({ handleCreateTodo, ...props }) => {
  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleCreateTodo(title);
  };

  return (
    <Form {...props} onSubmit={onSubmit}>
      <InputGroup>
        <Form.Control
          required
          placeholder="Add todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="add-todo-input"
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </InputGroup>
    </Form>
  );
};

export default TodoCreate;
