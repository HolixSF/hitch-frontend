import React from 'react';
import ToolNavBar from './navbar/ToolNavBar'
import EventMain from './event/EventMain';

export default class AppMain extends React.Component {
  render() {
    return (
      <div>
	      <ToolNavBar onToolChange={this.props.onToolChange} tool={this.props.tool} onEventChange={this.props.onEventChange} event={this.props.event}/>
	      <EventMain onToolChange={this.props.onToolChange} tool={this.props.tool} onEventChange={this.props.onEventChange} event={this.props.event}/>
      </div>
    );
  }
}
