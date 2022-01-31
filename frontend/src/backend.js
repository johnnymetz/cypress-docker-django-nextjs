const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const TODOS_URL = `${BACKEND_URL}/todos`;

export const fetchTodos = async () => {
  try {
    const res = await fetch(`${TODOS_URL}/`);
    if (res.status !== 200) {
      throw Error(res.statusText);
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const createTodo = async (payload) => {
  try {
    const res = await fetch(`${TODOS_URL}/`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.status !== 201) {
      throw Error(res.statusText);
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = async (todoId, payload) => {
  try {
    const res = await fetch(`${TODOS_URL}/${todoId}/`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.status !== 200) {
      throw Error(res.statusText);
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (todoId) => {
  try {
    const res = await fetch(`${TODOS_URL}/${todoId}/`, { method: 'DELETE' });
    if (res.status !== 204) {
      throw Error(res.statusText);
    }
  } catch (error) {
    console.error(error);
  }
};
