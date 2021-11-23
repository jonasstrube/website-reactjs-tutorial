const myElement = React.createElement('p', {}, 'Das ist mein erstes React Element');
const domTarget = document.getElementById('react-app');
const myJSXElement = /*#__PURE__*/React.createElement("p", {
  id: "my-id"
}, "Das ist meine erstes JSX Element");

class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("p", null, "Das ist ein React Component!");
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), domTarget);