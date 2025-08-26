import type { Todo } from "../App";

type Props = {
    todos: Todo[];
    deleteTodo?: (id: number) => void;
    updateTodo?: (id: number) => void;
}

const List = ({ todos, deleteTodo, updateTodo }: Props) => {
    return (
        <ol>
            {todos.map((el) => (
                <li
                    key={el.id}
                    style={{
                        textDecoration: el.completed ? "line-through" : "none"
                    }}
                >
                    {el.text}
                    <button onClick={() => deleteTodo?.(el.id)}>Delete</button>
                    <button onClick={() => updateTodo?.(el.id)}>Update</button>
                </li>
            ))}
        </ol>
    )
}

export default List;