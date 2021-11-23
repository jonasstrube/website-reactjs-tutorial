const myElement = React.createElement('p', {}, 'Das ist mein erstes React Element');
const domTarget = document.getElementById('react-app');
const myJSXElement = /*#__PURE__*/React.createElement("p", {
  id: "my-id"
}, "Das ist meine erstes JSX Element");
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), domTarget);