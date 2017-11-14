import React from 'react';

import Routes from './routes';

export default () => <Routes />;


/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'
// import Login from './Login.jsx'
// import Signup from './Signup.jsx'
import Routes from './routes';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewing: 1
    };
    this.handleClickViewChange = this.handleClickViewChange.bind(this)

  }

  componentDidMount() {

  }

  handleClickViewChange(pageNum) {
    console.log('pageNum', pageNum)
    this.setState({ viewing: pageNum }, () => { console.log('new state: ', this.state, pageNum) });
  }

  render() {

    return (
      <div id="main">
        On the react
      </div>
    )
  }
}

export default () => <Routes />;
// ReactDOM.render(<App />, document.getElementById('app'))
*/