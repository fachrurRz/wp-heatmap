import React, { Component } from 'react';
import WorkflowDiagram from '../WorkflowDiagram/WorkflowDiagram';
import autobind from 'react-autobind';

class WorkflowDefinitionDiagramBoard extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  render() {
    return (
      <div>
        <WorkflowDiagram />
      </div>
    );
  }
}

export default WorkflowDefinitionDiagramBoard;
