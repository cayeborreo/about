import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Sentinel from "react-sentinel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import DumbCard from "../Dumbcard";

const MobileContent = () => (
  <Fragment>
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td className="has-padding-5">
            <div className="h2 is-black has-primary-shadow">
              Let’s get designing.
            </div>
          </td>
        </tr>
        <tr>
          <td className="has-padding-5 has-background-secondary">
            <div className="footer-links">
              <a
                className="link"
                href="mailto:mcgborreo@gmail.com"
                title="Email me at mcgborreo@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                Message me
              </a>
              <a
                className="link"
                href="https://twitter.com/mcborreo"
                title="Tweet me at @mcborreo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
                Tweet me
              </a>
            </div>
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
          <td className="has-padding-5">
            <div className="h2 is-black has-primary-shadow">
              Let’s get designing.
            </div>
          </td>
        </tr>
        <tr>
          <td className="has-padding-5 has-background-secondary">
            <div className="footer-links">
              <a className="link" href="mailto:mcgborreo@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                Message me
              </a>
              <a className="link" href="https://twitter.com/mcborreo">
                <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
                Tweet me
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </Fragment>
);

export default class Footer extends Component {
  getSize = () => {
    const width = this.container.offsetWidth;
    if (width <= 412) {
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
