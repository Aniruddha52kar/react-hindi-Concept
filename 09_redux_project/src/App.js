import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './reduxContainer/Store'
import BookContainer from './reduxContainer/BookContainer';

function App() {
  return ( // store ko connect kar diya hai provider se 
  <Provider store = {store}>  

    <div className="App">
      <BookContainer />
    </div>
  </Provider>
  );
}

export default App;
