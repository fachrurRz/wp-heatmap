import React from 'react';
import { connect } from 'react-redux';
import { applyReducers } from 'soya-next/redux';
import WorkflowDefinitionDetailReducer from '../../reducers/WorkflowDefinitionDetailReducer';
import { compose } from 'redux';
import autobind from 'react-autobind';
import PropTypes from 'prop-types';
import { getDetailData } from '../../actions/WorkflowDefinitionDetailAction';
import { Segment, List, Grid, Dropdown } from 'semantic-ui-react';
import LoadingBar from '../../components/LoadingBar/LoadingBar';
import WorkflowDiagram from '../../components/WorkflowDiagram/WorkflowDiagram';


class WorkflowDefinitionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { workflowDefinitionId: props.workflowDefinitionId, dateTime: props.dateTime, pushDateTime: null };
    autobind(this);
  }

  componentWillMount() {
    this.props.getDetailData('AggregateData/agg.count.wdate7.json', this.state.workflowDefinitionId);
  }

  handleChange(event, data) {
    this.setState({ pushDateTime: data.value });
  }

  handleChange1(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    const definition = this.props.workflowDefinition;
    if (definition.loading) {
      return (
        <LoadingBar />
      );
    }
    const workflowDefinition = definition.data.workflowDefinition;
    const dateTimeList = [];
    for (const key in workflowDefinition) {
      if (key !== 'version' && key !== 'key') {
        dateTimeList.push({ key: key, value: key, text: key });
      }
    }
    const data = workflowDefinition[this.state.dateTime];
    const definitionData = { id: this.state.workflowDefinitionId, key: workflowDefinition.key, version: workflowDefinition.version };
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Segment>
              <List horizontal divided>
                <List.Item>
                  <List.Content><List.Header>{`Id : ${this.props.workflowDefinitionId}`}</List.Header></List.Content>
                </List.Item>
                <List.Item>
                  <List.Content><List.Header>{`Key : ${workflowDefinition.key}`}</List.Header></List.Content>
                </List.Item>
                <List.Item>
                  <List.Content><List.Header>{`Version : ${workflowDefinition.version}`}</List.Header></List.Content>
                </List.Item>
              </List>
              <Dropdown placeholder='State' search selection options={dateTimeList} onChange={this.handleChange} value={this.state.dateTime} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Segment><WorkflowDiagram workflowDefinition={definitionData} data={data} dateTime={this.state.dateTime} pushDateTime={this.state.pushDateTime} /></Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

WorkflowDefinitionDetail.propTypes = {
  workflowDefinition: PropTypes.object,
  workflowDefinitionKey: PropTypes.string,
  getDetailData: PropTypes.func,
};


const mapStateToProps = state => ({
  workflowDefinition: state.workflowDefinition,
});

const mapDispatchToProps = dispatch => ({
  getDetailData(fileData, id) {
    dispatch(getDetailData(fileData, id));
  },
});

export default compose(
  applyReducers(WorkflowDefinitionDetailReducer),
  connect(mapStateToProps, mapDispatchToProps)
)(WorkflowDefinitionDetail);
