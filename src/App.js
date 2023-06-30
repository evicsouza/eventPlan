import { Component } from "react";
import RoutesApp from "./routes";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {apiResponse: " "};
  }

  // callApi(){
  //   fetch("http://localhost:3000/api/")
  //   .then(res => res.text())
  //   .then(res => this.setState({apiResponse: res}))
  //   .catch(err => err);
  // }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body>
        <RoutesApp/>
        </body>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//       <body>
//       <RoutesApp/>
//       </body>
//     </div>
//   );
// }

export default App;
