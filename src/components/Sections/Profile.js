import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Sentinel from "react-sentinel";

import DumbCard from "../Dumbcard";

const MobileContent = () => (
  <Fragment>
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td colSpan="3" className="has-background-primary has-padding-5">
            <div className="h3 has-white-shadow">Previous work</div>
          </td>
        </tr>

        <tr>
          <td className="has-padding-5">
            I used to be part of the Blogskins community (RIP), where I made{" "}
            <a
              href="http://web.archive.org/web/20150719234753/http://blogskins.com/me/ohfudge1"
              target="_blank"
              title="ohfudge!'s profile"
              rel="noopener noreferrer"
            >
              several layouts
            </a>{" "}
            for Blogger.
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
          <td className="has-background-primary has-padding-5">
            <div className="h3 has-white-shadow">Previous work</div>
          </td>

          <td className="has-background-secondary diag-lines" width="20%" />
        </tr>

        <tr>
          <td className="has-padding-5" colSpan="2">
            I used to be part of the Blogskins community (RIP), where I made{" "}
            <a
              href="http://web.archive.org/web/20150719234753/http://blogskins.com/me/ohfudge1"
              target="_blank"
              title="ohfudge!'s profile"
              rel="noopener noreferrer"
            >
              several layouts
            </a>{" "}
            for Blogger.
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
