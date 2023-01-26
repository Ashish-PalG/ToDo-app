import React from "react";
import axios from "axios";
import Card from "./Card";

class ShowTodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state={ 
            todoList: []
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:8000/api/todo")
            .then((res) => {
                console.log(res.data);
                this.setState({ todoList: res.data });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    componentDidUpdate() {
        axios
            .get("http://localhost:8000/api/todo")
            .then((res) => {
                console.log(res.data);
                this.setState({ todoList: res.data });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const { todoList } = this.state;
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "40px" }}>
                <h1>ToDo List App</h1>
                 <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", width: "50%" }}>
                    {todoList.map((data) => {
                        return <Card data={data} />
                    })}
                </div>
            </div>
        )
    }
}

export default ShowTodoList;