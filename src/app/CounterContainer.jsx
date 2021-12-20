import React from "react";
import { CounterPure } from "./CounterPure";
import { ResetCounter } from "./ResetCounter";

export class CounterContainer extends React.PureComponent{
    constructor(props){
        super(props);

        this.state = {
            counterValue: 0
        }
    }

    increment(){
        console.log("geklickt!")
        this.setState(state => {
            return{
                counterValue: state.counterValue + 1
            }
        })
    }
    
    resetCounter(){
        this.setState(state => {
            return{
                counterValue: 0
            }
        })
    }

    render(){
        return(
            <div>
                <h1>CounterPure:</h1>
                <CounterPure counterValue={ this.state.counterValue } onClick={ () => this.increment() }/>
                <ResetCounter counterValue={ this.state.counterValue } onClick={ () => this.resetCounter() }/>
            </div>
        )
    }
}