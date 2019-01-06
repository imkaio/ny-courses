import React, { Component } from 'react';
import { Consumer } from 'app/client/context';

class HeaderHour extends Component {
  state = {
    date: ''
  }

  componentDidMount() {
    this.generateDate();
  }

  generateDate = () => {
    const date = new Date();
    const nyDate = date.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false });
    const [minutes, seconds, ms] = nyDate.split(':');
    const renewNyTime = (60 - ms) * 100;

    setTimeout(this.generateDate, renewNyTime);

    this.setState(() => ({ date: `${minutes}:${seconds}` }));
  }

  render() {
    return (
      <Consumer>
        {content => (
          <span className="header__hour">{content.HORARIO_NY}: {this.state.date}h</span>
        )}
      </Consumer>
    );
  }
}

export default HeaderHour;
