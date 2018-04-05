import React from 'react';
import Chart from './Chart.js';

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      indexHistory: {}
    }
  }

  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((response) => {
        console.log(response.data);
        this.setState({
          indexHistory: response.data
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <Chart data={this.state.indexHistory} />
      </div>
    )
  }
}

export default App;