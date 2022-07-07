import React from 'react';
import propTypes from 'prop-types';
import Style from './Components.modules.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <h2 className='title'>{ headline }</h2>;
  }
}

Title.propTypes = {
  headline: propTypes.string.isRequired,
};

export default Title;
