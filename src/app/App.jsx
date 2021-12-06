import React from "react";
import { Counter } from "./Counter";
import { CounterPure } from "./CounterPure";

export class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Counter:</h1>
                <Counter/>
                <h1>CounterPure:</h1>
                <CounterPure/>
            </div>
        );
    }
}