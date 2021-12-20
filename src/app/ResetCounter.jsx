import React from "react";

export class ResetCounter extends React.PureComponent {
    render(){
        const buttonDisabled = this.props.counterValue === 0;
        return(
            <button disabled={buttonDisabled} onClick={this.props.onClick}>Reset Counter</button>
        )
    }
}