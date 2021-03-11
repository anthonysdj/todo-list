import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useTodoContext } from "../../context/todoStore";

const TodoList: FC = observer(() => {
    const store = useTodoContext();

    return (
        <ul>
            {store.todos.length > 0 &&
                store.todos.map((todo) => (
                    <p key={todo.id}>
                        {todo.task}{" "}
                        {!todo.completed ? (
                            <button onClick={() => store.completeTodo(todo.id)}>
                                complete
                            </button>
                        ) : (
                            <button onClick={() => store.redoTodo(todo.id)}>
                                re-do
                            </button>
                        )}
                    </p>
                ))}
        </ul>
    );
});

export default TodoList;
