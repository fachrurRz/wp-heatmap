import React from 'react';
import { connect } from 'react-redux';
import { applyReducers } from 'soya-next/redux';
import WorkflowDefinitionListReducer from '../../reducers/WorkflowDefinitionListReducer';
import { compose } from 'redux';
import autobind from 'react-autobind';
import WorkflowDefinitionListItem from '../../components/WorkflowDefinitionListItem/WorkflowDefinitionListItem';
import PropTypes from 'prop-types';
import { getListData } from '../../actions/WorkflowDefinitionListAction';
import { Table } from 'semantic-ui-react';
import LoadingBar from '../../components/LoadingBar/LoadingBar';

class WorkflowDefinitionList extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentWillMount() {
    this.props.getListData('AggregateData/agg.count.wdate7.json');
  }

  renderList(workflowDefinitions) {
    return workflowDefinitions.map(workflowDefinition =>
      <WorkflowDefinitionListItem key={workflowDefinition.id} workflowDefinition={workflowDefinition} />
    );
  }
  render() {
    const data = this.props.workflowDefinitions;
    if (data.loading) {
      return (
        <LoadingBar />
      );
    }
    const workflowDefinitions = data.data.workflowDefinitions;
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{'Id'}</Table.HeaderCell>
            <th>{'Key'}</th>
            <th>{'Version'}</th>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.renderList(workflowDefinitions)}
        </Table.Body>
      </Table>
    );
  }
}

WorkflowDefinitionList.propTypes = {
  workflowDefinitions: PropTypes.object,
  getListData: PropTypes.func,
};


const mapStateToProps = state => ({
  workflowDefinitions: state.workflowDefinitions,
});

const mapDispatchToProps = dispatch => ({
  getListData(fileData) {
    dispatch(getListData(fileData));
  },
});

export default compose(
  applyReducers(WorkflowDefinitionListReducer),
  connect(mapStateToProps, mapDispatchToProps)
)(WorkflowDefinitionList);

