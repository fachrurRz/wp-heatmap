import React, { Component } from 'react';
import style from '../Layout/Layout.module.css';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Table } from 'semantic-ui-react';

class WorkflowDefinitionListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const workflowDefinition = this.props.workflowDefinition;
    return (
      <Table.Row className={style.tr}>
        <Table.Cell><Link href={{ pathname: '/details', query: { id: workflowDefinition.id } }}><a>{workflowDefinition.id}</a></Link></Table.Cell>
        <Table.Cell>{workflowDefinition.key}</Table.Cell>
        <Table.Cell>{workflowDefinition.version}</Table.Cell>
      </Table.Row>
    );
  }
}

WorkflowDefinitionListItem.propTypes = {
  workflowDefinition: PropTypes.object,
};

export default WorkflowDefinitionListItem;

