import React from "react";

export class Counter extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            counterValue: 0
        }

    }

    onClick(){
        console.log("geklickt!")
        this.setState((state, props) => {
            
        })
    }

    render(){
        return(
            <div>
                <h3>CounterValue is: { this.state.counterValue }</h3>
                <button onClick={this.onClick}>Klick mich!</button>
            </div>
        );
    }
}