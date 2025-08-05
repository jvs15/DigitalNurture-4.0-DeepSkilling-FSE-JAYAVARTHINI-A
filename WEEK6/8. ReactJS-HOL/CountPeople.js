import React from 'react';

class CountPeople extends React.Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0,
    };
  }

  updateEntry = () => {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  };

  updateExit = () => {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.updateEntry} style={{ backgroundColor: 'lightgreen', padding: '10px 20px', margin: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Login {this.state.entrycount} People Entered!!!
        </button>
        <button onClick={this.updateExit} style={{ backgroundColor: 'lightcoral', padding: '10px 20px', margin: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Exit {this.state.exitcount} People Left!!!
        </button>
      </div>
    );
  }
}

export default CountPeople;
