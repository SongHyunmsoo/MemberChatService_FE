import React, { Component } from 'react';
import loadable from '@loadable/component';

const ErrorPage = loadable(() => import('./pages/ErrorPage'));

class ErrorProcess extends Component {
  state = {
    message: '',
  };

  componentDidCatch(error, info) {
    this.setState({
      message: error.message,
    });

    console.error({ error, info });
  }

  render() {
    const { message } = this.state;
    return message ? <ErrorPage>{message}</ErrorPage> : this.props.children;
  }
}

export default React.memo(ErrorProcess);
