const URL = "http://localhost:9090/api/";

export const getTodos = async () => {
  const response = await fetch(URL + "todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  });
  return response.json();
};

export const createTodo = async (params) => {
  const response = await fetch(URL + "todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  return response.json();
};

export const updateTodo = async (id, params) => {
  const response = await fetch(URL + `todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  return response.json();
};

export const updateTodoStatus = async (id, status) => {
  const response = await fetch(URL + `todos/${id}/${status}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(URL + `todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
