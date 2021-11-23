const myElement = React.createElement(
    'p',
    {},
    'Das ist mein erstes React Element'
);

import { Paragraph } from './Paragraph.js'

const domTarget = document.getElementById('react-app')
const myJSXElement = <p id='my-id'>Das ist meine erstes JSX Element</p>

class App extends React.Component {
    render() {
        return <Paragraph/>
    }
}

ReactDOM.render(<App/>, domTarget);