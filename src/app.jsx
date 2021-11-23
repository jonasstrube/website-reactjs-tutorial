const myElement = React.createElement(
    'p',
    {},
    'Das ist mein erstes React Element'
);

const domTarget = document.getElementById('react-app')
const myJSXElement = <p id='my-id'>Das ist meine erstes JSX Element</p>

ReactDOM.render(<App/>, domTarget);