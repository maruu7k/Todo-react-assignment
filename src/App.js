import { useState, useEffect } from "react";

//userId
//loading logic

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [userId, setUserId] = useState("1");
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    //fetch returns a promise
    fetch(`https://dummyjson.com/todos/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
        setFetching(false);
      });
  }, [userId]);

  const handleChange = (event) => {
    // console.log("user changed!", event);
    // console.log(event.target);
    // console.log(event.target.value);
    setUserId(event.target.value);
  };

  // console.log("userId", userId);
  return (
    <section>
      <header>
        <h1> Todos</h1>
      </header>
      <div>
        <label htmlFor="user"> Please Select a user: </label>
        <select id="user" onChange={handleChange}>
          <option value="1">Arthur </option>
          <option value="2">Lily</option>
          <option value="3">George</option>
        </select>
      </div>
      <main>
        {fetching ? (
          <p> Data is Loading</p>
        ) : (
          <ul>
            {todos.map((item) => {
              return <li key={item.id}> {item.todo}</li>;
            })}
          </ul>
        )}
      </main>
    </section>
  );
}

export default TodoApp;
