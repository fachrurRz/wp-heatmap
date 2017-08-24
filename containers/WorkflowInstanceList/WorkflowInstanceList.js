import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import autobind from 'react-autobind';
import WorkflowInstanceListItem from '../../components/WorkflowInstanceListItem/WorkflowInstanceListItem';
import WorkflowInstanceListReducer from '../../reducers/WorkflowInstanceListReducer';
import { getListData } from '../../actions/WorkflowInstanceListAction';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { applyReducers } from 'soya-next/redux';
import PropTypes from 'prop-types';

class WorkflowInstanceList extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = { workflowDefinitionKey: this.props.workflowDefinitionKey };
  }

  componentWillMount() {
    this.props.getListData(this.state.workflowDefinitionKey);
  }

  renderlist(workflowInstances) {
    return workflowInstances.map(workflowInstance =>
      <WorkflowInstanceListItem key={workflowInstance.id} workflowInstance={workflowInstance} />);
  }

  render() {
    const workflowInstances = this.props.workflowInstances.data.workflowInstances;
    if (!workflowInstances) {
      return (
        <div>{'LOADING'}</div>
      );
    }
    return (
      <div>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{'Id'}</Table.HeaderCell>
              <Table.HeaderCell>{'Start Time'}</Table.HeaderCell>
              <Table.HeaderCell>{'End Time'}</Table.HeaderCell>
              <Table.HeaderCell>{'Status'}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.renderlist(workflowInstances)}
          </Table.Body>
        </Table>
      </div>
    );
  }
}


WorkflowInstanceList.propTypes = {
  workflowInstances: PropTypes.object,
  getListData: PropTypes.func,
};

const mapStateToProps = state => ({
  workflowInstances: state.workflowInstances,
});

const mapDispatchToProps = dispatch => ({
  getListData(wp_key) {
    dispatch(getListData(wp_key));
  },
});

export default compose(
  applyReducers(WorkflowInstanceListReducer),
  connect(mapStateToProps, mapDispatchToProps)
)(WorkflowInstanceList);

