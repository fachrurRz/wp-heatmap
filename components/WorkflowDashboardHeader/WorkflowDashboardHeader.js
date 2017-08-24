import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import styles from './WorkflowDashboardHeader.module.css';

class WorkflowDashboardHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu inverted>
        <Menu.Header>
          <h3 className={styles.title}>{'WP Heatmap'}</h3>
        </Menu.Header>
      </Menu>
    );
  }
}

export default WorkflowDashboardHeader;
