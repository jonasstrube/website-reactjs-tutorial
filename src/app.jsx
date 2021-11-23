const myElement = React.createElement(
    'p',
    {},
    'Das ist mein erstes React Element'
);

import { Paragraph } from './Paragraph.js'
import { Headline } from './Headline.js'

const domTarget = document.getElementById('react-app')
const myJSXElement = <p id='my-id'>Das ist meine erstes JSX Element</p>

class App extends React.Component {
    render() {
        return (
            <div>
                <Headline headline="Hallo da draußen!"/>
                <Paragraph text="Das ist eine Property die die main app an die Paragraph-Klasse übergeben hat!"/>
                <Headline headline="2. Headline"/>
                <Paragraph text="Das ist die zweite Property die die main app an die Paragraph-Klasse übergeben hat!"/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, domTarget);