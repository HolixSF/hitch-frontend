// import React, { Component, PropTypes } from 'react';

// class Main extends Component {
//     // static propTypes = {
//     //     className: PropTypes.string
//     // };

//     // constructor(props) {
//     //     super(props);
//     // }

//     render() {
//         return (
//             {this.props.children}
//         );
//     }
// }

// export default Main;

import React from 'react';

export default class Main extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
