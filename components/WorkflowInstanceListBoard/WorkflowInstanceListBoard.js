import React, { Component } from 'react';
import WorkflowInstanceList from '../../containers/WorkflowInstanceList/WorkflowInstanceList';
import styles from './WorkflowInstanceListBoard.module.css';

class WorkflowInstanceListBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.listContainer}>
        <WorkflowInstanceList workflowDefinitionKey={this.props.workflowDefinitionKey} />
      </div>
    );
  }
}

export default WorkflowInstanceListBoard;
