// import { useState } from 'react'
import './App.css'
// import Button from './components/Button'
// import Input from './components/Input'
// import List from './components/List'
import Text from './components/Text'

// export type Todo = {
//   id: number;
//   completed: boolean;
//   text: string;
// };

function App() {
  // const [value, setValue] = useState<string>("")
  // const [todos, setTodos] = useState<Todo[]>([
  //   { id: 1, text: "text", completed: false },
  // ]);

  // function create() {
  //   const newTodo: Todo = {
  //     id: todos.length + 1,
  //     completed: false,
  //     text: value,
  //   };

  //   setTodos((prev) => [...prev, newTodo]);
  // }

  // function deleteTodo(id: number) {
  //   setTodos((prev) => prev.filter((todo) => todo.id !== id));
  // }

  // function updateTodo(id: number) {
  //   setTodos((prev) =>
  //     prev.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     )
  //   );
  // }

  return (
    <>
      {/* <Input value={value} setValue={setValue} />
      <Button create={create}>Create</Button>
      <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} /> */}
      <Text />
    </>
  )
}

export default App;
