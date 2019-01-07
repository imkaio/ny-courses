import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class Loading extends Component {
  static propTypes = {
    loaded: PropTypes.bool
  }

  state = {
    loaded: false,
    hide: false
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.loaded && this.props.loaded) {
      this.setState(() => ({ loaded: true }));
    }
  }

  handleTransitionEnd = () => {
    this.setState(() => ({ hide: true }));
  }

  render() {
    return (
      <div className={cn(
        'loading__wrapper',
        this.state.loaded && 'loading__wrapper--fadeout',
        this.state.hide && 'loading__wrapper--hide'
      )} onTransitionEnd={this.handleTransitionEnd}>
        {Array(3).fill('.').map((circle, index) => (
          <div key={index} className="loading" style={{ animationDelay: `${index * 0.12}s` }} />
        ))}
      </div>
    );
  }
}

export default Loading;
