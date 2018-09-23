import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Sentinel from "react-sentinel";

import DumbCard from "../Dumbcard";

const MobileContent = () => (
  <Fragment>
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td className="has-background-black has-padding-3">
            <div className="h2 is-primary">Let’s get designing.</div>
          </td>
        </tr>
      </tbody>
    </table>
  </Fragment>
);

const DesktopContent = () => (
  <Fragment>
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td className="has-background-black has-padding-5">
            <div className="h2 is-primary">Let’s get designing.</div>
          </td>
        </tr>
        <tr>
          <td className="has-padding-5" />
        </tr>
      </tbody>
    </table>
  </Fragment>
);

export default class Footer extends Component {
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

  renderFooter = ({ mobile, desktop, width }) => (
    <DumbCard mobile={mobile} desktop={desktop}>
      {mobile && <MobileContent width={width} />}
      {desktop && <DesktopContent width={width} />}
    </DumbCard>
  );

  render() {
    return (
      <div className="footer" ref={el => (this.container = el)}>
        <Sentinel observe={this.getSize} render={this.renderFooter} />
      </div>
    );
  }
}

Footer.propTypes = {
  mobile: PropTypes.bool,
  desktop: PropTypes.bool,
  children: PropTypes.object
};
