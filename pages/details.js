import { Component } from 'react';
import Head from 'next/head';
import { createPage } from 'soya-next';
import PropTypes from 'prop-types';

import WorkflowDashboardHeader from '../components/WorkflowDashboardHeader/WorkflowDashboardHeader';
import DetailPageSidebar from '../components/DetailPageSideBar/DetailPageSidebar';
import autobind from 'react-autobind';
import WorkflowDefinitionDetail from '../containers/WorkflowDefinitionDetail/WorkflowDefinitionDetail';

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    const url = this.props.url;
    autobind(this);
    this.state = { workflowDefinitionId: url.query.id, dateTime: url.query.dateTime };
  }

  render() {
    if (!this.state.workflowDefinitionId) {
      return (
        <DetailPageSidebar>
          <div>
            <Head>
              <link rel='shortcut icon' href='/static/favicon.ico' />
              <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css' />
            </Head>
            <div>
              <p>{ 'Detail Not Found' }</p>
            </div>
          </div>
        </DetailPageSidebar>
      );
    }
    return (
      <div>
        <Head>
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css' />
        </Head>
        <WorkflowDashboardHeader />
        <WorkflowDefinitionDetail workflowDefinitionId={this.state.workflowDefinitionId} dateTime={this.state.dateTime} />
      </div>
    );
  }
}

DetailsPage.propTypes = {
  url: PropTypes.object,
};

export default createPage()(DetailsPage);
