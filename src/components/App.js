import React from 'react';
import '../App.css';
import Checkboxes from "./Checkboxes";
import toDoData from "../toDoData";

class App extends React.Component {
    constructor() {
        super();
        this.state= {
            todos: toDoData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updateToDos = prevState.todos.map(todo =>
                {
                    if (todo.id === id) {
                            todo.completed = !todo.completed
                    }
                    return todo
                }
            );
            return {
                todos: updateToDos
            }
        })
    }

    render() {
        const toDoItems = toDoData.map(item => <Checkboxes key={item.id} item={item} handleChange={this.handleChange}/>);

        return (
            <div className="todo-list">
                {toDoItems}
            </div>
        );
    }
}

export default App;
