import React, { Component } from 'react';
import { Consumer } from 'app/client/context';

class HeaderHour extends Component {
  state = {
    date: ''
  }

  componentDidMount() {
    this.generateDate();
  }

  componentWillUnmount() {
    return this.timeout && clearTimeout(this.timeout);
  }

  generateDate = () => {
    const date = new Date();
    const nyDate = date.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
    const [minutes, seconds, tail] = nyDate.split(':');
    const [ms, time] = tail.split(' ');
    const renewNyTime = (60 - ms) * 100;

    this.timeout = setTimeout(this.generateDate, renewNyTime);

    this.setState(() => ({ date: `${minutes}:${seconds} ${time}` }));
  }

  render() {
    return (
      <Consumer>
        {content => (
          <span className="header__hour">{content.HORARIO_NY}: {this.state.date}</span>
        )}
      </Consumer>
    );
  }
}

export default HeaderHour;
