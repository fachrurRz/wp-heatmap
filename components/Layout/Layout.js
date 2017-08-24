import Head from 'next/head';
import styles from './Layout.module.css';
import '../../styles/global.css';
import WorkflowDashboardHeader from '../WorkflowDashboardHeader/WorkflowDashboardHeader';
import WorkflowDefinitionList from '../../containers/WorkflowDefinitionList/WorkflowDefinitionList';


const Layout = () => (
  <div className={styles.layout}>
    <Head>
      <link rel='shortcut icon' href='/static/favicon.ico' />
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css' />

    </Head>
    <WorkflowDashboardHeader />
    <div className={styles.body}>
      <WorkflowDefinitionList />
    </div>
  </div>
);


export default Layout;
