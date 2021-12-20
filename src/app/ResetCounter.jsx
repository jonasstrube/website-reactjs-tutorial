import React from "react";

export class ResetCounter extends React.PureComponent {
    render(){
        return(
            <button onClick={this.props.onClick}>Reset Counter</button>
        )
    }
}