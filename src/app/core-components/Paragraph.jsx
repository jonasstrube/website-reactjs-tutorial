import React from 'react';
import './Paragraph.css';

export class Paragraph extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    return(
      <p className='paragraph'> { this.props.text } </p>
    );
  }
}