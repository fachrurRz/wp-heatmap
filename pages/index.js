import { Component } from 'react';
import Head from 'next/head';
import { createPage } from 'soya-next';
import WorkflowDashboardHeader from '../components/WorkflowDashboardHeader/WorkflowDashboardHeader';
import WorkflowDefinitionList from '../containers/WorkflowDefinitionList/WorkflowDefinitionList';


class IndexPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css' />
        </Head>
        <WorkflowDashboardHeader />
        <div>
          <WorkflowDefinitionList />
        </div>
      </div>
    );
  }
}

export default createPage()(IndexPage);
