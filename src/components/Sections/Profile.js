import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Sentinel from "react-sentinel";

import DumbCard from "../Dumbcard";

const MobileContent = () => (
  <Fragment>
    <table cellPadding="0" cellSpacing="0" width="100%">
      <tbody>
        <tr>
          <td colSpan="3">
            <div className="circles">&nbsp;</div>
          </td>
        </tr>
      </tbody>
    </table>
  </Fragment>
);

const DesktopContent = () => (
  <Fragment>
    <table cellPadding="0" cellSpacing="0" width="70%">
      <tbody>
        <tr>
          <td colSpan="2">
            <div className="circles">&nbsp;</div>
          </td>
          <td>
            <div className="diag-lines" height="20%">
              &nbsp;
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </Fragment>
);

export default class Profile extends Component {
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

  renderProfile = ({ mobile, desktop, width }) => (
    <DumbCard mobile={mobile} desktop={desktop}>
      {mobile && <MobileContent width={width} />}
      {desktop && <DesktopContent width={width} />}
    </DumbCard>
  );

  render() {
    return (
      <div className="profile" ref={el => (this.container = el)}>
        <Sentinel observe={this.getSize} render={this.renderProfile} />
      </div>
    );
  }
}

Profile.propTypes = {
  mobile: PropTypes.bool,
  desktop: PropTypes.bool,
  children: PropTypes.object
};
