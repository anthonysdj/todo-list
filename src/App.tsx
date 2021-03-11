import Todos from "./components/todos/Todos";
import { TodoProvider } from "./context/todoStore";

function App() {
    return (
        <TodoProvider>
            <Todos />
        </TodoProvider>
    );
}

export default App;
