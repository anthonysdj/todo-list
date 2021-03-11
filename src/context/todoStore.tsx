import { makeObservable, observable } from "mobx";
import { createContext, FC, useContext } from "react";

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

// interface ITodoStore {
//     todos: Todo[];
//     addTodo: CallableFunction;
//     completeTodo: CallableFunction;
//     redoTodo: CallableFunction;
// }

class TodoStore {
    todos: Todo[] = [];

    constructor() {
        makeObservable(this, {
            todos: observable,
        });
    }

    get todosLength() {
        return this.todos.length;
    }

    addTodo(task: string): void {
        if (!task.trim()) return;

        this.todos = [
            ...this.todos,
            { id: this.todosLength + 1, task: task, completed: false },
        ];
    }

    redoTodo(id: number): void {
        this.todos = this.todos.map((todo) => {
            return todo.id === id ? { ...todo, completed: false } : todo;
        });
    }

    completeTodo(id: number): void {
        this.todos = this.todos.map((todo) => {
            return todo.id === id ? { ...todo, completed: true } : todo;
        });
    }
}

const TodoContext = createContext(new TodoStore());
const TodoProvider: FC = ({ children }) => {
    return (
        <TodoContext.Provider value={new TodoStore()}>
            {children}
        </TodoContext.Provider>
    );
};
const useTodoContext = () => useContext(TodoContext);

export { useTodoContext, TodoProvider };
