import React, { Component } from 'react';
import BodySection from './BodySection'
import './BodySectionWithMarginBottom.css'
import { string } from 'prop-types';

class BodySectionWithMarginBottom extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className='bodySectionWithMargin'>
        <BodySection title={ title } children={ children }></BodySection>
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: string,
}

BodySectionWithMarginBottom.defaultProps = {
  title: '',
}

export default BodySectionWithMarginBottom;