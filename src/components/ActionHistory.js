import React, { Component } from "react";
import axios from "axios";

class ActionHistory extends Component {
  state = {
    history: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get('/api/action-history');
      this.setState({ history: response.data });
    } catch (error) {
      console.error("Error fetching action history", error);
    }
  }

  render() {
    return (
      <div>
        <h2>Action History</h2>
        <ul>
          {this.state.history.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ActionHistory;
