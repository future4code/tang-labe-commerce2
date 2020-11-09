import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';


class App extends React.Component {
//   state = {
//     minValue: "",
//     maxValue:""
// };

//   onChangeMinValue = (event) => {
//     this.setState({ minValue: event.target.value })
//     console.log(this.state.minValue);
//   }


  render () {

      
      return (
        <div className="App">
          <Header />
          <Main />
          
        </div>
      )
  }
}

export default App;
