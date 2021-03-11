import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { useTodoContext } from "../../context/todoStore";
import TodoList from "./TodoList";

const Todos: FC = observer(() => {
    const store = useTodoContext();
    const [task, setTask] = useState<string>("");

    const addTodo = (e: any) => {
        e.preventDefault();
        store.addTodo(task);
        setTask("");
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button>Add todo</button>
            </form>

            <TodoList />
        </div>
    );
});

export default Todos;
