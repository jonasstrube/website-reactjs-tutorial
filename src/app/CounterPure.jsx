import React from "react";

export class CounterPure extends React.PureComponent {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this)

        this.state = {
            counterValue: 0
        }

    }

    onClick(){
        console.log("geklickt!")
        this.setState(state => {
            return{
                counterValue: state.counterValue + 1
            }
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