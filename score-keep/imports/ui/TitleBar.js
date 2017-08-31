import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  // Good way to put logic into JSX rendering
  renderSubtitle() {
    if(this.props.subtitle) {
      return <h2>{this.props.subtitle}</h2>;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.renderSubtitle()}
      </div>
    );
  }
}

// Will throw an error if not a string
TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}
