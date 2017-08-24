import React, { Component } from 'react';
import styles from './WorkflowInstanceDetailBoard.module.css';
class WorkflowInstanceDetailBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.detaiContainer}>
        <h3>{'workflow instance detail board'}</h3>
      </div>
    );
  }
}

export default WorkflowInstanceDetailBoard;
