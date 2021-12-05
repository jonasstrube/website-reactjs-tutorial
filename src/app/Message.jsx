import React from 'react';
import { Headline } from './core-components/Headline';
import { Paragraph } from './core-components/Paragraph';

export class Message extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      headline: this.props.headline,
      text: this.props.text
    }
    setTimeout(
      () =>{
        this.setState({
          headline: this.props.headline_late,
          text: this.props.text_late
        })
      },
      2000
    );
  }

  render () {

    return (
      <div>
        <Headline content={ this.state.headline } />
        <Paragraph text={ this.state.text } />
      </div>
    );
  }
}