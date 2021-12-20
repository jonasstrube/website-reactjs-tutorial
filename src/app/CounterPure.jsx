import React from "react";

export class CounterPure extends React.PureComponent {
    render(){
        return(
            <div>
                <h3>CounterValue is: { this.props.counterValue }</h3>
                <button onClick={this.props.onClick}>Klick mich!</button>
            </div>
        );
    }
}