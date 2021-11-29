const myElement = React.createElement(
    'p',
    {},
    'Das ist mein erstes React Element'
);

import { Paragraph } from './Paragraph.js'
import { Headline } from './Headline.js'
import { Message } from './Message.js';

const domTarget = document.getElementById('react-app')
const myJSXElement = <p id='my-id'>Das ist meine erstes JSX Element</p>

class App extends React.Component {
    render() {
        return (
            <div>
                <Message headline="Meine 1. Headline" text="Das ist eine Property die die main app an die Message-Klasse übergeben hat, die diese dann an die Paragraph-Klasse übergibt!"/>
                <Message headline="Meine 2. Headline" text="Das ist die zweite Property die die main app an die Paragraph-Klasse übergeben hat"/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, domTarget);