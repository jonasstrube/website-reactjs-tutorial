import React from 'react';
import { Message } from './Message';

export class App extends React.Component {
  render () {
    return (
      <div>
        <Message headline='Headline 1' headline_late='too late :(' text='Das ist die 1. Nachricht' text_late='sorry!' />
        <Message headline='Headline 2' headline_late='too late :((' text='Das ist die 2. Nachricht' text_late='sorry!!' />
        <Message headline='Headline 3' headline_late='too late :(((' text='Das ist die 3. Nachricht' text_late='sorry!!!' />
      </div>
    );
  }
}