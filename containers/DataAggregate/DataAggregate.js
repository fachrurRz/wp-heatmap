import React from 'react';
import { connect } from 'react-redux';
import { applyReducers } from 'soya-next/redux';
import DataAggregateReducer from '../../reducers/DataAggregateReducer';
import { compose } from 'redux';
import autobind from 'react-autobind';
import PropTypes from 'prop-types';
import { getListData } from '../../actions/DataAggregateAction';

class DataAggregate extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentWillMount() {
    this.props.getListData('AggregateData/agg.count.wdate7.json');
  }

  render() {
    console.log(this.props);
    return (
      <div>{'aaa'}</div>
    );
  }
}

DataAggregate.propTypes = {
  dataAggregate: PropTypes.object,
  getListData: PropTypes.func,
};


const mapStateToProps = state => ({
  dataAggregate: state.dataAggregate,
});

const mapDispatchToProps = dispatch => ({
  getListData(url) {
    dispatch(getListData(url));
  },
});

export default compose(
  applyReducers(DataAggregateReducer),
  connect(mapStateToProps, mapDispatchToProps)
)(DataAggregate);
