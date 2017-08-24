import React, { Component } from 'react';
import autobind from 'react-autobind';
import { Table } from 'semantic-ui-react';

class WorkflowInstanceListItem extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.workflowInstance.id}</Table.Cell>
        <Table.Cell>{this.props.workflowInstance.start_time}</Table.Cell>
        <Table.Cell>{this.props.workflowInstance.end_time}</Table.Cell>
        <Table.Cell>{this.props.workflowInstance.status.text}</Table.Cell>
      </Table.Row>

    );
  }
}

export default WorkflowInstanceListItem;
