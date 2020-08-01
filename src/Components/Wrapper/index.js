import React, { Component } from 'react';
import Theme from '../Theme';
import { connect } from 'react-redux';
import selectors from '../../Redux/selectors';
import './styles.scss';

class Wrapper extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          color: Theme[this.props.theme].fontColor,
          background: Theme[this.props.theme].bodybg,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: selectors.getTheme(state),
  };
};

export default connect(mapStateToProps, null)(Wrapper);
