import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './ListContainer';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  render() {
    return (
        <div>
            <ListContainer />
        </div>
    )
  }
}
export default hot(module)(App)