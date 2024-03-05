import React from 'react';
import BodySection from './BodySection'
import { StyleSheet, css } from 'aphrodite';
import PropTypes  from 'prop-types';

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(style.bodySectionWithMargin)}>
        <BodySection title={this.props.title} children={this.props.children}></BodySection>
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
}

BodySectionWithMarginBottom.defaultProps = {
  title: ''
}

const style = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px'
  }
});

export default BodySectionWithMarginBottom;