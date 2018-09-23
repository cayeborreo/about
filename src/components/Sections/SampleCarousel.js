import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Sentinel from "react-sentinel";

import DumbCard from "../Dumbcard";
import image1 from "../../assets/images/anything-can-happen.png";
import image2 from "../../assets/images/everlasting-arms.png";
import image3 from "../../assets/images/yellow.png";

const MobileContent = () => (
  <Fragment>
    <img src={image1} height="400" />
    <img src={image2} height="400" />
    <img src={image3} height="400" />
  </Fragment>
);

const DesktopContent = () => <Fragment />;

export default class SampleCarousel extends Component {
  getSize = () => {
    const width = this.container.offsetWidth;
    if (width <= 400) {
      return {
        desktop: false,
        mobile: true,
        width
      };
    }

    return { desktop: true, mobile: false, width };
  };

  renderSampleCarousel = ({ mobile, desktop, width }) => (
    <DumbCard mobile={mobile} desktop={desktop}>
      {mobile && <MobileContent width={width} />}
      {desktop && <DesktopContent width={width} />}
    </DumbCard>
  );

  render() {
    return (
      <div className="samplecarousel" ref={el => (this.container = el)}>
        <Sentinel observe={this.getSize} render={this.renderSampleCarousel} />
      </div>
    );
  }
}

SampleCarousel.propTypes = {
  mobile: PropTypes.bool,
  desktop: PropTypes.bool,
  children: PropTypes.object
};
