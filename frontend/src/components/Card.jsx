import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data } = this.props;
        return (
            <div style={{ padding: "8px", display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%", border: "1px solid blue" }}>
                <div>
                    <h1>{data.title}</h1>
                    <h3>{data.description}</h3>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}

export default Card;