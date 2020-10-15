import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import FetchData from './service/FetchData';


class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
  };

  componentDidMount() {
    this.updateRocket()
  }

  updateRocket() {
    console.log(this.state);
    this.fetchData.getRocket()
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => this.setState({ rocketFeatures }, () => console.log(this.state)))
  }


  render() {
    return (
      <>
        <Header />
        <Main rocket={this.state.rocket} />
        <Footer />
      </>
    )
  }
}

export default App;
