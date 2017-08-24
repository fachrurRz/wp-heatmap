import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

class LoadingBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment>
        <Dimmer active inverted>
          <Loader />
        </Dimmer>
      </Segment>
    );
  }
}

export default LoadingBar;
