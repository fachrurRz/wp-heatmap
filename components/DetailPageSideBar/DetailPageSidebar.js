import React, { Component } from 'react';
import { Sidebar, Segment, Menu } from 'semantic-ui-react';
import autobind from 'react-autobind';
import styles from './DetailPageSideBar.module.css';

class DetailPageSidebar extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = { visible: false };
  }
  render() {
    return (
      <Sidebar.Pushable as={Segment} className={styles.body}>
        <Sidebar as={Menu} animation='push' width='wide' visible={this.state.visible} icon='labeled' vertical>

        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            {this.props.children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default DetailPageSidebar;
